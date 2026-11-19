import './card.css';

function Card({ image, imageAlt = '', title, children }) {
  return (
    <article className="content-card">
      {image && <img className="content-card-image" src={image} alt={imageAlt} />}
      <div className="content-card-body">
        {title && <h2 className="content-card-title">{title}</h2>}
        {children}
      </div>
    </article>
  );
}

export default Card;
