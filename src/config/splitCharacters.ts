interface Included {
    firstValue?: string,
    secondValue?: string,
    array: Array<any>
}

const isIncluded = ({firstValue, secondValue, array}: Included) => {
    const filter = array.find(el => el.symbol.toUpperCase().includes(firstValue || secondValue))
    
    return filter;
  }

const filterElements = (text: string, array: Array<any>) => {
  if(!text) return [];
  let result: string[] = []

  for (let i = 0; i < text.length; i++) {
    if (isIncluded({secondValue: `${text[i].toUpperCase()}${text[i + 1]}`.toUpperCase(), array})) {
      result = [text.slice(0, i), `${text[i].toUpperCase()}${text[i + 1]}`.toUpperCase(), text.slice(i + 2, text.length)]
      break
    }

    if (isIncluded({firstValue: text[i].toUpperCase(), array})) {
      result = [text.slice(0, i), text[i].toUpperCase(), text.slice(i + 1, text.length)]
      break;
    }
  }

  if (!result.length) {
    result = [text, '', '']
  }

  return result
}

export default filterElements;
