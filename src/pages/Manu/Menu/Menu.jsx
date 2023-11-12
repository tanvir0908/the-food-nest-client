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
      {/* pizza  */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImage={
          "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
        }
      />
      {/* salad */}
      <MenuCategory
        items={salad}
        title={"Salad"}
        coverImage={
          "https://www.simplyrecipes.com/thmb/1diOxNqUS9hd9J6vF_SvCtKNpus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__10__waldorf-salad-horiz-a-1500-f54f0588f23d4f51b8d92469e6d81cf1.jpg"
        }
      />
      {/* Soup */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImage={
          "https://hips.hearstapps.com/hmg-prod/images/chicken-noodle-soup-index-644c2bec1ce0c.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
        }
      />
    </div>
  );
}
