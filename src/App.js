import { useState, useEffect } from "react";
import Mean from "./components/Mean";
import Median from "./components/Median";
import Mode from "./components/Mode";
import Stddeviation from "./components/Stddeviation";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const datafromAPI = await fetchData();
      setData(datafromAPI);
    };
    getData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/data", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const fetchData = await res.json();
      return fetchData;
    } catch (err) {
      console.log(err);
    }
  };

  const editData = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    data.map(() => Math.floor(Math.random() * 1000) + 1);
    setData(data);
  };

  return (
    <>
      <button onClick={editData}>Update Dataset</button>
      <Mean data={data} />
      <Median data={data} />
      <Mode data={data} />
      <Stddeviation data={data} />
    </>
  );
};

export default App;
