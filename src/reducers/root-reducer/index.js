
export const ADD_WALLET = "ADD_WALLET";
export const ADD_EXPANSE = "ADD_EXPANSE";
export const ADD_GOAL = "ADD_GOAL";

const RootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WALLET":
      return { ...state, walletList: [...state.walletList, action.payload] };
    case "BOOT":
      return action.payload;
    case "ADD_GOAL":
      return { ...state, goals: [...state.goals, action.payload] }
    default:
      return state;
  }
};

export default RootReducer;
