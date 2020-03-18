const conditions = 3

// write md table headers
console.log(`${Array(conditions + 3).join('| ')}|`)
console.log(`${Array(conditions + 3).join('|-')}|`)

let row = 1
for (let i = Math.pow(2, conditions) - 1; i >= 0; i--) {
  let binaryNumber = i.toString(2)

  // fill with leading zeros
  binaryNumber = binaryNumber.padStart(conditions, '0')

  let flags: string[] = []

  const bits = binaryNumber.split('')

  flags = [
    row.toString(),
    ...flags,
    ...bits.map(bit => (bit === '1' ? 'x' : '-'))
  ]
  console.log(`|${flags.join('|')}||`)
  row++
}
