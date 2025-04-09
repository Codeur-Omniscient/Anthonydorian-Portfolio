import { type ReactNode, useRef } from "react";
import {
  motion,
  TargetAndTransition,
  useInView,
  type Variant,
} from "motion/react";
import { useMobile } from "../hooks/useMobile";

type AnimationVariant =
  | "fade"
  | "slide-up"
  | "slide-right"
  | "slide-left"
  | "none";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export function ScrollAnimationWrapper({
  children,
  variant = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  className = "",
  once = true,
}: Readonly<ScrollAnimationWrapperProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const isMobile = useMobile();

  // Reduce animation intensity on mobile
  const mobileDuration = isMobile ? duration * 1.2 : duration;
  const mobileDistance = isMobile ? 20 : 50;

  const animations: Record<
    AnimationVariant,
    { initial: Variant; animate: Variant }
  > = {
    fade: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: mobileDuration, delay, ease: "easeOut" },
      },
    },
    "slide-up": {
      initial: { opacity: 0, y: mobileDistance },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: mobileDuration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    "slide-right": {
      initial: { opacity: 0, x: -mobileDistance },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: mobileDuration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    "slide-left": {
      initial: { opacity: 0, x: mobileDistance },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: mobileDuration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    none: {
      initial: {},
      animate: {},
    },
  };

  // Get the appropriate animation variant
  const animation = animations[variant];
  return (
    <motion.div
      ref={ref}
      initial={animation.initial as TargetAndTransition}
      animate={
        isInView
          ? (animation.animate as TargetAndTransition)
          : (animation.initial as TargetAndTransition)
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation component
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  variant?: AnimationVariant;
  threshold?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  variant = "fade",
  threshold = 0.2,
  once = true,
}: Readonly<StaggerContainerProps>) {
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    none: {
      initial: {},
      animate: {},
    },
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Base animation variants
  const baseVariant = animations[variant].initial;

  // Container variants
  const containerVariants = {
    hidden: { ...baseVariant },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  // Child variants based on the selected animation type
  const childVariants = {
    hidden: { ...baseVariant },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={child.key || `stagger-child-${index}`}
              variants={childVariants}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
