/* eslint-disable @typescript-eslint/no-unused-vars */
// import { cn } from "../../utils/cn";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
// import * as data from "../../data/position.json";

type Position = {
  x: number;
  y: number;
};

type ExpItem = {
  title: string;
  icon: string;
  x: number;
  y: number;
};

const exps = [
  {
    title: "html",
    icon: "html.png",
    x: 16,
    y: 216,
  },
  {
    title: "css",
    icon: "css.png",
    x: 54,
    y: 98,
  },
  {
    title: "javascript",
    icon: "javascript.png",
    x: 155,
    y: 25,
  },
  {
    title: "jquery",
    icon: "jquery.png",
    x: 277,
    y: 25,
  },
  {
    title: "typescript",
    icon: "typescript.png",
    x: 379,
    y: 98,
  },
  {
    title: "react",
    icon: "react.png",
    x: 416,
    y: 216,
  },
  {
    title: "tailwindcss",
    icon: "tailwindcss.png",
    x: 379,
    y: 331,
  },
  {
    title: "sql",
    icon: "sql.png",
    x: 155,
    y: 406,
  },
  {
    title: "mongodb",
    icon: "mongodb.png",
    x: 277,
    y: 406,
  },
  {
    title: "postgresql",
    icon: "postgresql.png",
    x: 54,
    y: 331,
  },
  {
    title: "python",
    icon: "python.png",
    x: 116,
    y: 216,
  },
  {
    title: "nodejs",
    icon: "nodejs.png",
    x: 216,
    y: 116,
  },
  {
    title: "csharp",
    icon: "csharp.png",
    x: 316,
    y: 216,
  },
  {
    title: "git",
    icon: "git.png",
    x: 216,
    y: 315,
  },
  {
    title: "nextjs",
    icon: "nextjs.png",
    x: 216,
    y: 216,
  },
];

const Experience = () => {
  const [position, setPosition] = useState<Position[]>(
    exps.map((e) => ({ x: e.x, y: e.y }))
  );
  const boxRef = useRef<HTMLDivElement>(null);
  // const getData = () => {
  //   const items = data.layers.map((e) => ({
  //     x: +e.transform[0],
  //     y: +e.transform[1],
  //   }));
  //   return items;
  // };

  const calcPosition = useCallback((): Position[] => {
    const box = boxRef.current;
    if (!box) return [];
    const minSize = Math.min(window.innerWidth, window.innerHeight, 720) * 0.75;
    const width = box.offsetWidth;
    const scaleRatio = width / 480;
    box.style.width = `${minSize}px`;
    box.style.height = `${minSize}px`;
    // const items = getData();
    // const t = items.map((e) => ({
    //   x: e.x * scaleRatio,
    //   y: e.y * scaleRatio,
    // }));
    // const n = exps.map((e, i) => ({
    //   title: e.title,
    //   icon: e.icon,
    //   x: items[i].x,
    //   y: items[i].y,
    // }));
    // console.log("🚀 ~ n:", n);

    const calculatedPosition = exps.map((e) => ({
      x: e.x * scaleRatio,
      y: e.y * scaleRatio,
    }));

    return calculatedPosition;
  }, []);

  useEffect(() => {
    const gdata = calcPosition();
    setPosition(gdata);

    window.addEventListener("resize", calcPosition);

    return () => {
      window.removeEventListener("resize", calcPosition);
    };
  }, [calcPosition]);

  return (
    <div id="exp" className="h-screen">
      <div className="container relative h-full p-6 mx-auto">
        <h1 className="text-5xl font-bold text-white text-center">
          Experience
        </h1>
        <div className="my-4">
          <p className="text-gray-400 text-center">
            Try to drag and throw the icons
          </p>
        </div>
        <div className="h-3/4 mt-16 mx-auto relative" ref={boxRef}>
          {exps.map((item, index) => (
            <motion.div
              key={item.title}
              className="w-16 h-16 flex justify-center items-center bg-rose-200/20 hover:bg-lime-200/20 backdrop-blur-sm p-4 rounded-full drop-shadow-[0_0_15px_rgba(255,69,231,1)] box-shadow-[0_0_24px_rgba(103,69,231,1)] hover:drop-shadow-[0_0_15px_rgba(83,255,97,1)] hover:box-shadow-[0_0_24px_rgba(83,255,97,1)] absolute -translate-x-1/2 -translate-y-1/2 cursor-grab"
              style={{
                left: `${position[index].x}px`,
                top: `${position[index].y}px`,
                // transform: `translate(${p[index].x}px, ${p[index].y}px)`,
              }}
              drag
              dragConstraints={boxRef}
              // onDragEnd={(_, info) => console.log(info.point.x, info.point.y)}
              whileInView={{
                x: [0.25, 0, -0.25],
                y: [2, 0, -2],
              }}
              transition={{
                type: "tween",
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.05,
                staggerChildren: 0.5,
              }}
            >
              <motion.img
                src={`/images/sm/${item.icon}`}
                alt={item.title}
                className="w-16 select-none"
                title={item.title}
                draggable="false"
                whileHover={{
                  // scale: 1.2,
                  rotate: [10, 0, -10],
                  transition: {
                    type: "tween",
                    duration: 0.05,
                    repeat: 20,
                    repeatType: "reverse",
                  },
                }}
                whileTap={{ scale: 1.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
