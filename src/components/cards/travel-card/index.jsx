import './travel-card.css';

function TravelCard({ destination, image, description, recommendations }) {
  return (
    <article className="travel-card">
      <img className="travel-card-image" src={image} alt={destination} />
      <div className="travel-card-body">
        <h2>{destination}</h2>
        <p>{description}</p>
        <div className="travel-card-recommendations">
          {recommendations.map(({ category, name, url, description: details }) => (
            <section className="travel-card-recommendation" key={category}>
              <h3>{category}</h3>
              <a href={url}>{name}</a>
              {details && <p>{details}</p>}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TravelCard;
