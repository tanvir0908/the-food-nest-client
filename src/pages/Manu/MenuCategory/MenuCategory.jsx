/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, title, coverImage }) {
  return (
    <div className="my-10">
      {title && (
        <Cover
          image={coverImage}
          title={title}
          description={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-2">
          Order Now
        </button>
      </Link>
    </div>
  );
}
