import { getAuthenticatedUser } from "./firebaseFunction";

export const fetchExistedUserWithUrl = async () => {
  const res = await fetch(`http://localhost:3000/api/getExistedUser`);
  const data = await res.json();
  const serverExistedUser = data.serverExistedUser;
  return serverExistedUser;
};

const fetchExistedUser = async (userID: string) => {
  // console.log("this is the fetch existed user function");
  await getAuthenticatedUser(userID).then((data) => {
    console.log(data);
    // const serverExistedUser = data.serverExistedUser;
    // localStorage.setItem("existedUser", JSON.stringify(data));
    // return serverExistedUser;
    return data;
  });
};
