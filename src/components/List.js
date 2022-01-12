import React, { useState, useEffect } from "react";

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
  console.log(cars);

  return (
    <div className="list__card">
        <div className="row">
      {cars.map((car, index) => (
          <div className="col col-md-6 col-sm-6 col-lg-4">
        <Card
          key={index}
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

function Card({ Name, Image, Price, Company, Color }) {
  console.log(Name);
  return (
    <div className="card mb-3" style={{ maxWidth: "500px" }}>
      <div className="row">
        <div className="col-md-6">
          <img src={Image} alt="Car pic" className="img-fluid"/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{Company}</h5>
            <p className="card-text">Name: {Name}</p>
            <p className="card-text">Price: {Price}</p>
            <p className="card-text">Color: {Color}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
