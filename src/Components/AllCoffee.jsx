import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeDetails from "./CoffeeDetails";

const AllCoffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">
        {coffees.length} Coffee Found For you
      </h1>
      <div className="grid md:grid-cols-2 gap-5 m-20">
        {coffees.map((coffee, index) => (
          <CoffeeDetails
            key={index}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
