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
    const experienceString = eloyData.experience
      .map(exp => `- ${exp.position} en ${exp.company}`)
      .join('\n');

      const fullDataContext = `
      PERFIL: ${eloyData.profile.role}.
      TRAYECTORIA: ${experienceString}
      STACK: ${eloyData.stack.frontend.join(', ')}, ${eloyData.stack.backend.join(', ')}.
      INTERESES: Fotografía, Motor, DIY Industrial, VoIP.
    `;

    // Instrucciones de comportamiento para evitar respuestas largas y poco realistas
    const behaviorRules = `
      Eres el Alter-Ego de Eloy Lozano. 
      REGLAS CRÍTICAS:
      1. Si el usuario te saluda o hace una pregunta simple, responde de forma breve y humana (máximo 2 frases).
      2. No resumas toda la carrera de Eloy a menos que te pregunten específicamente por su experiencia.
      3. No uses listas de viñetas. Usa un tono conversacional, profesional e ingenioso.
      4. Responde siempre en el idioma: ${language}.
    `;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n${behaviorRules}\n\nCONTEXTO:\n${fullDataContext}` }]
          },
          {
            role: "model",
            parts: [{ text: "Entendido. Soy el Alter-Ego de Eloy. Responderé con brevedad y personalidad." }]
          },
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 800, // Límite físico para evitar parrafadas
          temperature: 0.3,     // Mayor naturalidad
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