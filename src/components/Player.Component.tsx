import { player } from "../models/player";
import "../styles/playerComponent.scss";

export const PlayerComponent = (props: { player: player | undefined; positionNumber: number }) => {
  const { player, positionNumber } = props;
  return (
    <div className={`pvl-volleyball-player pvl-player-pos-${positionNumber}`} key={positionNumber}>
      <div className="pvl-player-main-body-container">
        <div className="pvl-player-main-body-content">{player?.name}</div>
      </div>
      <div className="pvl-player-info">{player?.role ? `${player.role} - ${positionNumber}` : `${positionNumber}`}</div>
    </div>
  );
};
