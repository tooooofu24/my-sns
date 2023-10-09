import {
  Button,
  createStyles,
  LoadingOverlay,
  Modal,
  Text,
} from "@mantine/core";
import { FC } from "react";
import { FaCircleCheck } from "react-icons/fa6";

type SubmitModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
};

const useStyles = createStyles((theme) => ({
  icon: {
    fontSize: "5rem",
    color: theme.colors.green[6],
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing.xl,
  },
  iconError: {
    color: theme.colors.red[6],
  },
}));

export const SubmitModal: FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  isLoading,
}) => {
  return (
    <Modal opened={isOpen} onClose={onClose} centered withCloseButton={false}>
      <LoadingOverlay visible={isLoading} overlayBlur={100} />
      <Success />
      <Button color="gray" ml="auto" display="block" onClick={onClose}>
        OK
      </Button>
    </Modal>
  );
};

const Success = () => {
  const { classes } = useStyles();
  return (
    <Text>
      <div className={classes.icon}>
        <FaCircleCheck />
      </div>
      コメントを投稿しました！
      <br />
      ページに反映されるまで3~5分程度時間がかります。
    </Text>
  );
};

// const Failed = () => {
//   const { classes } = useStyles();
//   return (
//     <Text>
//       <div className={`${classes.icon} ${classes.iconError}`}>
//         <FaCircleExclamation />
//       </div>
//       コメントの投稿に失敗しました🥺
//       <br />
//       陶也まで連絡してもらえると嬉しいです。
//     </Text>
//   );
// };
