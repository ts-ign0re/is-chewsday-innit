export const isChewsdayInnit = (date: Date): 'aye' | 'yeah maybe' => {
  if (date.getDay() === 2) {
    return 'aye';
  } else {
    return 'yeah maybe';
  }
};
