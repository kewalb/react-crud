import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Edit() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const {id} = useParams()

  useEffect(() => {
    fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/Car/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCompany(data.Company);
      setName(data.Name);
      setPrice(data.Price);
      setColor(data.Color);
      setImage(data.Image);
    })
    .catch((error) => console.log(error));
  })

  const handleSubmit = () => {
    const car = {
      Company: company,
      Name: name,
      Price: price,
      Color: color,
      Image: image,
    };

    fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/Car/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="create__form container">
      <h3>Edit car details.</h3>
      <hr />
      <form>
        <div className="form-group">
          <label>Car Company:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Car Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="url"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
