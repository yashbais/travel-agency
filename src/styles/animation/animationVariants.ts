export const containerVariant = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export const cardVariant = {
  hidden: { x: -120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const imageVariant = {
  hidden: { x: 100, opacity: 0, rotate: 5 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const diagonalItemVariant = {
  hidden: {
    opacity: 0,
    x: -80,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};
