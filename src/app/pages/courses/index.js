import React, { useEffect } from 'react';
import { connect } from 'react-redux';  

import { fetchCourses } from './redux/redx'; 
    const Courses = (props) => {
        useEffect(() => {
         props.fetchCourses();
       }, []);
      
     const data= useLoaderData();
     console.log(data);
  return (
    <div className="courses-list">
    <h1>Courses List</h1>
    <ul>
      {props.courses.map((course) => (
        <li key={course.title}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>{course.price}</p>
        </li>
      ))}
    </ul>
  </div>
);
};
 
const mapStateToProps = (state) => {
return {
  courses: state.courses.courses,
  };
};
 
const mapDispatchToProps = (dispatch) => {
return {
  fetchCourses: () => dispatch(fetchCourses(data)),
};
};

const ConnectedCoursesList = connect(
mapStateToProps,
mapDispatchToProps
)(CoursesList);

 
   

export default Courses