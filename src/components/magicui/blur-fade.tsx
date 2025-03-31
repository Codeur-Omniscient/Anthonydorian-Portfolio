"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
} from "motion/react";
import { useRef } from "react";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps extends Readonly<MotionProps> {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly variant?: {
    readonly hidden: { readonly y: number };
    readonly visible: { readonly y: number };
  };
  readonly duration?: number;
  readonly delay?: number;
  readonly offset?: number;
  readonly direction?: "up" | "down" | "left" | "right";
  readonly inView?: boolean;
  readonly inViewMargin?: MarginType;
  readonly blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
