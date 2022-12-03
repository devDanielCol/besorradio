import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { FC, forwardRef, ReactElement } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IDialogErrorProps {
  title: ReactElement | string;
  content: ReactElement | string;
  button: string;
  open: boolean;
  handleClose(): void;
}

const DialogError: FC<IDialogErrorProps> = ({
  title,
  content,
  button,
  open,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{ textTransform: "initial" }} onClick={handleClose}>
          {button}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogError;
