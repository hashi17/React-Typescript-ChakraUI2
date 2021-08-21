/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
//import { useLoginUser } from "../hooks/useLoginUser";
import { useSetRecoilState } from "recoil";
import { loginUserState } from "../store/loginUserState";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  //const { setLoginUser } = useLoginUser();
  const setLoginUser = useSetRecoilState(loginUserState);

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data);
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザが見つかりません", status: "warning" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
        setLoading(false);
      });
  }, []);

  return { login, loading, setLoginUser };
};
