/**
 * Example Actions - These server actions are called from the client using the useAction hook.
 */

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';


export async function addItemAction(  
  payload: {
  name: string;
  description: string;
}) {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from('items')
    .insert(payload)
    .single();

  if (error) {
    throw error;
  }

  revalidatePath('/');
  return data
}

export async function getAllItemsAction() {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}

export async function getItemAction(id: string) {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }
}

export async function updateItemAction(payload: {
  id: string;
  name: string;
  description: string;
}) {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from('items')
    .update(payload)
    .eq('id', payload.id)
    .single();

  if (error) {
    throw error;
  }
  
  revalidatePath('/');
  return data;
}

export const deleteItemAction = async (id: string) => {
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase
    .from('items')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }

  revalidatePath('/');  
};