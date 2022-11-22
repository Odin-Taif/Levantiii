import { fetchUser, fetchExistedUser } from "../utils/fetchLocalStorageData";
const userInfo = fetchUser();
const existedUserInfo = fetchExistedUser();

export const initialState = {
  user: userInfo,
  existedUser: existedUserInfo,
};
