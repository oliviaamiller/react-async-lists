import { checkError, client } from './client';

export async function fetchBooks() {
  const response = await client   
    .from('books')
    .select();

  return checkError(response);
}

export async function fetchCakes() {
  const response = await client 
    .from('cakes')
    .select();

  return checkError(response);
}