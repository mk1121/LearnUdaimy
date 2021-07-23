import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [course, setCourse] = useState([]);
  console.log(course);
  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        setCourse(dat);
      });
  }, []);
  return (
    <div className="App">
      <div className="logo bg-primary">
        <img src="logo3.png" alt="logo" />
      </div>

      {course.map((d) => (
        <div className="course-section">
          <p>{d.title}</p>
          <img src={d.imgUrl} alt={d.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
