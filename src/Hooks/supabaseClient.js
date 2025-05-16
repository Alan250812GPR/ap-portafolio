import { createClient } from '@supabase/supabase-js';

// Asegúrate de usar variables de entorno para tus credenciales
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);