import { useEffect } from "react";

export const useOverflowHidden = (condition) => {
  useEffect(() => {
    if (condition) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
};
