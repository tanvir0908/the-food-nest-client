import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

export default function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-20 mt-10">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline border-0 border-b-2">
          Order Now
        </button>
      </div>
    </div>
  );
}
