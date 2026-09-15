export function croppedNikname(text: string, maxLenght = 4) {
  return text.length > maxLenght ? `${text.slice(0, maxLenght)}` : text;
}
