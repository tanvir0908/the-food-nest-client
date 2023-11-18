import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

export default function AddItem() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                {...register("category", { required: true })}
                className="border-2  px-3 py-2 mt-2 font-medium rounded-xl outline-none w-full"
              >
                <option disabled selected>
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
              {...register("recipe")}
              name=""
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
