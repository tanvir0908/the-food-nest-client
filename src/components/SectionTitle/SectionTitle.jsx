/* eslint-disable react/prop-types */
export default function SectionTitle({ heading, subHeading }) {
  return (
    <div className="mt-5">
      <p className="text-xl font-medium text-center text-[#D99904]">
        {subHeading}
      </p>
      <h3 className="py-5 border-y-2 text-center w-1/2 mx-auto mt-5 mb-10 text-4xl font-semibold">
        {heading}
      </h3>
    </div>
  );
}
