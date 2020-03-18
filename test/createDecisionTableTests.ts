import { createDecisionTable } from '../src/createDecisionTable'
import * as should from 'should'
require('should')

describe('createDecisionTable', () => {
  describe('when having 2 conditions', (): void => {
    it('should yield 4 rows', done => {
      const expectedTable = ['|1|x|x||', '|2|x|-||', '|3|-|x||', '|4|-|-||']
      const table = createDecisionTable(2)
      table.should.deepEqual(expectedTable)
      return done()
    })
  })

  describe('when having 5 conditions', (): void => {
    it('should yield 32 rows', done => {
      const expectedTable = [
        '|1|x|x|x|x|x||',
        '|2|x|x|x|x|-||',
        '|3|x|x|x|-|x||',
        '|4|x|x|x|-|-||',
        '|5|x|x|-|x|x||',
        '|6|x|x|-|x|-||',
        '|7|x|x|-|-|x||',
        '|8|x|x|-|-|-||',
        '|9|x|-|x|x|x||',
        '|10|x|-|x|x|-||',
        '|11|x|-|x|-|x||',
        '|12|x|-|x|-|-||',
        '|13|x|-|-|x|x||',
        '|14|x|-|-|x|-||',
        '|15|x|-|-|-|x||',
        '|16|x|-|-|-|-||',
        '|17|-|x|x|x|x||',
        '|18|-|x|x|x|-||',
        '|19|-|x|x|-|x||',
        '|20|-|x|x|-|-||',
        '|21|-|x|-|x|x||',
        '|22|-|x|-|x|-||',
        '|23|-|x|-|-|x||',
        '|24|-|x|-|-|-||',
        '|25|-|-|x|x|x||',
        '|26|-|-|x|x|-||',
        '|27|-|-|x|-|x||',
        '|28|-|-|x|-|-||',
        '|29|-|-|-|x|x||',
        '|30|-|-|-|x|-||',
        '|31|-|-|-|-|x||',
        '|32|-|-|-|-|-||'
      ]
      const table = createDecisionTable(5)
      table.should.deepEqual(expectedTable)
      return done()
    })
  })
})
