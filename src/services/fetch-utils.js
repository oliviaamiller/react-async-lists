import { checkError, client } from './client';

export async function fetchBooks() {
  const response = await client   
    .from('books')
    .select();

  return checkError(response);
}