export const productsInitialState = "";

const profile = (state = productsInitialState, action) => {
  switch (action.type) {
    case "addtoken":
      console.log("addtoken");
      return action.data;
    default:
      return state;
  }
};

export default profile;
