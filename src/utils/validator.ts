
import { Piece, WinningRule, Color, Category } from '../types'
export const isQuarto = (pieces: Piece[]): WinningRule => {
  return { type: Color.Dark, category: Category.Color }
}

export const isQuartoByColor = (pieces: Piece[], color: Color): boolean => {
  switch (color) {
    case Color.Light:
      return true
    case Color.Dark:
      return false
    default:
      return false
  }
}
