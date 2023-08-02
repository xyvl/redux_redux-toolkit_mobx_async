import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "./hooks/redux";
import { getUsers } from "./store/users/usersSlice";
import { CardForm } from "../UI/CardForm"

export const ReduxToolkitContent = () => {
  const dispatch = useCustomDispatch();
  const user = useCustomSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (user.loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      {user.users.map((el) => (
        <CardForm key={el.id} props={el}/>
      ))}
    </>
  );
};
