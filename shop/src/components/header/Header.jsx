import { CiMenuFries } from "react-icons/ci";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Lottie from "lottie-react";
import menuline from "../../assets/demo.json";
function Header() {
  const StyledLink = styled.span`
    text-decoration: none;
    color: black; /* Default color of the link */
    transition: all 0.5s ease; /* Smooth transition for hover effect */

    &:hover {
      margin-left: 10px;
      color: rgba(0, 0, 0, 0.6); /* Change color to gray on hover */
    }
  `;
  return (
    <header className="absolute top-0 left-0 z-50 py-12 px-14 flex justify-between">
      <div className="flex items-center gap-12">
        <div className="">
          <img src="/logo.png" alt="" />
        </div>
        <div className="block w-[1px] h-full bg-black/20"></div>
        <div className="flex items-center justify-center gap-2">
          <Drawer direction="left">
            <DrawerTrigger>
              <div className="flex gap-4 items-center">
                <CiMenuFries className="w-6 h-6 " />
                <p className="">Menu</p>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerClose className="mb-6 w-fit absolute top-5 right-5 ">
                  <CgClose className="w-6 h-6 transition-transform hover:rotate-180 ease-in duration-300" />
                </DrawerClose>
                <DrawerTitle className="flex flex-col gap-8 mt-6 border-t border-black/10 pt-10">
                  <Link>
                    <StyledLink>Home</StyledLink>
                  </Link>
                  <Link>
                    <StyledLink>About</StyledLink>
                  </Link>
                  <Link>
                    <StyledLink>Shop</StyledLink>
                  </Link>
                  <Link>
                    <StyledLink>Account</StyledLink>
                  </Link>
                  <Link>
                    <StyledLink>Contact</StyledLink>
                  </Link>
                </DrawerTitle>
                {/* DESCRIPTION */}
                {/* <DrawerDescription>
                </DrawerDescription> */}
              </DrawerHeader>
              {/* footer */}
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;
