import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function UpdateItem() {
  const { register, handleSubmit, reset } = useForm();
  const { name, category, recipe, price, _id } = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "Product updated successfully",
          icon: "success",
        });
        reset();
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update an item"}
        subHeading={"Please think twice"}
      />
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
              defaultValue={name}
            />{" "}
          </div>
          <div className="flex items-center my-5 gap-10">
            <div className="flex-1">
              <label className="font-medium">
                Category<span className="text-red-500">*</span>
              </label>
              <br />
              <select
                defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={recipe}
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
            value={"Update Item"}
          />
        </form>
      </div>
    </div>
  );
}
