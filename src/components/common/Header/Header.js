import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_header.scss';
import { ReactComponent as Image } from '../../../assets/header.svg';

export default function Header() {
  return (
    <div className="header">
      <Image />
      <div>
        <h1>Your favourite tunes</h1>
        <h2>
          All <FontAwesomeIcon icon={faSun} /> and all <FontAwesomeIcon icon={faMoon} />
        </h2>
      </div>
    </div>
  );
}
