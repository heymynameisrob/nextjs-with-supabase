import { type SupabaseClient } from "@supabase/supabase-js";
import { type Database } from "./lib/database.types";

export type AppSupabaseClient = SupabaseClient<Database>;
export type Table<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export enum TableNames {
  items = "items",
  todos = "todos",
}
