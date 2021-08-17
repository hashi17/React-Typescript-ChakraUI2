import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Home: VFC = memo(() => {
  const history = useHistory();
  const onSetting = () => history.push("/home/setting");
  return (
    <>
      <p>Homeページです</p>
      <button onClick={onSetting}>設定ボタン</button>
    </>
  );
});
