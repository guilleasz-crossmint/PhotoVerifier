import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function classnames(...classes) {
  return twMerge(clsx(...classes));
}
