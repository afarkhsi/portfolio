import Card from '../../components/Card/Card';
import DATA from '../../data/data';

const Projects = () => {
  return (
    <section className="cards">
      {DATA &&
        DATA.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            technologie={card.technologie}
            tags={card.tags}
            link={card.link}
          />
        ))}
    </section>
  );
};
export default Projects;
