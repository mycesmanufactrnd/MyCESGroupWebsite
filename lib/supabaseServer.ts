import { createClient } from "@supabase/supabase-js";

let _client: ReturnType<typeof createClient> | undefined;

// Lazy singleton — defers createClient() until first request so
// SUPABASE_SERVICE_ROLE_KEY doesn't need to exist at Next.js build time.
export const supabaseServer = new Proxy({} as ReturnType<typeof createClient>, {
  get(_, prop) {
    if (!_client) {
      _client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
      );
    }
    return Reflect.get(_client, prop, _client);
  },
});