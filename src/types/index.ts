enum Category {
  Color = 'COLOR',
  BodyShape = 'BODY_SHAPE',
  Height = 'HEIGHT',
  HeadShape = 'HEAD_SHAPE',
}

enum Color {
  Light = 'LIGHT',
  Dark = 'DARK',
}

enum BodyShape {
  Round = 'ROUND',
  Square = 'SQUARE',
}

enum Height {
  Tall = 'Tall',
  Short = 'Short',
}

enum HeadShape {
  Hollow = 'HOLLOW',
  Solid = 'Solid',
}

interface QuartoRule {
  type: Color | BodyShape | Height | HeadShape,
  category: "body" |  "color" | "head" | "height"
}

interface Piece {
  color: Color | null;
  body: BodyShape | null;
  head: HeadShape | null;
  height: Height | null;
}

interface ISelecetedPiece {
  [position: string]: Piece
}

export { Color, BodyShape, Height, HeadShape, Piece, QuartoRule, Category, ISelecetedPiece }
