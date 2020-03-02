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

interface WinningRule {
  type: Color | BodyShape | Height | HeadShape,
  category: Category
}

interface Piece {
  color: Color;
  body: BodyShape;
  head: HeadShape;
  height: Height;
}

export { Color, BodyShape, Height, HeadShape, Piece, WinningRule, Category }
