export const productsInitialState = "";

const profile = (state = productsInitialState, action) => {
  switch (action.type) {
    case "addprofile":
      console.log("addedprofile");
      return action.data;
    default:
      return state;
  }
};

export default profile;
