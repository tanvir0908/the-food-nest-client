/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";

export default function Cover({ image, title, description }) {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
      className="bg-cover"
    >
      <div className="hero h-[40rem] bg-cover">
        <div className="hero-content bg-black bg-opacity-40 w-3/4 h-1/2  text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
