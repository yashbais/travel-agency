
export const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
        },
    },
};

export const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export const cardVariant = {
    hidden: { x: -100, scale: 0.9, opacity: 0 }, 
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }, 
    },
};

export  const imageVariant = {
    hidden: { x: 100, opacity: 0 }, // Start off-screen to the right
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }, // Smooth transition
    },
};

export const diagonalItemVariant = {
    hidden: {
      opacity: 0,
      x: -100, // Start position for the left plane
      y: 100, // Start position for the bottom left plane
    },
    visible: {
      opacity: 1,
      x: 0, // Move to its actual position
      y: 0, // Move to its actual position
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };