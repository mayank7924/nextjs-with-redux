export const usersActionTypes = {
  ADD_USER: "ADD_USER",
};

export const addUser = (newUser) => {
  return { type: usersActionTypes.ADD_USER, user: newUser };
};
