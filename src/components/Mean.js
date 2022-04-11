const Mean = ({ data }) => {
  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const res = mean(data);
  return (
    <>
      <h2>Mean : {res}</h2>
    </>
  );
};

export default Mean;
