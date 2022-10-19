import useAuthModal from "@/hooks/auth/useAuthModal";
import { CustomConnectButton } from "@artiva/shared";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";

const AppHeader = () => {
  const authModal = useAuthModal();

  return (
    <Fragment>
      {authModal.content}
      <div className="flex justify-between items-center p-6 px-10 bg-white">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src={"/artiva-logo.svg"}
              className="h-full"
              alt="logo"
              width="30"
              height="30"
            />
            <div className="ml-4 font-light text-gray-600">Artiva V2</div>
          </a>
        </Link>
        <div className="flex items-center">
          <Link href={"/create"}>
            <a className="flex items-center mr-8 text-gray-800">
              <PlusIcon className="h-4 mr-2 text-gray-800" />
              Create
            </a>
          </Link>
          <ConnectButton.Custom>
            {(props) => (
              <CustomConnectButton
                {...props}
                className="flex item-center justify-around border border-gray-400 text-gray-500 w-40 rounded-md text-center"
              />
            )}
          </ConnectButton.Custom>
        </div>
      </div>
    </Fragment>
  );
};

export default AppHeader;