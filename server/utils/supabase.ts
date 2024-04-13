import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sfesooveqwsgfzkosmxu.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZXNvb3ZlcXdzZ2Z6a29zbXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5OTg0MzMsImV4cCI6MjAyODU3NDQzM30.VsmHNhrmVG1Iznyva5-KPDykWAo9F58B72y2lZx_blw'; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);