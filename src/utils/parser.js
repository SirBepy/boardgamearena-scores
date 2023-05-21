import fullData from "../data";
import storageService from "./storageService";

const parser = new DOMParser();
const { data } = fullData;

const blacklistedGames = ["Pandemic"];
const whitelistedPlayers = storageService.getWhiteListed();

const getTags = (index) => {
  const parsedDocument = parser.parseFromString(data[index]?.html, "text/html");
  const gameNameTags = parsedDocument.getElementsByClassName("gamename");
  const scoreEntryTags =
    parsedDocument.getElementsByClassName("board-score-entry");
  return { gameNameTags, scoreEntryTags };
};

const parseScores = (scoreEntryTags) => {
  return Array.from(scoreEntryTags).map((entry) => {
    const [place, name, points] = entry.textContent.split(" - ");

    return {
      place: place.trim(),
      name: name.trim(),
      points: points.trim(),
    };
  });
};

const hasAllPlayers = (scores) => {
  for (let i = 0; i < whitelistedPlayers.length; i++) {
    const playerName = whitelistedPlayers[i];
    if (!scores.find((score) => score.name === playerName)) return false;
  }
  return true;
};

const addWin = (wins, name) => {
  const currentWins = wins[name]?.points ?? 0;
  wins[name] = {
    name,
    points: currentWins + 1,
  };
};

export const parseBgaData = () => {
  const newParsedData = {};

  for (let index = 0; index < data.length; index++) {
    const { gameNameTags, scoreEntryTags } = getTags(index);
    if (gameNameTags?.length === 0 || scoreEntryTags?.length === 0) continue;

    const title = gameNameTags[0].textContent.trim();

    const scores = parseScores(scoreEntryTags);

    if (!hasAllPlayers(scores) || blacklistedGames.includes(title)) continue;

    const category = newParsedData[title] || {
      title,
      wins: {},
      randomWins: {},
      games: [],
    };
    category.games.push(scores);

    if (
      !scores.some(
        (score) =>
          score.points.toString() !== "0" && score.points.toString() !== "1"
      )
    ) {
      addWin(category.wins, "tie");
    } else if (!whitelistedPlayers.includes(scores[0].name)) {
      // addWin(category.wins, "random");

      if (whitelistedPlayers.length > 1) {
        const firstPlace = scores.find((score) =>
          whitelistedPlayers.includes(score.name)
        );
        const otherPlayers = whitelistedPlayers.filter(
          (playerName) => playerName !== firstPlace.name
        );
        const secondPlace = scores.find((score) =>
          otherPlayers.includes(score.name)
        );
        if (firstPlace.points !== secondPlace.points) {
          addWin(category.randomWins, firstPlace.name);
        } else {
          addWin(category.wins, "tie");
        }
      }
    } else {
      addWin(category.wins, scores[0].name);
    }

    newParsedData[title] = category;
  }

  for (const key in newParsedData) {
    const winsSorted = Object.values(newParsedData[key].wins).filter(win => win.name !== 'tie');
    winsSorted.sort((a, b) => (a.points < b.points ? 1 : -1));
    newParsedData[key].winsSorted = winsSorted;

    const randomWinsSorted = Object.values(newParsedData[key].randomWins);
    winsSorted.sort((a, b) => (a.points < b.points ? 1 : -1));
    newParsedData[key].randomWinsSorted = randomWinsSorted;
  }
  return newParsedData;
};
