import { colors } from './index';

describe('colors', () => {
  it('should confirm colors are valid', () => {
    expect({
      error400: '#FF0000',
      error300: '#FF5656',
      error200: '#FDA1A1',
      error100: '#FCDEDE',

      success400: '#02A543',
      success300: '#4EB241',
      success200: '#A2DDB9',
      success100: '#D4EEDE',

      warning200: '#febb02',
      warning100: '#cd8900',

      dark500: '#000',
      dark400: '#171719',
      dark300: '#4D4D4D',
      dark200: '#999999',
      dark100: '#C9C9C9',

      white400: '#fff',
      white300: '#FDFEFF',
      white200: '#F7F7F7',
      white100: '#F7F7F7',

      primary500: '#1e90ff',
      primary400: '#0038FF',
      primary300: '#5B7FFE',
      primary200: '#A1B5FD',
      primary100: '#D4DDFC',

      secondary100: '#E7F4C3',
    }).toMatchObject(colors);
  });
});
