import axios from "axios";
import { toast } from "react-toastify";

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch({ type: "UPDATE", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const ediDetail = (id, values) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        values
      );
      dispatch({ type: "UPDATE", payload: response.data });
      toast.success("Data successfully edited!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#48BB78" },
      });
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something's wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#e85362" },
      });
    }
  };
};

export const addNewData = (values) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        values
      );
      dispatch({ type: "UPDATE", payload: response.data });
      toast.success("Data successfully added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#48BB78" },
      });
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something's wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#e85362" },
      });
    }
  };
};

export const deleteData = (id) => {
  return async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      toast.success("Data successfully deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#48BB78" },
      });
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something's wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#e85362" },
      });
    }
  };
};
