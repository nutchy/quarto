import { isQuartoByHeadShape } from './../../src/utils/validator'
import { createPiece } from './../../src/utils'
import { basePieces } from './../../src/utils/mock'
import { Color, BodyShape, HeadShape, Height, ISelecetedPiece, Piece } from '@/types'
import { isQuartoByColor, isSubsetOfArray } from '../../src/utils/validator'

describe('Should return true for ', () => {
  it('renders props.msg when passed', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByColor(pieces, Color.Light)).toBeTruthy();
  })
  it('renders props.msg when passed', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByColor(pieces, Color.Light)).toBeFalsy();
  })
  it('renders props.msg when passed', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByHeadShape(pieces, HeadShape.Hollow)).toBeTruthy();
  })
  it('renders props.msg when passed', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByHeadShape(pieces, HeadShape.Solid)).toBeTruthy();
  })

  it('should return false', () => {
    const target = ['10']
    const subset = ['00', '01', '02', '03']
    expect(isSubsetOfArray(target, subset)).toBeFalsy();
  })
  it('should return true', () => {
    const target = ['00', '01', '02', '03', '10']
    const subset = ['00', '01', '02', '03']
    expect(isSubsetOfArray(target, subset)).toBeTruthy();
  })
  it('should return true', () => {
    const target = ['00', '01', '02', '03', '10', '11', '12', '13']
    const subset = ['10', '11', '12', '13']
    expect(isSubsetOfArray(target, subset)).toBeTruthy();
  })
})
