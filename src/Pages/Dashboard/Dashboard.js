import React from "react";

const Dashboard = () => {
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    const service = { name, price, description, image, category };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="container">
        <h1>welcome to dashboard</h1>
        <form onSubmit={addProduct}>
          <div className="mb-3">
            <label htmlFor="nameProduct" className="form-label">
              Name Of services
            </label>
            <input
              type="text"
              name="name"
              required
              id="nameProduct"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="des" className="form-label">
              Short Description
            </label>
            <textarea
              name="description"
              id="des"
              required
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="p" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              required
              id="p"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Photo url
            </label>
            <input
              type="text"
              name="image"
              required
              id="img"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cat" className="form-label">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="cat"
              required
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
