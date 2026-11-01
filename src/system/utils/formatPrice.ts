// Формирование числа в цену в долларах с двумя знаками после запятой.
export function formatPrice(value: number): string {
  return `$${value.toFixed(2).replace(".", ",")}`;
}