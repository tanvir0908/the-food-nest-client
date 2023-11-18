import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddItem() {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  // handle submit function
  const onSubmit = async (data) => {
    console.log(data);
    // upload image to imageBb and get the url adn send that url to the server
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    // image has been uploaded into imageBB
    console.log(res.data);
    if (res.data.success) {
      // now send the menu data to the database
      console.log("Inside res.data.success");
      const menuItem = {
        name: data.name,
        category: data.category,
        price: Number(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Product added successfully",
          icon: "success",
        });
        console.log("Added successfully into database");
        reset();
      }
    }
  };
  return (
    <div>
      <SectionTitle heading={"Add An Item"} subHeading={"What's new"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-medium">
              Recipe Name<span className="text-red-500">*</span>
            </label>
            <br />
            <input
              {...register("name", { required: true })}
              className="border-2 px-3 w-full py-2 mt-2 rounded-xl font-medium"
              placeholder="Recipe name"
            />{" "}
          </div>
          <div className="flex items-center my-5 gap-10">
            <div className="flex-1">
              <label className="font-medium">
                Category<span className="text-red-500">*</span>
              </label>
              <br />
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="border-2  px-3 py-2 mt-2 font-medium rounded-xl outline-none w-full"
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-medium">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                className="border-2 px-3 w-full py-2 mt-2 rounded-xl font-medium"
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="font-medium">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              name="recipe"
              placeholder="Description"
              className="border-2 px-3 w-full py-2 mt-2 rounded-xl font-medium"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs mt-3"
            />
          </div>
          <input
            className="bg-orange-300 cursor-pointer px-3 py-2 rounded-xl w-full mt-5 font-medium"
            type="submit"
            value={"Add Item"}
          />
        </form>
      </div>
    </div>
  );
}
