import { motion } from "framer-motion";
import { useRouter } from "next/router";

const transition = {
  duration: 0.4,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  enter: {
    opacity: 0,
    x: 100,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
}) => {
  const router = useRouter();

  return (
    <motion.div
      key={router.route}
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
