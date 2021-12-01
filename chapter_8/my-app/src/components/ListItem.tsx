import type { FC } from "react";
import type { User } from "../types/user"

export const ListItem: FC<User> = props => {
  const { id, name, email } = props;
  return (
    <p>
      {id}: {name}({email})
    </p>
  )
}