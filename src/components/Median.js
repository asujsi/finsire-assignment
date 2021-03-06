const Median = ({ data }) => {
  const median = (arr) => {
    const sorted = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  };
  const res = median(data);
  return (
    <>
      <h2>Median : {res}</h2>
    </>
  );
};

export default Median;
