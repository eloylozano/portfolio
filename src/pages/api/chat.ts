import type { APIRoute } from 'astro';
import { eloyData, systemPrompt } from '../../data/ai-context';
import { createClient } from '@supabase/supabase-js';

// Inicializar cliente
const supabase = createClient(
  import.meta.env.SUPABASE_URL || '',
  import.meta.env.SUPABASE_ANON_KEY || ''
);
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  try {
    const { message, language = 'es' } = await request.json();
    const model = "gemini-2.5-flash-lite"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    // MAPEADO DINÁMICO DESDE AI-CONTEXT
    // Esto extrae la info de tu objeto eloyData automáticamente
    const experienceString = eloyData.experience
      .map(exp => `- ${exp.period}: ${exp.position} en ${exp.company}. ${exp.desc}`)
      .join('\n');

    const projectsString = eloyData.projects
      .map(p => `- ${p.name} (${p.category}): ${p.highlight}. Tech: ${p.tech.join(', ')}`)
      .join('\n');

    const curiosidadesString = eloyData.curiosidades_inquietudes.join('\n- ');

    const fullDataContext = `
      FICHA TÉCNICA DETALLADA DE ELOY LOZANO:
      
      PERFIL Y FILOSOFÍA:
      ${eloyData.profile.role}. ${eloyData.profile.philosophy}
      
      TRAYECTORIA Y ESTUDIOS:
      ${experienceString}
      
      STACK TÉCNICO:
      - Frontend: ${eloyData.stack.frontend.join(', ')}
      - Backend: ${eloyData.stack.backend.join(', ')}
      - Data/IA: ${eloyData.stack.data_ai.join(', ')}
      
      PROYECTOS DESTACADOS:
      ${projectsString}
      
      INTERESES Y CURIOSIDADES:
      - Fotografía: ${eloyData.interests.photography}
      - Motor: ${eloyData.interests.motor}
      - Inquietudes: ${curiosidadesString}
    `;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n\nCONOCIMIENTO BASE DE ELOY:\n${fullDataContext}` }]
          },
          {
            role: "model",
            parts: [{ text: "Entendido. He procesado todo el historial, stack técnico y visión estratégica de Eloy Lozano. Responderé con precisión basándome en estos datos." }]
          },
          {
            role: "user",
            parts: [{ text: `Pregunta: ${message}. (Nota: Eloy tiene inquietudes variadas: desde servidores y VoIP hasta estrategia de negocio y DIY industrial. Elige la más relevante o resume varias de forma equilibrada en 2 frases).` }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.3, // Mantenemos fidelidad alta
          topP: 0.95
        }
      })
    });

    const data = await response.json();
    
    // Manejo de cuota o errores de Google
    if (response.status === 429) {
        return new Response(JSON.stringify({ 
            text: language === 'es' ? "Eloy está procesando una alta carga de datos. Hablemos en un minuto." : "Eloy is processing a high data load. Let's talk in a minute." 
        }), { status: 200 });
    }

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Lo siento, mi conexión ha fallado.";

    // --- AÑADE ESTO AQUÍ ---
    if (aiText !== "Lo siento, mi conexión ha fallado.") {
      supabase
        .from('chat_logs')
        .insert([{ 
          user_message: message, 
          ai_response: aiText, 
          language: language,
          tokens_used: data.usageMetadata?.totalTokenCount || 0 
        }])
        .then(({ error }) => {
          if (error) console.error("Error Supabase:", error.message);
        });
    }
    // -----------------------

    return new Response(JSON.stringify({ text: aiText }), { status: 200 });

  } catch (error: any) {
    console.error("Error API Chat:", error);
    return new Response(JSON.stringify({ text: "Error de conexión interna." }), { status: 500 });
  }
};