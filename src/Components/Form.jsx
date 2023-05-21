/* eslint-disable react/prop-types */

const Form = ({ handleSubmit, text, coffee }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* From Name Quantity Row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Cofee Name</span>
            </label>
            <label>
              <input
                type="text"
                required
                defaultValue={coffee?.name}
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label>
              <input
                type="text"
                required
                defaultValue={coffee?.quantity}
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* From Supplier Taste Row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label>
              <input
                type="text"
                required
                defaultValue={coffee?.supplier}
                placeholder="Supplier"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label>
              <input
                type="text"
                required
                defaultValue={coffee?.taste}
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* From Category Details Row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label>
              <input
                type="text"
                required
                defaultValue={coffee?.category}
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label>
              <input
                type="text"
                required
                defaultValue={coffee?.details}
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Photo Url Row */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <label>
            <input
              type="text"
              required
              defaultValue={coffee?.photoUrl}
              name="photoUrl"
              placeholder="Photo Url"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Submit Button */}
        <div className="form-control w-full mb-4">
          <input
            type="submit"
            name="submit"
            value={text}
            className="btn btn-primary w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
