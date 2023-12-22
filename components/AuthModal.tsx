"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { Database } from "@/types_db";
import { Dialog } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React, { FC } from "react";
import { FaX } from "react-icons/fa6";

interface AuthModalProps {}

const AuthModal: FC<AuthModalProps> = ({}) => {
  const { isOpenModal, closeModal } = useAuthModal();
  const supabase = createClientComponentClient<Database>();

  return (
    <Dialog open={isOpenModal} onClose={closeModal}>
      <div
        className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm"
        aria-hidden="true"
      />

      <Dialog.Panel className="fixed left-1/2 top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-800 p-6 drop-shadow-md">
        <Dialog.Title className="mb-4 text-center text-xl font-semibold text-neutral-300">
          Login to your account
        </Dialog.Title>
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 text-rose-500"
        >
          <FaX />
        </button>

        <Auth
          theme="dark"
          magicLink
          providers={["github"]}
          supabaseClient={supabase}
          redirectTo="http://localhost:3000/auth/callback"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#f43f5e",
                },
              },
            },
          }}
        />
      </Dialog.Panel>
    </Dialog>
  );
};

export default AuthModal;
