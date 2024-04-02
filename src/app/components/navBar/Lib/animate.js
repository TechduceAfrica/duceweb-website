export const modeAni = {
    dark: { 
        left: 0,
        right: "auto",
    },
    light: { 
        left: "auto",
        right: 0, 
    }
};

export const transitionValues = {
    duration: 0.5,
    type: "spring",
    stiffness: 300, 
    damping: 20,
    ease: [0.76, 0, 0.24, 1]
};

export const menuVariant = {
    open: {
        width: "100%",
        height: "100vh",
        top: "0px",
        right: "0px",
        opacity: 1,
        transition: { 
            duration: 0.75, 
            type: "tween", 
            ease: [.215,.61,.355,1]
        }
    },
    closed: {
        width: "0px",
        height: "100vh",
        top: "0px",
        right: "-200px",
        opacity: 0,
        transition: { 
            duration: 0.75, 
            type: "tween", 
            ease: [2.76, 1, 2.24, 3],
            opacity: { 
                duration: 0.35, 
                delay: 0.4
            }
        }
    }
}

export const innerTop = {
    initial: {
        opacity: 0,
        translateY: -80,
        translateX: -20,
    },
    enter: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65, 
            delay: 0.5, 
            ease: [.215,.61,.355,1],
            opacity: { 
                duration: 0.35, 
                delay: 0.7
            }
        }
    },
    exit: {
        opacity: 0,
        transition: { 
            duration: 0.5, 
            type: "linear", 
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const fadeInCenter = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 1.5, 
            delay: 0.75, 
            ease: [.215,.61,.355,1],
            opacity: { 
                duration: 0.35, 
                delay: 1
            }
        }
    },
    exit: {
        opacity: 0,
        transition: { 
            duration: 1, 
            type: "linear", 
            ease: [0.76, 0, 0.24, 1]
        }
    }
}