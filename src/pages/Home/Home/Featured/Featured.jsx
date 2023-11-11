import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../../assets/home/featured.jpg";

export default function Featured() {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImage})` }}
      className="bg-cover bg-black pt-10 bg-opacity-40 mb-20 bg-center bg-fixed"
    >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="md:flex justify-center items-center gap-10 px-16 pt-10 pb-16 text-black">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
