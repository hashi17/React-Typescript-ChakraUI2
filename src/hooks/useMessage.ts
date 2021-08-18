import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};
export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      // 同じ名前は title:{title}を省略して、titleと書ける
      toast({
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true
      });
    },
    [toast]
  );
  return { showMessage };
};
