// src/i18n/index.ts
import en from './en';
import es from './es';
import de from './de';

const translations = { en, es, de };
const defaultLang = 'es'; // Definimos español como base

export function t(lang: string, key: string): any {
  const keys = key.split('.');
  
  // 1. Validamos que el idioma solicitado exista, si no, usamos el default
  const targetLang = translations[lang] ? lang : defaultLang;
  let result = translations[targetLang];

  // 2. Intentamos buscar la clave en el idioma seleccionado
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      result = null;
      break;
    }
  }

  // 3. Si no existe en el idioma seleccionado, hacemos el FALLBACK al español
  if (!result && targetLang !== defaultLang) {
    result = translations[defaultLang];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        result = null;
        break;
      }
    }
  }

  // 4. Si después de todo no hay nada, devolvemos la clave para saber qué falta traducir
  return result ?? key;
}