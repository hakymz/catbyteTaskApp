import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRequest } from "../helper";
import { updateUsers } from "../redux/slices";

export const useUser = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userData) || {};

  React.useEffect(() => {}, []);

  const getUsers = async () => {
    const response = await fetchRequest({
      path: "https://dummyjson.com/users",
      method: "GET",
    });

    dispatch(updateUsers(response.users));
  };

  const addUser = (data) => {
    dispatch(updateUsers([data, ...users]));
  };
  return {
    users,
    getUsers,
    addUser,
  };
};
