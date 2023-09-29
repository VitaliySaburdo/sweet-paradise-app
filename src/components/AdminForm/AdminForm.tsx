import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export const AdminForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Add goods</h2>
      
      <button onClick={() => dispatch(logOut() as any)}>Logout</button>
    </>
  );
};
