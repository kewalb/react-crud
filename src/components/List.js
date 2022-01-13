import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function List() {
  const [cars, setCars] = useState([{}]);
  

  useEffect(() => {
    fetch("https://61921f02aeab5c0017105d5a.mockapi.io/Car")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      })
      .catch((error) => console.log(error));
  }, []);
  

 

  return (
    <div className="list__card">
      <div className="row">
        {cars.map((car, index) => (
          <div className="col col-md-6 col-sm-6 col-lg-4" key={index}>
            <Card
              key={index}
              Id={car.id}
              Name={car.Name}
              Image={car.Image}
              Price={car.Price}
              Company={car.Company}
              Color={car.Color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

function Card({ Id, Name, Image, Price, Company, Color }) {
  const history = useHistory()


  const handleEdit = (id) => {
    history.push(`/edit/${id}`)
}

const handleDelete = (id) => {
    fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/Car/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => history.push('/list'))
        .catch((error) => console.log(error));
}
  return (
    <div className="card mb-3" style={{ maxWidth: "500px", maxHeight: "450px" }}>
          <img
            src={Image}
            alt="Car pic"
            className="img-fluid"
            style={{ backgroundSize: "contain" }}
          />
          <div className="card-body" style={{float: "left", display: "flex", flexDirection: "column", lineHeight: 1}}>
            <h5 className="card-title">{Company}</h5>
            <p className="card-text">Name: {Name}</p>
            <p className="card-text">Price: {Price}</p>
            <p className="card-text">Color: {Color}</p>
          </div>
        <div className="card-footer" style={{ maxWidth: "500px", objectFit: "contain" }}>
        <button className="btn btn-primary mx-1" onClick={() => handleEdit(Id)}>Edit</button>
        <button className="btn btn-danger mx-3" onClick={() => handleDelete(Id)}>Delete</button>
        </div>
      </div>
  );
}
