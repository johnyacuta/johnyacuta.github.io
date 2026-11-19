import './technology-highlight-card.css';

function TechnologyHighlightCard({ name, technologies }) {
  return (
    <article className="technology-highlight-card">
      <h3>{name}</h3>
      <ul>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}

export default TechnologyHighlightCard;
