"use client";

import { RegisterModal } from "@/components/modals/register-modal";
import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevents hydration error from server component
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
      <RegisterModal />
    </>
  );
};
