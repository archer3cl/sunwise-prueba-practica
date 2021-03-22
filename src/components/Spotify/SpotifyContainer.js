import { faChevronLeft, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_spotify-container.scss';
import SpotifyItem from './SpotifyItem';
import { useRef } from 'react';

export default function SpotifyContainer({ title, data, imagesKey = 'images' }) {
  let container;
  if (data.length === 0) {
    container = (
      <span className="spotify-container__loader">
        <FontAwesomeIcon icon={faSpinner} spin />
      </span>
    );
  } else {
    container = data.map(({ name, [imagesKey]: images }) => <SpotifyItem key={name} images={images} name={name} />);
  }

  const containerRef = useRef();

  function handleScroll(isBackwards = false) {
    const amount = isBackwards ? -containerRef.current.offsetWidth : containerRef.current.offsetWidth;
    containerRef.current.scrollLeft = containerRef.current.scrollLeft + amount;
  }

  return (
    <div className="spotify-container">
      <div className="spotify-container__header">
        <p>{title}</p>
        <span />
        <div>
          <FontAwesomeIcon onClick={() => handleScroll(true)} icon={faChevronLeft} />
          <FontAwesomeIcon onClick={() => handleScroll()} icon={faChevronRight} />
        </div>
      </div>
      <div className="spotify-container__row" ref={containerRef}>
        {container}
      </div>
    </div>
  );
}
