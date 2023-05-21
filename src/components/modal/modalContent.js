import React from "react";
import { useMinigrid } from "../../hooks/useMinigrid";
import { StyledGames } from "./style";
import storageService from "../../utils/storageService";

const ModalContent = (props) => {
  const { data } = props;
  const whitelistedPlayers = storageService.getWhiteListed()
  useMinigrid({ data, container: "games", item: "game" });

  return (
    <StyledGames className="games">
      {data?.games.map((game, gameIndex) => (
        <div className="game" key={`game-${gameIndex}`}>
          <table>
            {/* <h3>
              {game[0].place !== game[1].place && `Win - ${game[0].name}`}
            </h3> */}
            {game.map((placement, placementIndex) => (
              <tr
                key={`game-${gameIndex}-${placementIndex}`}
                className={`place-${placement.place} ${
                  whitelistedPlayers.includes(placement.name) ? "" : "hide"
                }`}
              >
                <td>{placement.place}</td>
                <td>{placement.name}</td>
                <td>{placement.points}</td>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </StyledGames>
  );
};

export default ModalContent;
