import React, { useEffect, useState } from "react";

import { player } from "../models/player";

import { backRowPositions, frontRowPositions, position, positions } from "../models/positions";
import { PlayerComponent } from "./Player.Component";
import { useParams, useHistory } from "react-router";

import "../styles/lineup.scss";

/**
 * Lineup component
 * Displays court, positions with names and roles
 * @returns
 */
export const LineupComponent = () => {
  const [players, setPlayers] = useState<player[]>([]);
  const [payload, setPayload] = useState<string>();

  const { urlData } = useParams<any>();
  const history = useHistory();

  //#region effects
  useEffect(() => {
    setPayload(urlData);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    serializePlayers();
    // eslint-disable-next-line
  }, [players]);

  useEffect(() => {
    deserializePlayers();
    // eslint-disable-next-line
  }, [payload]);
  //#endregion

  /**
   * Serializes players array object (array -> json string -> base64)
   */
  const serializePlayers = () => {
    if (players.length > 0) {
      const playersB = btoa(JSON.stringify(players));
      setPayload(playersB);

      // dynamically update the url
      history.push(`/${playersB}`);
    }
  };

  /**
   * Deserializes base64 string into array object (base64 -> json parse -> array)
   */
  const deserializePlayers = () => {
    if (payload) {
      const deserializedPlayers = JSON.parse(atob(payload)) as player[];
      setPlayers(deserializedPlayers);
    }
  };

  const onNameChange = (e: any, position: position) => {
    const name = e.target.value;

    const newPlayers = [...players];
    let player = newPlayers.filter((c) => c.position?.id === position.id)?.[0];

    if (player) {
      player.name = name;
    } else {
      player = { name, position, role: "" };
      newPlayers.push(player);
    }

    setPlayers(newPlayers);
  };

  const onRoleChange = (e: any, position: position) => {
    const role = e.target.value;

    const newPlayers = [...players];
    let player = newPlayers.filter((c) => c.position?.id === position.id)?.[0];

    if (player) {
      player.role = role;
    } else {
      player = { name: "", position, role };
      newPlayers.push(player);
    }

    setPlayers(newPlayers);
  };

  return (
    <>
      <div className="pvl-lineup-content">
        <div className="pvl-court-outer-bounds-container">
          <div className="pvl-court-outer-bounds">
            <div className="pvl-court-net" />
            <div className="pvl-court-side-wrapper">
              <div className="pvl-court-left-outer-side">
                <div className="pvl-front-left-outer-side" />
                <div className="pvl-back-left-outer-side" />
              </div>
              <div className="pvl-court-outline">
                <div className="pvl-court-front-row">
                  {frontRowPositions.map((p) => (
                    <PlayerComponent player={players.filter((c) => c.position?.id === p.id)?.[0]} positionNumber={p.id} key={p.id} />
                  ))}
                </div>
                <div className="pvl-court-back-row">
                  {backRowPositions.map((p) => (
                    <PlayerComponent player={players.filter((c) => c.position?.id === p.id)?.[0]} positionNumber={p.id} key={p.id} />
                  ))}
                </div>
              </div>
              <div className="pvl-court-right-outer-side">
                <div className="pvl-front-right-outer-side" />
                <div className="pvl-back-right-outer-side" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pvl-player-form-container">
        {positions.map((c) => (
          <div className={`pvl-player-pos-${c.id}`} key={c.id}>
            <h4>Position {c.id}</h4>
            <div className="pvl-input-wrapper pvl-player-name-wrapper">
              <label htmlFor="">Name</label>
              <input type="text" onChange={(e: any) => onNameChange(e, c)} value={players.filter((x) => x.position?.id === c.id)?.[0]?.name} />
            </div>
            <div className="pvl-input-wrapper pvl-player-role-wrapper">
              <label htmlFor="">Role</label>
              <input type="text" onChange={(e: any) => onRoleChange(e, c)} value={players.filter((x) => x.position?.id === c.id)?.[0]?.role} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
