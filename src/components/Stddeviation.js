const Stddeviation = ({ data }) => {
  const standardDeviation = (arr) => {
    const n = arr.length;
    const mean = arr.reduce((a, b) => a + b) / n;
    return Math.sqrt(
      arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
  };
  const res = standardDeviation(data);
  return (
    <>
      <h2>Standard Deviation : {res}</h2>
    </>
  );
};

export default Stddeviation;
