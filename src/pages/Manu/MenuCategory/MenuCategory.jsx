/* eslint-disable react/prop-types */
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, title, coverImage }) {
  return (
    <div className="mb-10">
      {title && (
        <Cover
          image={coverImage}
          title={"OUR MENU"}
          description={"Would you like to try a dish?"}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
