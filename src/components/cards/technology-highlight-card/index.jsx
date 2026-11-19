import './technology-highlight-card.css';

const technologyGroups = [
  {
    name: 'Cloud',
    technologies: ['Azure', 'AWS'],
  },
  {
    name: 'Programming languages',
    technologies: ['Python', 'TypeScript', 'JavaScript'],
  },
  {
    name: 'Infrastructure as Code',
    technologies: ['Terraform', 'Crossplane'],
  },
  {
    name: 'CI/CD',
    technologies: ['GitHub Actions', 'Argo CD'],
  },
  {
    name: 'Container orchestration',
    technologies: ['Kubernetes'],
  },
  {
    name: 'Monitoring',
    technologies: ['Dynatrace', 'Datadog', 'Grafana', 'Kibana']
  }
];

function TechnologyHighlightCard() {
  return (
    <section
      className="technology-highlights"
      aria-labelledby="technology-highlights-heading"
    >
      <h2 id="technology-highlights-heading">Technologies I work with most</h2>
      <div className="technology-highlight-grid">
        {technologyGroups.map(({ name, technologies }) => (
          <article className="technology-category-card" key={name}>
            <h3>{name}</h3>
            <ul>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechnologyHighlightCard;
