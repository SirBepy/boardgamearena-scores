import React, { useMemo } from "react";
import { AllCategories, AllStats, ContentWrapper, Stat } from "../components";
import storageService from "../utils/storageService";

function App() {
  const { totalWins, randomWins, parsedData, numOfGames } = useMemo(() => {
    const whitelistedPlayers = storageService.getWhiteListed();
    const parsedData = Object.values(storageService.getData());

    const totalWins = {};
    const randomWins = {};
    let numOfGames = 0;

    whitelistedPlayers.forEach((playerName) => {
      totalWins[playerName] = 0;
      randomWins[playerName] = 0;
    });

    parsedData.forEach((element) => {
      numOfGames += element.games.length;
      whitelistedPlayers.forEach((playerName) => {
        totalWins[playerName] += element.wins[playerName]?.points ?? 0;
        randomWins[playerName] += element.randomWins[playerName]?.points ?? 0;
      });
    });
    return { parsedData, totalWins, randomWins, numOfGames };
  }, []);

  return (
    <ContentWrapper>
      <h1 className="title">BGA Wins</h1>
      <Stat name="Total Number of Played Games" value={numOfGames} />
      <AllStats
        totalWins={totalWins}
        randomWins={randomWins}
        numOfGames={numOfGames}
      />
      <AllCategories parsedData={parsedData} />
    </ContentWrapper>
  );
}

export default App;
