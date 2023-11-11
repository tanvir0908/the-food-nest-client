/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function MenuItem({ item }) {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-5 items-center">
      <div>
        <img
          className="w-[12rem]"
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
}
