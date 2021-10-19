import React, { useEffect, useState } from "react";

const Education = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div>
        <div>
          <h1 style={{ color: "tomato" }} className="font-bold text-4xl my-5">
            Courses
          </h1>
          <div className="">
            <div className="row ">
              {courses.map((course) => (
                <div key={course.id} className="col-md-3 my-4 ">
                  <div className="card">
                    <div className="mx-2 my-3">
                      <h1 className="text-2xl">Name: {course.course}</h1>
                      <h1 className="text-xl my-2">
                        Duration: {course.duration}
                      </h1>
                      <p className="text-justify my-2">{course.details}</p>
                      <button className="btn btn-danger">Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
