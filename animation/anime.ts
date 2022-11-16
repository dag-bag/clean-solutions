/** @format */

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.1, // this will set the time inbetween children animation
    },
  },
};
export const childVariants = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: delay, // this will set the time inbetween children animation
      },
    },
  };
};
interface Props {
  axis: "x" | "y";
  axisValue: number;
  delay?: number;
}
const dropOutVariant = ({ axis, axisValue, delay }: Props) => {
  return {
    hidden: {
      [axis]: axisValue,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
    exit: {
      opacity: 0,
    },
  };
};

export const dropUpVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export { stagger, fadeInUp, easing, variants, dropOutVariant };
