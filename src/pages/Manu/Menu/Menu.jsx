import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu - The Food Nest</title>
      </Helmet>
      {/* main cover */}
      <Cover
        image={
          "https://b.zmtcdn.com/data/pictures/4/19650174/0c6808d7b03678e3ffba07407da517aa.jpg?fit=around|960:500&crop=960:500;*,*"
        }
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* menu options with cover */}
      <SectionTitle heading={`TODAY'S OFFER`} subHeading={`---Don't miss---`} />
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        coverImage={
          "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Sweet-Colorful-Macarons.jpg"
        }
      />
    </div>
  );
}
