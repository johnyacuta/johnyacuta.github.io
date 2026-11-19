import './beer-card.css';

function BeerCard({ name, image, description, abv }) {
  return (
    <article className="beer-card">
      <img className="beer-card-image" src={image} alt={name} />
      <div className="beer-card-body">
        <h2 className="beer-card-title">{name}</h2>
        <p>{description}</p>
        <p className="beer-card-abv">
          <strong>ABV:</strong> {abv}
        </p>
      </div>
    </article>
  );
}

export default BeerCard;
