import { isQuartoByHeadShape, isQuartoByBodyShape } from './../../src/utils/validator'
import { createPiece } from './../../src/utils'
import { Color, BodyShape, HeadShape, Height, ISelecetedPiece } from '@/types'
import { isQuartoByColor, isSubsetOfArray } from '../../src/utils/validator'

describe('Should return true for ', () => {
  it('isQuartoByColor - Light', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByColor(pieces, Color.Light)).toBeTruthy();
  })
  it('isQuartoByColor - Dark', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByColor(pieces, Color.Dark)).toBeTruthy();
  })
  it('isQuartoByHeadShape - Head(Hollow)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByHeadShape(pieces, HeadShape.Hollow)).toBeTruthy();
  })
  it('isQuartoByHeadShape - Head(Solid)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByHeadShape(pieces, HeadShape.Solid)).toBeTruthy();
  })
  it('isQuartoByBodyShape - Body(Round)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByBodyShape(pieces, BodyShape.Round)).toBeTruthy();
  })
  it('isQuartoByBodyShape - Body(Square)', () => {
    const pieces: ISelecetedPiece = {
      '30': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Short),
      '21': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Square, Height.Short),
      '12': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Square, Height.Short),
    }
    expect(isQuartoByBodyShape(pieces, BodyShape.Square)).toBeTruthy();
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
