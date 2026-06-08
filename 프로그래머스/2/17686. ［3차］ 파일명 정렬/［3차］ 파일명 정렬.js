function solution(files) {
  const parsed = files.map((file, index) => {
    const match = file.match(/(\d{1,5})/);
    const numberStart = match.index;
    const numberText = match[1];
    const head = file.slice(0, numberStart).toLowerCase();
    const number = Number(numberText);

    return { file, head, number, index };
  });

  parsed.sort((a, b) => {
    if (a.head < b.head) return -1;
    if (a.head > b.head) return 1;
    if (a.number !== b.number) return a.number - b.number;
    return a.index - b.index;
  });

  return parsed.map((item) => item.file);
}