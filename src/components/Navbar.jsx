import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex ">
      <div className="flex items-center ">
        <GiHamburgerMenu />
        <img
          width={"115px"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20230929095411"
          alt="yt-logo"
        />
      </div>
      <div className="flex items-center">
        <div>
          <input type="text" className="border-gray-400 border outline-none" />
        </div>
        <button>Search</button>
      </div>
      <div>
        <IoIosNotificationsOutline size={"24px"} />
        <CiVideoOn />
        <Avatar githubHandle="sitebase" size={150} round="20px" />
      </div>
    </div>
  );
};

export default Navbar;
