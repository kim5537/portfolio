import { useContext } from "react";
import { MouseEventContext, MobileContext } from "./context";

export const useMouseScroll = () => {
  const context = useContext(MouseEventContext);
  if (!context) throw new Error("Mouse provider 없음!");
  return context;
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (!context) throw new Error("Mobiel Provider 없음");
  return context;
};
