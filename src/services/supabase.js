import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cGdpdHJmZWRrdHRkdmlxYXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzMzNzcsImV4cCI6MjAxNDY0OTM3N30.FK3y0xVPnwuT5HViO-OQ6Mr8l-9KTgquZO2eUkax55c";
export const SUPABASE_URL = "https://tupgitrfedkttdviqaxh.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
