// listas.ts
export function itensDeLista1EstaoEmLista2(
  lista1: string[],
  lista2: string[]
): boolean {
  return lista1.every((item) => lista2.includes(item));
}
