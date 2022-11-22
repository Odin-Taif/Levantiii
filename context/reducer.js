export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_USERS: "SET_USERS",
  SET_EXISTED_USER: "SET_EXISTED_USER",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_EXISTED_USER:
      return {
        ...state,
        existedUser: action.existedUser,
      };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case actionType.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
export default reducer;
