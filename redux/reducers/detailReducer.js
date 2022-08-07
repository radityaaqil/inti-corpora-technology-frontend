const INITIAL_STATE = {
  id: "",
  userId: "",
  title: "",
  body: "",
};

const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default detailReducer;
