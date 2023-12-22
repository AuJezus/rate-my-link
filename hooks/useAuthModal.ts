import { atom, useAtom } from "jotai";

const isOpenAtom = atom(false);

export function useAuthModal() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpenModal: isOpen, openModal, closeModal };
}

export default useAuthModal;
