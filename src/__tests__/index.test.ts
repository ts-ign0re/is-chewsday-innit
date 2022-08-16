import { isChewsdayInnit } from '../index';

describe('isChewsdayInnit', () => {
  it('should return "aye" if the date is a chewsday', () => {
    const date = new Date('2022-08-16T16:00:00.000Z');
    expect(isChewsdayInnit(date)).toBe('aye');
  });

  it('should return "yeah maybe" if the date is not a chewsday', () => {
    const date = new Date('2022-08-17T08:35:07.234Z');
    expect(isChewsdayInnit(date)).toBe('yeah maybe');
  });
});
