export const userInitialState = "data";

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case "userprofile":
      console.log("userprofile");
      return action.data;
    default:
      return state;
  }
};

export default user;
