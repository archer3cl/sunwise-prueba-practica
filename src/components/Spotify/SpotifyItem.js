import './_spotify-item.scss';

export default function SpotifyItem({ images, name }) {
  return (
    <div className="spotify-item">
      <div className="spotify-item__image">
        <img src={images[0].url} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
}
