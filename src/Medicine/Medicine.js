import React, { useEffect, useState } from "react";

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    fetch("./medicine.JSON")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl my-5">
          <span style={{ color: "tomato" }}>Medicine</span> Corner
        </h1>

        <div className="">
          <div className="row ">
            {medicines.map((medicine) => (
              <div key={medicine.id} className="col-md-3 my-4 ">
                <div className="card">
                  <div className="">
                    <img src={medicine.img} alt="" />
                    <h1 className="text-xl my-2">
                      Category: {medicine.category}
                    </h1>
                    <button className="btn btn-danger mb-2">More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
