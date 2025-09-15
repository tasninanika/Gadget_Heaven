import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetsCards = () => {
 
  const data = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filterByCategory = data.filter(
        (gadget) => gadget.category.toLowerCase() === category.toLowerCase()
      );
      setGadgets(filterByCategory);
    } else {
      setGadgets(data.slice(0,9));
    }
  }, [category, data]);

  console.log("Data:", data);
  console.log("Filtered Gadgets:", gadgets);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px]">
      {gadgets.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default GadgetsCards;
