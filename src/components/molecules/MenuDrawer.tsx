import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";

type Props = {
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClickHome,
    onClickUserManagement,
    onClickSetting,
    onClose,
    isOpen
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button width="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button width="100%" onClick={onClickUserManagement}>
              ユーザ一覧
            </Button>
            <Button width="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
