export const routeVariants = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 1000,
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
