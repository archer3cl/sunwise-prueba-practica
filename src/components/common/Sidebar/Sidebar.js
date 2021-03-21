import { faHeadphonesAlt, faHeart, faPlayCircle, faSearch, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Profile } from '../../../assets/profile.svg';
import './_sidebar.scss';

function SidebarItem({ icon, text }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} size="lg" />
      <span>{text}</span>
    </li>
  );
}

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div>
        <Profile />
        <span>Bob Smith</span>
      </div>
      <ul className="sidebar__items">
        <SidebarItem icon={faHeadphonesAlt} text="Discover" />
        <SidebarItem icon={faSearch} text="Search" />
        <SidebarItem icon={faHeart} text="Favourites" />
        <SidebarItem icon={faPlayCircle} text="Playlists" />
        <SidebarItem icon={faStream} text="Charts" />
      </ul>
    </nav>
  );
}
