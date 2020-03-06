import { isQuartoByRule, isSubsetOfArray } from './../../src/utils/validator'
import { createPiece } from './../../src/utils'
import { Color, BodyShape, HeadShape, Height, ISelecetedPiece } from '@/types'

describe('Should return true for ', () => {
  it('isQuartoByColor - Light', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "color", type: Color.Light})).toBeTruthy();
  })
  it('isQuartoByRule - Dark', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "color", type: Color.Dark})).toBeTruthy();
  })
  it('isQuartoByHeadShape - Head(Hollow)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "head", type: HeadShape.Hollow})).toBeTruthy();
  })
  it('isQuartoByRule - Head(Solid)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Light, HeadShape.Solid, BodyShape.Square, Height.Short),
      '02': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "head", type: HeadShape.Solid})).toBeTruthy();
  })
  it('isQuartoByRule - Body(Round)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Tall),
      '03': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "body", type: BodyShape.Round})).toBeTruthy();
  })
  it('isQuartoByRule - Body(Square)', () => {
    const pieces: ISelecetedPiece = {
      '30': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Short),
      '21': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Square, Height.Short),
      '12': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Square, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "body", type: BodyShape.Square})).toBeTruthy();
  })
  it('isQuartoByRule - Height(Short)', () => {
    const pieces: ISelecetedPiece = {
      '00': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Round, Height.Short),
      '01': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Round, Height.Short),
      '02': createPiece(Color.Light, HeadShape.Solid, BodyShape.Round, Height.Short),
      '03': createPiece(Color.Dark, HeadShape.Hollow, BodyShape.Round, Height.Short),
    }
    expect(isQuartoByRule(pieces, {category: "height", type: Height.Short})).toBeTruthy();
  })
  it('isQuartoByRule - Height(Tall)', () => {
    const pieces: ISelecetedPiece = {
      '30': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Tall),
      '21': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Square, Height.Tall),
      '12': createPiece(Color.Dark, HeadShape.Solid, BodyShape.Square, Height.Tall),
      '03': createPiece(Color.Light, HeadShape.Hollow, BodyShape.Square, Height.Tall),
    }
    expect(isQuartoByRule(pieces, {category: "height", type: Height.Tall})).toBeTruthy();
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
