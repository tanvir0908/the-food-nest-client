import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Reviews from "./Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - The Food Nest</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Reviews />
    </div>
  );
}
