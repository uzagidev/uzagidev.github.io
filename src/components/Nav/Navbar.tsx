import { motion, AnimatePresence } from "framer-motion";
import RevalText from "../Text/RevalText";
import useNavbarContext from "./useNavbarContext";
import { useRef } from "react";

const links = [
  // {
  //   name: "About",
  //   href: "#about",
  // },
  {
    name: "Experience",
    href: "#exp",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const containerVariants = {
  open: {
    clipPath: "circle(100% at calc(100% - 32px) 32px)",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
    },
  },
  closed: {
    clipPath: "circle(24px at calc(100% - 32px) 32px)",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 5,
  },
};

const Navbar = () => {
  const { isOpen, setIsOpen } = useNavbarContext();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
    if (!isOpen) {
      if (backgroundRef.current) {
        backgroundRef.current.classList.remove("hidden");
        backgroundRef.current.classList.add("flex");
      }
    } else {
      setTimeout(() => {
        if (backgroundRef.current) {
          backgroundRef.current.classList.add("hidden");
          backgroundRef.current.classList.remove("flex");
        }
      }, 200);
    }
  };

  return (
    <AnimatePresence>
      <div className="container-md z-10 relative">
        <nav className="h-16 px-6 flex flex-row justify-between items-center">
          <div className="h-10 -z-20">
            <img
              src="/images/logo-with-name.png"
              className="h-full"
              alt="uzagi"
            />
          </div>
          <motion.div
            className="hidden md:flex flex-row justify-around items-center gap-6"
            initial="closed"
            animate="open"
            transition={{
              staggerChildren: 0.1,
            }}
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-white hover:text-black hover:bg-white select-none block w-[150px] text-center"
                variants={linkVariants}
              >
                <RevalText
                  text={link.name}
                  speed={0.4}
                  className="block w-full h-full px-4 py-2"
                />
              </motion.a>
            ))}
          </motion.div>
          {/* side bar */}
          <motion.div
            className="md:hidden flex-col justify-center items-center fixed top-0 right-0 w-full h-screen -z-20 hidden"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            ref={backgroundRef}
          >
            <motion.div
              className="flex flex-col justify-center items-center gap-6 bg-white h-full w-full"
              variants={containerVariants}
            >
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-white hover:bg-black px-4 py-2"
                  variants={linkVariants}
                  onClick={handleClick}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.button
            className="md:hidden fixed z-50 top-[8px] right-[8px] p-4 border-none bg-white text-black rounded-full"
            onClick={handleClick}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                variants={{
                  open: { d: "M1.68625 11.3137L13 0" },
                  closed: { d: "M0 1L16 1" },
                }}
              ></motion.path>
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.99999 7L16 7"
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              ></motion.path>
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                variants={{
                  open: { d: "M1.56233 0.0689536L12.876 11.3827" },
                  closed: { d: "M5.99999 13L16 13" },
                }}
              ></motion.path>
            </svg>
          </motion.button>
        </nav>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
