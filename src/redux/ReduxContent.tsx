import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/usersSlice/usersAction";
import { CardForm } from "../UI/CardForm";
import { IUser } from "../type/type";

export const ReduxContent = () => {
  const dispatch = useDispatch();
	
  const [users, setUsers] = useState<any>({error: false, users: []});
  const [loading, setLoading] = useState<any>(false);

  useSelector((state: any) => state.usersRootReducer).then((data: any) => {
		setLoading(false)
    setUsers(data);
  });

  useEffect(() => {
		setLoading(true)
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      {users.users.map((el: IUser) => (
        <CardForm key={el.id} props={el} />
      ))}
    </>
  );
};
