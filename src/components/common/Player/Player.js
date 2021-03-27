import {
  faEllipsisH,
  faHeart,
  faPlayCircle,
  faRandom,
  faRetweet,
  faStepBackward,
  faStepForward,
  faVolumeDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_player.scss';

export default function Player() {
  return (
    <div className="player">
      <div className="player__item">
        <span />
        <p>Nothing's playing</p>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon icon={faStepBackward} size="lg" />
        <FontAwesomeIcon icon={faPlayCircle} size="3x" />
        <FontAwesomeIcon icon={faStepForward} size="lg" />
      </div>
      <span />
      <div className="player__actions">
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />
        <FontAwesomeIcon icon={faHeart} size="lg" />
        <FontAwesomeIcon icon={faRandom} size="lg" />
        <FontAwesomeIcon icon={faRetweet} size="lg" />
        <FontAwesomeIcon icon={faVolumeDown} size="lg" />
      </div>
    </div>
  );
}
