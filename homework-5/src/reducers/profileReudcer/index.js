import { getProfile } from "../../actions/profileActions";

const initialState = {
  name: 'Александр',
  lastName: 'Ивлев',
};

const profileReducer = (store = initialState, action) => {
  switch (action.type) {
    case getProfile:
      return store;
    default:
      return store;
  }
};

export default profileReducer;