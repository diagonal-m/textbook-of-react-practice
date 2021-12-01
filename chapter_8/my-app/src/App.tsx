import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user"

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([])

  // 画面表示時にユーザー情報取得
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};
