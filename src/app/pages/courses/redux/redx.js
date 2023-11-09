import axios from "axios";
import USER from "./type";

export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get("./data.json");
    console.log(json);
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};
 

export const fetchCourses = () => {
    return (dispatch) => {
      fetch('./data.json')
      .then((response) => response.json()) 
      .then((data) => {
        dispatch({
          type: FETCH_COURSES,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
