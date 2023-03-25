import React, { useEffect, useState } from "react";
import { getTotal } from "../../utilities/calculate";
import Cosmetic from "../cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const total = getTotal(cosmetics);

  return (
    <div>
      <h1>Welcome to my cosmetic Store</h1>
      <p>Money Needed: {total}</p>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;

// const first = 55;
//   const second = 66;
//   const total = add(first, second);
