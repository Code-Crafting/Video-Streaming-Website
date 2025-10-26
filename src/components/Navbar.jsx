import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../assets/logo/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import userProfile from "../assets/navbar/user_profile.jpg";
import { Link, useParams } from "react-router";
import { useDebounce } from "../hooks/useDebounce";
import { navRightItems } from "../constants/navRightItems";
import { useContext, useEffect } from "react";
import { HideText } from "../contexts/HideText";
import { BsFillSunFill } from "react-icons/bs";

function Navbar() {
  const [query, debouncedQuery, setQuery] = useDebounce();
  const [_, setHideAsideText] = useContext(HideText);

  return (
    <div className="fixed w-full z-1 bg-white ">
      <div className="">
        <div className=" flex justify-between items-center sm:py-4 py-3 px-4">
          {/* left */}
          <div className="flex gap-4 items-center">
            <BiMenuAltLeft
              className="text-2xl text-gray-600 cursor-pointer"
              onClick={() => setHideAsideText((prev) => !prev)}
            />
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="sm:w-[96px] w-[80px]  hover:cursor-pointer"
              />
            </Link>
          </div>

          {/* middle */}
          <div className="flex items-center gap-2 sm:w-sm 448px:w-3xs w-[180px] sm:h-[32px] h-[28px] border-gray-600 border rounded-2xl px-4 ">
            <input
              type="text"
              value={query}
              placeholder="Search"
              className="w-full outline-none hover:cursor-pointer text-[12px] 448px:text-[16px]"
              onChange={(e) => setQuery(e.target.value)}
            />
            <IoSearchOutline className="text-2xl text-gray-400 hover:text-red-600 cursor-pointer" />
          </div>

          {/* right */}
          <div className="flex justify-between items-center gap-6">
            {navRightItems.items.map(({ id, icon: Icon, style }) => (
              <Icon
                key={id}
                className={`${navRightItems.commonStyle} ${
                  style && style
                } text-gray-500`}
              />
            ))}
            <img
              src={userProfile}
              alt="userProfile"
              className="rounded-full w-[24px] aspect-square  hover:cursor-pointer"
            />
            <BsFillSunFill className="text-2xl cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
