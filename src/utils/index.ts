import { Piece, Color, HeadShape, BodyShape, Height } from '@/types';

export const initialPieces = (): Piece[] => {
  const pieces: Piece[] = []
  const colors = Object.values(Color)
  const headShapes = Object.values(HeadShape)
  const bodyShapes = Object.values(BodyShape)
  const heights = Object.values(Height)
  colors.forEach(color => {
    headShapes.forEach(head => {
      bodyShapes.forEach(body => {
        heights.forEach(height => {
          pieces.push({ color, head, body, height })
        })
      })
    })
  })
  return pieces
}
