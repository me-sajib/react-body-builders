import React from "react";

const Dashboard = () => {
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    console.log(name, price, description, image, category);
  };
  return (
    <div>
      <div className="container">
        <h1>welcome to dashboard</h1>
        <form onSubmit={addProduct}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name Of services
            </label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Short Description
            </label>
            <textarea
              name="description"
              id="name"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Photo url
            </label>
            <input
              type="text"
              name="image"
              id="name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="name"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">ADD PRODUCT</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
