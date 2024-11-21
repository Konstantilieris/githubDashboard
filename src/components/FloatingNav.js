import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import useQueryStore from "../store/useQueryStore";
import { IconUser, IconArrowRight } from "@tabler/icons-react";
export const FloatingNav = () => {
  return (
    <nav className="   flex w-fit items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 z-[9999]">
      <Logo />

      <NavLink link={"/"}>Home</NavLink>
      <NavLink link={"/profile"}>Profile</NavLink>
      <NavLink link={"/repositories"}>Repositories</NavLink>
      <NavLink link={"/followers"}>Followers</NavLink>

      <Search />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      fill="#ffffff"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="64px"
      height="64px"
      viewBox="-261.12 -261.12 1034.24 1034.24"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="5151e0c8492e5103c096af88a5006e1e">
          {" "}
          <path
            id="XMLID_1_"
            display="inline"
            d="M6.962,266.753c22.59-5.641,53.305-13.324,107.118-14.753 c-1.487-2.974-2.83-6.053-4.019-9.228c-20.94-0.182-85.43,2.792-107.521,8.25c-0.125,0.039-0.259,0.048-0.393,0.048 c-0.739,0-1.42-0.508-1.602-1.256c-0.211-0.873,0.326-1.774,1.208-1.995c21.89-5.41,84.825-8.413,107.118-8.355 c-5.017-14.753-7.233-31.655-7.233-50.523c0-33.516,10.437-46.159,24.46-64.02c-10.724-38.197,3.847-64.307,3.847-64.307 s22.533-4.671,65.132,25.832c23.089-9.89,84.647-10.714,113.77-2.196c17.88-11.818,50.571-28.585,63.77-23.895 c3.568,5.755,11.262,22.513,4.662,59.348c4.489,8.077,27.761,25.286,27.856,73.928c-0.384,17.938-2.245,33.084-5.698,45.899 c55.54-0.47,88.212,4.115,110.715,8.259c0.883,0.182,1.478,1.036,1.324,1.928c-0.153,0.787-0.844,1.353-1.611,1.353 c-0.115,0-0.211-0.009-0.326-0.019c-22.466-4.163-55.194-8.729-111.061-8.221c-0.979,3.252-2.072,6.341-3.262,9.286 c19.013,0.633,71.233,2.667,113.823,15.693c0.883,0.269,1.362,1.189,1.094,2.072c-0.211,0.7-0.863,1.16-1.573,1.16 c-0.153,0-0.326-0.019-0.479-0.076c-43.185-13.199-96.538-15.012-114.283-15.598c-15.444,33.929-47.118,46.59-98.322,51.856 c16.595,10.446,21.353,23.548,21.353,59.003c0,35.453-0.479,40.211-0.364,48.363c0.173,13.383,19.779,19.789,19.051,24.096 c-0.729,4.299-16.403,3.607-23.731,1.047c-20.758-7.232-18.687-24.5-18.687-24.5l-0.69-47.404c0,0,1.42-25.516-8-25.516 c0,5.131,0,59.242,0,77.592c0,16.863,11.799,21.986,11.799,28.221c0,10.715-21.563-1.016-28.202-7.703 c-10.134-10.168-8.982-31.73-8.733-48.785c0.23-16.471-0.153-52.49-0.153-52.49l-6.877,0.145c0,0,2.82,78.686-3.626,93.025 c-8.335,18.408-33.477,24.74-33.477,16.355c0-5.641,6.196-3.846,9.621-16.488c2.925-10.754,1.928-90.975,1.928-90.975 s-8.057,4.768-8.057,19.789c0,6.877-0.192,46.158-0.192,57.852c0,14.705-20.883,23.078-30.917,23.078 c-5.084,0-11.405-0.248-11.405-2.943c0-6.801,19.099-10.793,19.099-24.941c0-12.268-0.269-43.826-0.269-43.826 s-9.631,1.648-23.367,1.648c-34.628,0-45.583-22.1-50.792-34.465c-6.782-16.105-15.578-23.673-24.921-29.717 c-5.736-3.712-7.06-8.096-0.422-9.343c30.657-5.774,38.494,34.763,58.964,41.218c14.609,4.615,33.391,2.619,42.734-3.424 c1.238-12.385,10.159-23.089,17.593-28.729c-52.067-4.998-82.936-23.079-98.936-52.145c-54.466,1.305-85.372,9.036-108.029,14.695 c-1.65,0.413-3.261,0.815-4.815,1.209c-0.134,0.028-0.269,0.038-0.403,0.038c-0.739,0-1.41-0.499-1.602-1.247 c-0.221-0.882,0.326-1.784,1.209-2.005C3.72,267.567,5.322,267.175,6.962,266.753z"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const NavLink = ({ children, link }) => {
  const location = useLocation();
  return (
    <a href={link} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className={cn("h-[20px] ")}
        animate={{ y: location.pathname === link ? -20 : 0 }}
      >
        <span
          className={cn("flex h-[20px] items-center ", {
            invisible: location.pathname === link,
          })}
        >
          {children}
        </span>
        <span
          className={cn(
            "flex h-[20px] items-center text-neutral-50 font-sans",
            { "text-lime-500 font-semibold ": location.pathname === link }
          )}
        >
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const Search = () => {
  const { queryValue, setQueryValue } = useQueryStore();
  const [localState, setLocalState] = useState(queryValue ?? "");
  const handleKeyDownEnter = (e) => {
    if (e.key === "Enter" && localState) {
      setQueryValue(localState);
    }
  };
  return (
    <div
      className={`relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px]  pl-1
      border-neutral-700 font-medium text-neutral-300 transition-all duration-300
      before:absolute before:inset-0
      before:-z-10 before:translate-y-[200%]
      before:scale-[2.5] before:rounded-[100%] before:bg-neutral-50
      before:transition-transform before:duration-1000 before:content-[""]
      hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
      hover:before:translate-y-[0%]
      focus-within:scale-105 focus-within:border-neutral-50 focus-within:text-neutral-900
      focus-within:before:translate-y-[0%]
      active:scale-100`}
      onKeyDown={handleKeyDownEnter}
    >
      <IconUser size={20} />
      <input
        value={localState}
        onChange={(e) => setLocalState(e.target.value)}
        className="bg-transparent h-full w-full px-4 py-1.5 bg-none  focus:ring-0 focus:outline-none "
        placeholder="Search username"
      />
      <IconArrowRight
        className={cn("mr-2 rounded-full  cursor-pointer ", {
          "animate-pulse": localState,
        })}
        size={20}
        onClick={() => {
          if (!localState) return;
          setQueryValue(localState);
        }}
      />
    </div>
  );
};