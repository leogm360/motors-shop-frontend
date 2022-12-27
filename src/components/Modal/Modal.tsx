import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Icon } from "../Icon";
import { Title } from "../Title";
import { IModalProps } from "./ModalTypes";
import "@reach/dialog/styles.css";

export const Modal = ({ title, isOpen, setIsOpen, children }: IModalProps) => {
  const handleClose = () => setIsOpen(false);

  return (
    <DialogOverlay
      className="px-4 z-50"
      isOpen={isOpen}
      onDismiss={handleClose}
    >
      <DialogContent className="rounded-lg w-full max-w-lg px-6 py-4">
        <div className="flex justify-between items-center mb-9">
          <Title
            className="text-grey-1"
            level={2}
            size="base"
            weight="semibold"
          >
            {title}
          </Title>
          <button className="w-3 h-3" type="button" onClick={handleClose}>
            <Icon name="xmark" fill="#ADB5BD" />
          </button>
        </div>
        <div>{children}</div>
      </DialogContent>
    </DialogOverlay>
  );
};
