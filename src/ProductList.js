import axios from "axios";
import React, { useEffect } from "react";

const ProductList = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
  };

  useEffect(() => {
    axios
      .post("https://beta.wasilonline.net/dashboard/api/products", config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
