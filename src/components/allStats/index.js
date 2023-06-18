import React from "react";
import { StyledPlayerStats, StyledStatsWrapper } from "./styles";
import { Stat } from "../";
import storageService from "../../utils/storageService";
import { getPercentage } from "../../utils/helpers";

function AllStats(props) {
  const { totalWins, randomWins, numOfGames } = props;
  const whitelistedPlayers = storageService.getWhiteListed();
  const showRandoms = whitelistedPlayers.length === 2;

  return (
    <StyledStatsWrapper>
      {whitelistedPlayers.map((playerName, index) => (
        <StyledPlayerStats key={`player-${index}`}>
          <h2>{playerName}</h2>
          {showRandoms && (
            <Stat name="Random Wins" value={randomWins[playerName]} />
          )}
          <Stat name="Game Wins" value={totalWins[playerName]} />
          <Stat
            name="Game Winrate"
            value={getPercentage(numOfGames, totalWins[playerName])}
          />
          {showRandoms && (
            <>
              <hr />
              <Stat
                name="Total Wins"
                value={randomWins[playerName] + totalWins[playerName]}
              />
              <Stat
                name="Total Winrate"
                value={getPercentage(
                  numOfGames,
                  randomWins[playerName] + totalWins[playerName]
                )}
              />
            </>
          )}
        </StyledPlayerStats>
      ))}
    </StyledStatsWrapper>
  );
}

export { AllStats };
