import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IconUser, IconStarFilled } from "@tabler/icons-react";

const RepoCards = ({ data }) => {
  const [order, setOrder] = useState(data.map((_, index) => index));

  // Update order whenever the data changes
  useEffect(() => {
    setOrder(data.map((_, index) => index));
  }, [data]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  return (
    <div className="grid place-content-center overflow-hidden px-8 py-24 text-slate-50 w-full">
      <div className="relative -ml-[100px] w-[70vw] h-[60vh] md:-ml-[175px]">
        {order.map((position, index) => {
          const repo = data[position]; // Map visual position to the correct repo
          return (
            <Card
              key={repo.id}
              handleShuffle={handleShuffle}
              description={repo.description}
              position={index}
              name={repo.name}
              owner={repo.owner.login}
              star={repo.stargazers_count}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ handleShuffle, description, position, name, owner, star }) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === 0 ? "10%" : position === 1 ? "33%" : "66%";
  const rotateZ = position === 0 ? "0deg" : position === 1 ? "-8deg" : "-6deg";
  const zIndex = position === 0 ? 1 : position === 1 ? 0 : "0";

  const draggable = position === 0;

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-full w-full select-none space-y-6 rounded-2xl border border-lime-500 p-6 shadow-xl bg-dark-100/80 backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <span className="text-start text-lg font-medium text-light-900 uppercase overflow-x-hidden">
        Project Name :
        <span className="text-lime-500 font-semibold">
          {name ?? "No name available"}
        </span>
      </span>
      <span className="bottom-2 absolute flex items-center left-4">
        {star}{" "}
        <IconStarFilled
          size={14}
          className="self-start text-yellow-400 animate-pulse"
        />
      </span>
      <span className="text-center text-lg italic text-light-900">
        "{description ?? "No description available"}"
      </span>
      <span className="text-lg absolute bottom-2 right-2 text-gray-500 flex flex-row">
        <IconUser /> {owner}
      </span>
    </motion.div>
  );
};

export default RepoCards;
