import React, { useState } from "react";
import { FaAdn, FaThList } from "react-icons/fa";
import LoginModal from "./LoginModal";
import OffcanvasMenu from "./OffcanvasMenu";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="p-8 max-">
        <div className="flex relative justify-between font-bold text-lg uppercase items-center">
          <img
            src={"./blob.svg"}
            alt="logo"
            className="absolute -left-20 -top-24 -z-10 w-92 h-60"
          />
          <a href="/" className="font-bold text-white flex items-center gap-2">
            <FaAdn />
            Home
          </a>
          <div className="flex md:hidden">
            <button
              className="p-2 rounded-md bg-[#5BD0EA]"
              onClick={() => setToggle(true)}
            >
              <FaThList className="text-white" />
            </button>
          </div>
          <ul className="md:flex gap-8 items-center hidden">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#price">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button
                onClick={openModal}
                className="bg-white px-8 py-2 rounded-md border-2 border-[#5BD0EA] text-[#5BD0EA]"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
      <OffcanvasMenu toggle={toggle} setToggle={setToggle} />
    </>
  );
}
