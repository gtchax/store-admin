"use client";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useRegisterModal } from "@/hooks/use-register-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  const registerModal = useRegisterModal()

//   useEffect(() => {
//     if (!isOpen) {
//       onOpen();
//     }
//   }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      <Button onClick={registerModal.onOpen}>Sign up</Button>
    </div>
  );
};

export default SetupPage;
