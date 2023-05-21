/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeDetails = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, details, photoUrl } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-five.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            } else {
              Swal.fire(
                "Deleted!",
                "Your Coffee has been already deleted.",
                "error"
              );
            }
            const remainingCoffees = coffees.filter((cof) => cof._id !== id);
            setCoffees(remainingCoffees);
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-200 shadow-xl p-4">
        <figure>
          <img src={photoUrl} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full items-center">
          <div className="ml-8 ">
            <h2 className="card-title">Name: {name}</h2>
            <p>{details}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="mr-8">
            <div className="btn-group btn-group-vertical ">
              <button className="btn">View</button>
              <Link className="btn btn-primary" to={`/coffee/${_id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
