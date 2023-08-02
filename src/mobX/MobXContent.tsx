import { observer } from "mobx-react";
import { useEffect } from "react";
import { usersMobX } from "./store/users/users";
import { CardForm } from "../UI/CardForm"

export const MobXContent = observer(() => {
  useEffect(() => {
    usersMobX.getUsers();
  }, []);

  if (usersMobX.loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      {usersMobX.usersArray.map((el) => (
        <CardForm key={el.id} props={el} />
      ))}
    </>
  );
});
