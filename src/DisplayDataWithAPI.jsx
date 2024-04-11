import { useEffect } from "react";
import { useState } from "react";

export const DisplayDataWithAPI = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://fake-store-api.mock.beeceptor.com/api/products")
      .then((y) => y.json())
      .then((y) => {
        setData(y);
      });
  },[]);
  

  return (
    <div>
      {data.map((v, index) => {
        return <div key={index}>{v.price}</div>;
      })}
    </div>
  )
};
