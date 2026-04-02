import { createClient } from '@supabase/supabase-js';

// Cara panggil ENV di Vite berbeda dengan Next.js
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Waduh, URL atau Key Supabase belum diisi di file .env!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
