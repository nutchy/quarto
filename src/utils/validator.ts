import { Piece, QuartoRule, Color, Category, ISelecetedPiece, Height, BodyShape, HeadShape } from '../types'

export const quartoPattern: string[][] = [
  ['00', '01', '02', '03'], // x = 0
  ['10', '11', '12', '13'], // x = 1
  ['20', '21', '22', '23'], // x = 2
  ['30', '31', '32', '33'], // x = 3
  ['00', '10', '20', '30'], // y = 0
  ['01', '11', '21', '31'], // y = 1
  ['02', '12', '22', '32'], // y = 2
  ['03', '13', '23', '33'], // y = 3
  ['00', '11', '22', '33'], // top left -> bottom right
  ['03', '12', '21', '30'], // top right -> bottom left
]

export const isQuarto = (pieces: ISelecetedPiece, by: Color | Height | BodyShape | HeadShape): boolean => {
  switch (by) {
    case Color.Light:
      // return isQuartoByColor(pieces, Color.Light)
    case Color.Dark:
      // return isQuartoByColor(pieces, Color.Dark)
    default:
      return false
  }
}

export const isQuartoByRule = (pieces: ISelecetedPiece, rule: QuartoRule): boolean => {
  const allPositions = Object.keys(pieces)
  const totalPattern = quartoPattern.length
  for (let i = 0;i < totalPattern;i++) {
    const pattern: string[] = quartoPattern[i]
    const isSubset = isSubsetOfArray(allPositions, pattern)
    if (!isSubset) { continue }

    const [firstPos, secondPos, thirdPos, fourthPos] = pattern
    return pieces[firstPos][rule.category] === rule.type &&
      pieces[firstPos][rule.category] === pieces[secondPos][rule.category] &&
      pieces[secondPos][rule.category] === pieces[thirdPos][rule.category] &&
      pieces[thirdPos][rule.category] === pieces[fourthPos][rule.category]
  }
  return false
}


export const isSubsetOfArray = (target: string[], subset: string[]) => {
  return subset.every(key => target.includes(key))
}
