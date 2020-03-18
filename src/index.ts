import { createDecisionTable } from './createDecisionTable'

const conditions = Number(process.argv[2])
console.log(`${Array(conditions + 3).join('| ')}|`)
console.log(`${Array(conditions + 3).join('|-')}|`)
console.log(createDecisionTable(conditions).join('\n'))
