
import CardItem2 from './CardItem2'

function CardList2(props) {
  return (
    <main>
      <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <CardItem2 />
            <CardItem2 />
            <CardItem2 />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardList2;