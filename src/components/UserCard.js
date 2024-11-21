import { cn } from "../lib/utils";
import {
  IconMapPin,
  IconCalendar,
  IconCarambolaFilled,
  IconFileFilled,
} from "@tabler/icons-react";
import { UserStats } from "./UserStats";
const UserCard = ({
  url,
  name,
  bio,
  created,
  blog,
  location,
  followers,
  repositories,
  following,
}) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "numeric",
  }).format(new Date(created));
  return (
    <div className="w-[70vw]  group/card font-sans relative  ">
      <div
        className={cn(
          "  overflow-hidden relative card h-[70vh] rounded-md shadow-xl  mx-auto flex flex-col  p-4 bg-neutral-800 "
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black "></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            alt="Avatar"
            src={url ?? "https://avatars.githubusercontent.com/u/1?v=4"}
            className="h-16 w-16 rounded-full border-2 border-lime-500 object-cover"
          />

          <div className="flex flex-col">
            <p className="font-normal  text-gray-50 relative z-10 text-xl">
              {name ?? "No name available"}
            </p>

            <div className="flex flex-col items-start ">
              <p className="items-center flex text-sm text-light-700 gap-1">
                <IconMapPin size={12} /> {location ?? ""}
              </p>
              <p className="text-sm text-light-700 flex items-center gap-1">
                <IconCalendar size={12} />
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-12 mt-10 px-8">
          <h1 className="self-center text-xl underline underline-offset-4 text-lime-500 tracking-widest z-50">
            BIO
          </h1>
          <p className="font-normal text-lg text-gray-50 relative z-10 my-8">
            {bio ?? "No bio available"}
          </p>
        </div>
        <UserStats
          followers={followers}
          following={following}
          repos={repositories}
        />
      </div>
    </div>
  );
};
export default UserCard;
