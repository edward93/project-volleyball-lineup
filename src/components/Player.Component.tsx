import { player } from "../models/player";

export const PlayerComponent = (props: { player: player | undefined; positionNumber: number }) => {
  const { player, positionNumber } = props;
  return (
    <div className={`pvl-volleyball-player pvl-player-pos-${positionNumber}`} key={positionNumber}>
      <div className="pvl-player-main-body">{player?.name}</div>
      <div className="pvl-player-info">{player?.role ? `${player.role} - ${positionNumber}` : `${positionNumber}`}</div>
    </div>
  );
};
