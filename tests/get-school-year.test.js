const getSchoolYear = require('../index')

describe('test get-school-year', () => {
  it('returns expected result for 2020-02-01', () => {
    expect(getSchoolYear('2020-02-01')).toBe('2019/2020')
  })

  it('returns expected result for 2020-08-01', () => {
    expect(getSchoolYear('2020-08-01')).toBe('2020/2021')
  })

  it('returns expected result for 2019-04-01', () => {
    expect(getSchoolYear('2019-04-01')).toBe('2018/2019')
  })
})
