import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>Menu - The Food Nest</title>
      </Helmet>
      <Cover
        image={
          "https://b.zmtcdn.com/data/pictures/4/19650174/0c6808d7b03678e3ffba07407da517aa.jpg?fit=around|960:500&crop=960:500;*,*"
        }
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu />
      <Cover
        image={
          "https://b.zmtcdn.com/data/pictures/4/19650174/0c6808d7b03678e3ffba07407da517aa.jpg?fit=around|960:500&crop=960:500;*,*"
        }
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu />
      <Cover
        image={
          "https://b.zmtcdn.com/data/pictures/4/19650174/0c6808d7b03678e3ffba07407da517aa.jpg?fit=around|960:500&crop=960:500;*,*"
        }
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu />
    </div>
  );
}
