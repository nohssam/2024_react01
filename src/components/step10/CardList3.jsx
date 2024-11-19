import CardItem3 from "./CardItem3";


function CardList3({ items }) {
  const [course1, course2, course3] = items;
  return (
    <main>
      <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <CardItem3 {...course1} />
            <CardItem3 {...course2} />
            <CardItem3 {...course3} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardList3;