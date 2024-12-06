import React, { useContext } from "react";
import MouseEventContext from "./context";

export const useMouseScroll = () => {
  const context = useContext(MouseEventContext);
  if (!context) throw new Error("provider 없음!");
  return context;
};
