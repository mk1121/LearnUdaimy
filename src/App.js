import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);
  const addHandler = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        setCourse(dat);
      });
  }, []);
  return (
    <div className="App">
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>

      <div className="course-container">
        <div className="course-section">
          {course.map((d) => (
            <Courses
              name={d.title}
              img={d.imgUrl}
              instructor={d.instructor}
              price={d.price}
              key={d.id}
              addHandler={addHandler}
            ></Courses>
          ))}
        </div>
        <div className="course-cart-sec">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
