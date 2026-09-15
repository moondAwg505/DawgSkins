// Функция для перевода никнейма на английский язык(Транслитерация)

const translitMap: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
  з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
  п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
  ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};

export function translateNikname(text: string): string {
    return text
    .split('')
    .map((char) => {
        const lower = char.toLocaleLowerCase()
        const mapped = translitMap[lower]
        if (mapped === undefined) return char // если никнейм не на кририлице, то мы его не трогаем
        return char === lower ? mapped : mapped.charAt(0).toUpperCase() + mapped.slice(1)
    })
    .join('')
}