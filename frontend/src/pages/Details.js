import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = (props) => {
  const location = useLocation();
  const [procuct, setProduct] = useState([]);

  const id = location.state.id;
  console.log(id);
  console.log(`${process.env.REACT_APP_BASE_URL}/getById/${id}`);

  const fetchDetail = async () => {
    try {
      const getProdectDetail = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getById/${id}`,
        {
          method: "Get",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getProdectDetail.json();
      console.log(res);
      setProduct(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(procuct);
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <div className="w-full h-[100vh flex justify-center pt-20">
      <div className="flex  flex-col w-[60%] gap-10">
        <h1 className="text-5xl">{procuct.name}</h1>
        <p className="text-2xl ">{procuct.description}</p>
      </div>
    </div>
  );
};

export default Details;
