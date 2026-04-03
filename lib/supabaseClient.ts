import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fclvkmfausfiseoukhax.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjbHZrbWZhdXNmaXNlb3VraGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDM5MjEsImV4cCI6MjA4ODU3OTkyMX0.De--AmkuSsAEAAMoPsFMrnJyeFuUrxHId4BxPiij8JY";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY
);
