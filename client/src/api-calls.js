import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    alert(err.response.data);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
