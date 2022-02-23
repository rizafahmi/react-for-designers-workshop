function titleCase(text: string | number) {
  if(typeof text === 'string'){
    const firstChar = text[0].toUpperCase();
    const restChars = text.slice(1).toLowerCase();
    return firstChar + restChars;
  }
  
  
}