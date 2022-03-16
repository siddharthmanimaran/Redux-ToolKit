import { login } from "./userSlice";
export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";
export const VALIDATION = (lt) => {
  //api call to validate
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(lt));
    }, 4000);
  };
};
