export const fetchUser = () => {
  if (typeof window !== "undefined") {
    const userInfo =
      window.localStorage.getItem("user") !== "undefined"
        ? JSON.parse(window.localStorage.getItem("user"))
        : window.localStorage.clear();
    return userInfo;
  }
};

export const fetchExistedUser = () => {
  if (typeof window !== "undefined") {
    const existedUserInfo =
      window.localStorage.getItem("existedUser") !== "undefined"
        ? JSON.parse(window.localStorage.getItem("existedUser"))
        : window.localStorage.clear();
    return existedUserInfo;
  }
};
