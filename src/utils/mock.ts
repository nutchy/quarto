import { Piece, Color, HeadShape, BodyShape, Height } from '@/types'
export const basePieces: Piece[] = [
  { color: Color.Light, head: HeadShape.Hollow, body: BodyShape.Round, height: Height.Tall },
  { color: Color.Light, head: HeadShape.Hollow, body: BodyShape.Round, height: Height.Short },
  { color: Color.Light, head: HeadShape.Hollow, body: BodyShape.Square, height: Height.Tall },
  { color: Color.Light, head: HeadShape.Hollow, body: BodyShape.Square, height: Height.Short },
  { color: Color.Light, head: HeadShape.Solid, body: BodyShape.Round, height: Height.Tall },
  { color: Color.Light, head: HeadShape.Solid, body: BodyShape.Round, height: Height.Short },
  { color: Color.Light, head: HeadShape.Solid, body: BodyShape.Square, height: Height.Tall },
  { color: Color.Light, head: HeadShape.Solid, body: BodyShape.Square, height: Height.Short },
  { color: Color.Dark, head: HeadShape.Hollow, body: BodyShape.Round, height: Height.Tall },
  { color: Color.Dark, head: HeadShape.Hollow, body: BodyShape.Round, height: Height.Short },
  { color: Color.Dark, head: HeadShape.Hollow, body: BodyShape.Square, height: Height.Tall },
  { color: Color.Dark, head: HeadShape.Hollow, body: BodyShape.Square, height: Height.Short },
  { color: Color.Dark, head: HeadShape.Solid, body: BodyShape.Round, height: Height.Tall },
  { color: Color.Dark, head: HeadShape.Solid, body: BodyShape.Round, height: Height.Short },
  { color: Color.Dark, head: HeadShape.Solid, body: BodyShape.Square, height: Height.Tall },
  { color: Color.Dark, head: HeadShape.Solid, body: BodyShape.Square, height: Height.Short },
]
