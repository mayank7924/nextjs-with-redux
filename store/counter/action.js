export const counterActionTypes = {
  INCREMENT: "INCREMENT",
};

export const incrementCounter = () => {
  return { type: counterActionTypes.INCREMENT };
};
