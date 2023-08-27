import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wbyvutaafajoeaxqpqgs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndieXZ1dGFhZmFqb2VheHFwcWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwMzEyNDcsImV4cCI6MjAwODYwNzI0N30.Je1uNj9HXrxVG6dhkHKLAAVwqzC0PUse4ro6hH7prjg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
