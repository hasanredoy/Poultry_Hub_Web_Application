
const Card = ({items}) => {
  return (
    <section className="card bg-base-100 h-[400px shadow-xl">
  <figure>
    <img className=" w-[90%] h-[350px]"
      src={items?.image}
      alt={items?.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{items?.name}</h2>
    <p>{items?.description?.slice(0,150)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
    </section>
  );
};

export default Card;