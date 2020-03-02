import { Color } from '../../src/types'
import { isQuartoByColor } from '../../src/utils/validator'

describe('Should return true for ', () => {
  it('renders props.msg when passed', () => {
    const isQuartoByDarkColor = isQuartoByColor([], Color.Dark)
    expect(isQuartoByDarkColor).toBeFalsy();
  })
  it('renders props.msg when passed', () => {
    const isQuartoByLightColor = isQuartoByColor([], Color.Light)
    expect(isQuartoByLightColor).toBeTruthy();
  })
})
