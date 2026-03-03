import { createClient } from '@supabase/supabase-js'

// Replace these with your own Supabase credentials from https://supabase.com
// You can create a free project at supabase.com
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

