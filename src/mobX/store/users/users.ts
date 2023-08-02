import { observable, makeObservable, action } from "mobx";
import { IUser } from "../../../type/type";
import { getAllUsers } from "../../../function/getAllUsers";
import { AxiosResponse } from "axios";

class Users {
  usersArray: IUser[] = [];
  loading: boolean = false;
  error: boolean = false;

  constructor() {
    makeObservable(this, {
      usersArray: observable,
      loading: observable,
      error: observable,
      getUsers: action,
    });
  }

  async getUsers() {
    this.loading = true;
    const data: AxiosResponse<IUser[]> = await getAllUsers();

    if (data.status === 200) {
      this.usersArray = data.data;
      this.loading = false;
      this.error = true;
    } else {
      this.error = true;
    }
  }
}

export const usersMobX = new Users();
