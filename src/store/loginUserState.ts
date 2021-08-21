import { atom } from "recoil";
import { User } from "../types/api/user";

export const loginUserState = atom({
  key: "loginUserState",
  default: <(User & { isAdmin: boolean }) | null>{}
});
