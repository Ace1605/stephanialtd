export const TruncateWord = (word: string, val: number) => {
  if(word.length > val) return word.substring(0, val) + '...';
  else return word;
};