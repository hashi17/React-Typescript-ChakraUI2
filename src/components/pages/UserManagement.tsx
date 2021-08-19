import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageURL="https://source.unsplash.com/random"
          userName="hashi"
          fullName="Masaaki HASHIMOTO"
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageURL="https://source.unsplash.com/random"
          userName="hashi"
          fullName="Masaaki HASHIMOTO"
        />
      </WrapItem>
    </Wrap>
  );
});
