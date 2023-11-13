/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function FoodCard({ item }) {
  const { image, name, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt="Shoes" />
        <p className="absolute top-3 rounded right-5 bg-black px-2 py-1 text-white font-medium">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-semibold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mx-auto">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
