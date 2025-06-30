import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";

// const router = createBrowserRouter([
//   {
//     path: "home",
//     element: <Home />,
//   },
//   {
//     path: "blog",
//     element: <Blog />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

// JSX based routing
const routes = () => (
  <Routes>
    <Route path="home" element={<Home />} />
    <Route path="blog" element={<Blog />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
);

function Routing() {
  return (
    <div>
      <p>Routing</p>
      {routes}
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default Routing;
