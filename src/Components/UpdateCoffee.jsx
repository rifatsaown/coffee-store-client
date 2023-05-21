import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "./Form";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id } = coffee;
  const handleSubmit = (e) => {
    e.preventDefault();
    const coffee = {
      name: e.target.name.value,
      quantity: e.target.quantity.value,
      supplier: e.target.supplier.value,
      taste: e.target.taste.value,
      category: e.target.category.value,
      details: e.target.details.value,
      photoUrl: e.target.photoUrl.value,
    };
    fetch(`https://coffee-store-server-five.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffee),
    }).then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#f4f3f0]">
      <h1 className="text-center text-3xl font-bold pt-3">Update Coffee</h1>
      <div className="py-16 px-24">
        <Form handleSubmit={handleSubmit} coffee={coffee} />
      </div>
    </div>
  );
};

export default UpdateCoffee;
