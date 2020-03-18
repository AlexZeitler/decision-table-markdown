const createDecisionTable = (conditions: number): string[] => {
  return Array.from(Array(Math.pow(2, conditions)).keys())
    .reverse()
    .map((number, index) => {
      const binaryNumber = number.toString(2)
      const flags = [
        (index + 1).toString(),
        ...binaryNumber
          .padStart(conditions, '0')
          .split('')
          .map(bit => (bit === '1' ? 'x' : '-'))
      ].join('|')
      return `|${flags}||`
    })
}

export { createDecisionTable }
