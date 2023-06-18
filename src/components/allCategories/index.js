import React from "react";

import {
  CardPercentage,
  StyledCategory,
  StyledCategoryWrapper,
} from "./styles";
import { Hoverable, useModalContext } from "../";
import { useMinigrid } from "../../hooks/useMinigrid";
import storageService from "../../utils/storageService";
import { getPercentage } from "../../utils/helpers";

function AllCategories(props) {
  const { parsedData } = props;
  useMinigrid({ parsedData, container: "grid", item: "card" });
  const shouldShowEmpty = storageService.getEmptySection();

  const { open } = useModalContext();

  const onCardClick = (category) => {
    open({ title: category.title, data: category });
  };

  return (
    <StyledCategoryWrapper className="grid">
      {parsedData.map((category, categoryIndex) => (
        <Hoverable
          onClick={() => onCardClick(category)}
          key={`row-${categoryIndex}`}
        >
          <StyledCategory className="card">
            <h2>{category.title}</h2>
            <h3>Number of games: {category.games.length}</h3>
            <h3>Wins</h3>
            <ol>
              {category.winsSorted?.length === 0
                ? "No Wins"
                : category.winsSorted.map((win, winIndex) => (
                    <li key={`win-${categoryIndex}-${winIndex}`}>
                      {win.name}: {win.points}{" "}
                      <CardPercentage>
                        {getPercentage(category.games.length, win.points)}
                      </CardPercentage>
                    </li>
                  ))}
            </ol>
            {(shouldShowEmpty || category.wins.tie?.points) && (
              <>
                <hr />
                <h3>Ties: {category.wins.tie?.points ?? "-"}</h3>
              </>
            )}
            {(shouldShowEmpty || !!category.randomWinsSorted?.length) && (
              <>
                <hr />
                <h3>Random Wins:</h3>
                <ol>
                  {category.randomWinsSorted?.length === 0
                    ? "-"
                    : category.randomWinsSorted?.map((win, winIndex) => (
                        <li key={`win-${categoryIndex}-${winIndex}`}>
                          {win.name}: {win.points}
                        </li>
                      ))}
                </ol>
              </>
            )}
          </StyledCategory>
        </Hoverable>
      ))}
    </StyledCategoryWrapper>
  );
}

export { AllCategories };
