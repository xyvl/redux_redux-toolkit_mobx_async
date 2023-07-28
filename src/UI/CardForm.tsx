import React from "react";
import { IUser } from "../redux-toolkit/store/users/type";

interface IProps {
  props: IUser;
}
export const CardForm: React.FC<IProps> = ({ props }) => {
  return (
    <div className="card">
      <div className="card_first_column">
        <span>id: {props.id}</span>
        <span>{`email: ${props.email}`}</span>
      </div>
      <div className="card_second_column">
        <div className="card_gap">
          <p>{`Имя: ${props.name}`}</p>
          <p>{`Фамилия: ${props.username}`}</p>
        </div>
        <div className="card_gap">
          <p>{`Улица: ${props.address.street}`}</p>
          <p>{`Люкс: ${props.address.suite}`}</p>
          <p>{`Город: ${props.address.city}`}</p>
          <p>{`Почтовый индекс: ${props.address.zipcode}`}</p>
          <p>{`lat: ${props.address.geo.lat}`}</p>
          <p>{`lng: ${props.address.geo.lng}`}</p>
        </div>
      </div>
    </div>
  );
};
