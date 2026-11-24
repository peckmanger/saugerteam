// ─────────────────────────────────────────────────────────────
//  Saugerteam – Konfiguration
//  Nur diese Datei musst du anpassen (siehe ANLEITUNG.md, Schritt 3).
//  Solange supabaseUrl leer ist, läuft die App im Demo-Modus
//  (Daten liegen dann nur lokal in deinem Browser).
// ─────────────────────────────────────────────────────────────
window.APP_CONFIG = {
  // Supabase → Project Settings → API → "Project URL"
  supabaseUrl: "https://vmczwljdfxwuyuokysxk.supabase.co",

  // Supabase → Project Settings → API Keys → "Publishable key" (oder "anon public").
  // Dieser Schlüssel ist öffentlich und darf im Code stehen.
  supabaseKey: "sb_publishable_SMD3LBjXLlhJH8UJKsoy7g_8mZaVz9q",

  // Anzeige
  title: "Saugerteam",
  weekdayWindow: "bis 15 Uhr",   // Mo–Fr
  weekendWindow: "bis 10 Uhr",   // Sa/So

  // Monate mit Sommer-Putzintervall (April–September), Rest = Winter
  summerMonths: [4, 5, 6, 7, 8, 9],
};
