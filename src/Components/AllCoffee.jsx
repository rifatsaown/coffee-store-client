import { useLoaderData } from "react-router-dom";
import CoffeeDetails from "./CoffeeDetails";

const AllCoffee = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">{coffees.length} Coffee Found For you</h1>
      <div className="grid md:grid-cols-2 gap-5 m-20">
        {coffees.map((coffee, index) => (
          <CoffeeDetails key={index} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
