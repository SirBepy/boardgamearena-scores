import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import {
  StyledDataInput,
  StyledGroup,
  StyledSaveButton,
  StyledSettingsButton,
  StyledSideMenu,
  StyledSideMenuBackground,
} from "./style";
import { useOverflowHidden } from "../../hooks/useOverflowHidden";
import storageService from "../../utils/storageService";
import { parseBgaData } from "../../utils/parser";

const possiblePlayers = ["xXJonSlayerXx", "SirBepy", "LOL-man", "Stormie14"];

const Sidemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  useOverflowHidden(isOpen);
  const whitelisted = storageService.getWhiteListed();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();
    storageService.setEmptySection(e.target.elements.emptySection.checked);

    const newWhitelisted = {};
    for (let i = 0; i < possiblePlayers.length; i++) {
      const playerName = possiblePlayers[i];
      newWhitelisted[playerName] = e.target.elements[playerName].checked;
    }
    storageService.setWhitelisted(newWhitelisted);
    const bgaData = e.target.elements.bgaData.value;
    if (!bgaData) {
      storageService.setData(parseBgaData(bgaData));
    }
    window.location.reload();
  };

  return (
    <>
      <StyledSideMenuBackground $isOpen={isOpen} onClick={close} />
      <StyledSideMenu $isOpen={isOpen} onSubmit={onSubmit}>
        <h2>General</h2>
        <StyledGroup>
          <label for="emptySection">Show Empty Section</label>
          <input
            type="checkbox"
            id="emptySection"
            name="emptySection"
            defaultChecked={storageService.getEmptySection()}
          />
        </StyledGroup>
        <h2>Enable games With:</h2>
        {possiblePlayers.map((playerName) => (
          <StyledGroup>
            <label for={playerName}>{playerName}</label>
            <input
              type="checkbox"
              id={playerName}
              name={playerName}
              defaultChecked={whitelisted.includes(playerName)}
            />
          </StyledGroup>
        ))}
        <h2>Data</h2>
        <StyledDataInput id="bgaData" name="bgaData" />
        <StyledSaveButton>Save</StyledSaveButton>
      </StyledSideMenu>
      <StyledSettingsButton onClick={isOpen ? close : open}>
        <FontAwesomeIcon icon={faGear} />
      </StyledSettingsButton>
    </>
  );
};

export { Sidemenu };
