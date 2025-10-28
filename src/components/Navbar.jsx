import logoDark from "../assets/logo/logoDark.png";
import logoWhite from "../assets/logo/logoWhite.png";
import { IoSearchOutline } from "react-icons/io5";
import userProfile from "../assets/navbar/user_profile.jpg";
import { Link } from "react-router";
import { navRightItems } from "../constants/navRightItems";
import { useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { Theme } from "../contexts/Theme";

function Navbar({ query, setQuery }) {
  const [isDark, setIsDark] = useContext(Theme);
  const commonThemeStyle = `sm:text-2xl text-xl cursor-pointer ${
    isDark ? "text-white" : "text-gray-500"
  }`;

  return (
    <div
      className={`fixed w-full z-1 ${isDark ? "bg-primary" : "bg-white"}   `}
    >
      <div className=" flex justify-between items-center sm:py-4 py-3 sm:px-4 px-2">
        {/* left */}
        <Link to="/">
          <img
            src={isDark ? logoWhite : logoDark}
            alt="logo"
            className="sm:w-36 448px:w-28 w-24 hover:cursor-pointer"
          />
        </Link>

        {/* middle */}
        <div
          className={`flex items-center gap-2 sm:w-sm 448px:w-3xs 370px:w-44 w-36 ${
            isDark ? "border-secondary" : "border-gray-600"
          } border rounded-2xl sm:px-4 px-2 py-1`}
        >
          <input
            id="search"
            type="text"
            value={query}
            placeholder="Search"
            className={`w-full outline-none text-[12px] 448px:text-[16px] ${
              isDark ? "placeholder:text-secondary text-secondary" : ""
            }`}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label htmlFor="search">
            <IoSearchOutline
              className={`sm:text-2xl text-xl ${
                isDark ? "text-secondary" : "text-gray-400"
              } hover:text-red-600 cursor-pointer`}
            />
          </label>
        </div>

        {/* right */}
        <div className="flex justify-between items-center 848px:gap-6 448px:gap-4 gap-3">
          {navRightItems.items.map(({ id, icon: Icon, style }) => (
            <Icon
              key={id}
              className={`${navRightItems.commonStyle} ${style ? style : ""} ${
                isDark && !style ? "text-white" : "text-gray-500"
              }`}
            />
          ))}
          <img
            src={userProfile}
            alt="userProfile"
            className="rounded-full sm:w-6 w-5 aspect-square  hover:cursor-pointer"
          />
          {isDark ? (
            <BsFillSunFill
              className={commonThemeStyle}
              onClick={() => setIsDark(!isDark)}
            />
          ) : (
            <HiMoon
              className={commonThemeStyle}
              onClick={() => setIsDark(!isDark)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
