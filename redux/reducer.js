const initialstate = {
  mail: "mmail@harcodeadoo.com", // user for login
};

export default function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case "USER_EMAIL":
      return {
        ...state,
        mail: action.payload,
      };

    default:
      return state;
  }
}
