import Swal from "sweetalert2";
import Form from "./Form";

const AddCoffee = () => {
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
    console.log(coffee);
    fetch("https://coffee-store-server-five.vercel.app/coffees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Coffee Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="px-24 py-16 bg-[#f4f3f0]">
      <h2 className="text-3xl font-bold text-center mb-4">Add a Coffee</h2>
      <Form text={"Add Coffee"} handleSubmit={handleSubmit}></Form>
    </div>
  );
};

export default AddCoffee;
