import update from "react-addons-update";

const initialState = {
  users: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      console.log("login", state, action);
      const users = [...state.users, action.payload.user];
      return update(state, {
        users: {
          $merge: users
        }
      });
    default:
      return state;
  }
}

export default reducer;
