import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tupgitrfedkttdviqaxh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cGdpdHJmZWRrdHRkdmlxYXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzMzNzcsImV4cCI6MjAxNDY0OTM3N30.FK3y0xVPnwuT5HViO-OQ6Mr8l-9KTgquZO2eUkax55c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
