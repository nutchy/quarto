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
      return isQuartoByColor(pieces, Color.Light)
    case Color.Dark:
      return isQuartoByColor(pieces, Color.Dark)
    default:
      return false
  }
}

export const isQuartoByColor = (pieces: ISelecetedPiece, color: Color): boolean => {
  const allPositions = Object.keys(pieces)
  const totalPattern = quartoPattern.length
  for (let i = 0;i < totalPattern;i++) {
    const pattern: string[] = quartoPattern[i]
    const isSubset = isSubsetOfArray(allPositions, pattern)
    if (!isSubset) { continue }

    const [firstPos, secondPos, thirdPos, fourthPos] = pattern
    return pieces[firstPos].color === color &&
      pieces[firstPos].color === pieces[secondPos].color &&
      pieces[secondPos].color === pieces[thirdPos].color &&
      pieces[thirdPos].color === pieces[fourthPos].color
  }
  return false
}

export const isQuartoByHeight = (pieces: ISelecetedPiece, height: Height): boolean => {
  const allPositions = Object.keys(pieces)
  const totalPattern = quartoPattern.length
  for (let i = 0;i < totalPattern;i++) {
    const pattern: string[] = quartoPattern[i]
    const isSubset = isSubsetOfArray(allPositions, pattern)
    if (!isSubset) { continue }

    const [firstPos, secondPos, thirdPos, fourthPos] = pattern
    return pieces[firstPos].height === height &&
      pieces[firstPos].height === pieces[secondPos].height &&
      pieces[secondPos].height === pieces[thirdPos].height &&
      pieces[thirdPos].height === pieces[fourthPos].height
  }
  return false
}

export const isQuartoByBodyShape = (pieces: ISelecetedPiece, body: BodyShape): boolean => {
  const allPositions = Object.keys(pieces)
  const totalPattern = quartoPattern.length
  for (let i = 0;i < totalPattern;i++) {
    const pattern: string[] = quartoPattern[i]
    const isSubset = isSubsetOfArray(allPositions, pattern)
    if (!isSubset) { continue }

    const [firstPos, secondPos, thirdPos, fourthPos] = pattern
    return pieces[firstPos].body === body &&
      pieces[firstPos].body === pieces[secondPos].body &&
      pieces[secondPos].body === pieces[thirdPos].body &&
      pieces[thirdPos].body === pieces[fourthPos].body
  }
  return false
}

export const isQuartoByHeadShape = (pieces: ISelecetedPiece, head: HeadShape): boolean => {
  const allPositions = Object.keys(pieces)
  const totalPattern = quartoPattern.length
  for (let i = 0;i < totalPattern;i++) {
    const pattern: string[] = quartoPattern[i]
    const isSubset = isSubsetOfArray(allPositions, pattern)
    if (!isSubset) { continue }

    const [firstPos, secondPos, thirdPos, fourthPos] = pattern
    return pieces[firstPos].head === head &&
      pieces[firstPos].head === pieces[secondPos].head &&
      pieces[secondPos].head === pieces[thirdPos].head &&
      pieces[thirdPos].head === pieces[fourthPos].head
  }
  return false
}


export const isSubsetOfArray = (target: string[], subset: string[]) => {
  return subset.every(key => target.includes(key))
}
