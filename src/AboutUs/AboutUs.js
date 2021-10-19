import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [founders, setFounders] = useState([]);
  useEffect(() => {
    fetch("./founder.JSON")
      .then((res) => res.json())
      .then((data) => setFounders(data));
  }, []);
  const building =
    "https://media.istockphoto.com/vectors/hospital-building-isolated-vector-illustration-flat-cartoon-modern-vector-id1058679916?k=20&m=1058679916&s=612x612&w=0&h=d4k9x_3TC1_j8DtFzH3A1CigLXrjPn8dtmxhbq0umI8=";
  return (
    <div>
      <div class="grid gap-x-8 gap-y-4 grid-cols-2 mx-3 my-4">
        <div>
          <img src={building} alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-red-500"> About Us</h1>
          <h3 className="text-2xl text-blue-600 my-4">Eye Care BD</h3>
          <h6 className="text-xl text-justify">
            <span className="text-green-600">Eye Care BD </span>
            was incorporated on 18th September, 2005. As the eye care sector was
            growing rapidly in Bangladesh, a specialized hospital for the
            treatment of eye related diseases was much needed. It is the best
            eye care institute of the country and coordinates the provision of
            specialized ophthalmological services with emphasis on quality &
            affordability. Eye Care BD first started from a rented 5 storied
            building at Dhanmondi Road No. 6. To meet the increasing demand for
            clinical services and research, BEH moved to its own new facility at
            Shatmasjid Road, Dhamnondi, on the 10th October of the year 2012.
            With the promise and commitment in eye care, Bangladesh Eye Hospital
            Ltd. is now serving from 9 branches located in Dhanmondi, Banani,
            Uttara, Chittagong, Shantinagar, Khulna, Zigatola, Mirpur and a
            non-profit “Bangladesh Eye Trust Hospital” in Rayerbazar. All these
            have enhanced the BEH’s capabilities to deliver world-class cost
            effective eye care to meet the increasing demand and to expand its
            role in the eye care sector of Bangladesh.
          </h6>
        </div>
      </div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-2 mx-6 ">
        <div>
          <div className="card mt-5">
            <div className="card-body content-center">
              <i class="fas fa-user"></i>

              <h5 className="card-title font-bold">DR. Abdul Malek</h5>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-red-500 my-2">Messege From Chairman</h1>

          <h6 className="text-xl text-justify">
            Since its humble beginning over 15 years ago, Eye Care BD has come a
            long way. Today, Eye Care BD is synonymous with world-class eye care
            and expertise. We pride ourselves in being the top eye hospital in
            Bangladesh. Eye Care BD has now become the trendsetter for the eye
            care sector in the country. Our aim is to serve the community with
            outstanding patient care and the latest in medical advancements. We
            have always felt a responsibility to offer healthcare consumers the
            latest in advanced eye care at an affordable cost with a focus on
            superior customer service.
          </h6>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-4xl my-5">
          <span style={{ color: "tomato" }}>Our</span> Forum
        </h1>

        <div className="">
          <div className="row ">
            {founders.map((founder) => (
              <div key={founder.id} className="col-md-4 my-4 ">
                <div className="card">
                  <div className="">
                    <img src={founder.img} alt="" />
                  </div>
                  <div>
                    <h3 className="text-3xl  my-2"> {founder.founderName}</h3>
                    <button className="btn btn-info">Details</button>
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

export default AboutUs;
