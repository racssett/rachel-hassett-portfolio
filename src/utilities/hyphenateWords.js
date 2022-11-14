const hyphenateWords = (str) => {
  const hyphenatedStr = str.toLowerCase().replaceAll(' ', '-')
  const noSpecialChars = hyphenatedStr.replace(/[^a-zA-Z0-9-]/g, '')
  return noSpecialChars
}

export default hyphenateWords