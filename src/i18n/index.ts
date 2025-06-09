import en from './en';
import es from './es';
import de from './de';

const translations = { en, es, de };

export function t(lang: string, key: string): string {
  const keys = key.split('.'); 
  let result = translations[lang];

  for (const k of keys) {
    if (!result) break;
    result = result[k];
  }

  if (!result) {
    // fallback a español
    result = translations['en'];
    for (const k of keys) {
      if (!result) break;
      result = result[k];
    }
  }

  return result ?? key; // si no existe, devolver la clave original
}
