const Mode = ({ data }) => {
  const mode = (a) => {
    a = a.slice().sort((x, y) => x - y);
    let bestStreak = 1;
    let bestElem = a[0];
    let currentStreak = 1;
    let currentElem = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i - 1] !== a[i]) {
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
          bestElem = currentElem;
        }
        currentStreak = 0;
        currentElem = a[i];
      }
      currentStreak++;
    }
    return currentStreak > bestStreak ? currentElem : bestElem;
  };
  const res = mode(data);
  return (
    <>
      <h2>Mode : {res}</h2>
    </>
  );
};

export default Mode;
