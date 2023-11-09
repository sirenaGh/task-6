import React from "react" 
import Home from "./pages/layouts/Home";
import Courses from './pages/courses/index';
import News from "./pages/news/index";
import Students from "./pages/students/index";
import Teachers from "./pages/teachers/index";
import About from "./pages/about/index";
export default Page = ({ page }) => {
  <Home/>
  switch (page) { 
    case "about":
      return <About />;
    case "courses":
      return <Courses />;
    case "news":
      return <News />;
    case "students":
      return <Students />;
    case "teachers":
      return <Teachers />;
    default:
      return null;
  }
};
