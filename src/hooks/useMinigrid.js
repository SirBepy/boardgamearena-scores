import Minigrid from "minigrid";
import { useEffect } from "react";

export const useMinigrid = (props) => {
  const { parsedData, container, item } = props;

  const resetGrid = () => {
    const grid = new Minigrid({
      container: `.${container}`,
      item: `.${item}`,
      gutter: 20,
    });
    grid.mount();
  };

  useEffect(() => {
    resetGrid();
  }, [parsedData]);

  useEffect(() => {
    resetGrid();
    window.top.addEventListener("resize", resetGrid);

    return () => {
      window.top.removeEventListener("resize", resetGrid);
    };
  }, []);
};
