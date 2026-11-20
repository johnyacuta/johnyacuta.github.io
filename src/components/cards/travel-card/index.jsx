import './travel-card.css';

function TravelCard({ destination, image, visited, description, recommendations }) {
  return (
    <article className="travel-card">
      <img className="travel-card-image" src={image} alt={destination} />
      <div className="travel-card-body">
        <h2>{destination}</h2>
        <p className="travel-card-visited">
          <strong>Visited:</strong> {visited}
        </p>
        <p>{description}</p>
        <div className="travel-card-recommendations">
          {recommendations.map(({ category, items }) => (
            <section className="travel-card-recommendation" key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map(({ name, url, description: details }) => (
                  <li key={name}>
                    <a href={url}>{name}</a>
                    {details && <p>{details}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TravelCard;
