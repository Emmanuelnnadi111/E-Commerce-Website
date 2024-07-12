import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
const categories = [
  { image: "/images/homepage/Category-CellPhone.png", type: "Phones" },
  { image: "/images/homepage/Category-Computer.png", type: "Computers" },
  { image: "/images/homepage/Category-SmartWatch.png", type: "SmartWatch" },
  {
    image: "/images/homepage/Category-Camera.png",
    type: "Camera",
    bg: "bg-primary",
  },
  { image: "/images/homepage/Category-Headphone.png", type: "HeadPhones" },
  { image: "/images/homepage/Category-Gamepad.png", type: "Gaming" },
];
const ThirdSection = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  // };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? categories.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div>
      <div className="flex  gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">Categories</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">Browse By Category</h1>
            <h1></h1>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-searchBg px-3 py-2 rounded-full text-center">
            <FontAwesomeIcon icon={faArrowLeft} className="text-center" />
          </button>
          <button className="bg-searchBg px-3 py-2   rounded-full text-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-center" />
          </button>
        </div>
      </div>
      <div>
        <div className=" ">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-6">
            {categories.map((category) => (
              <div
                className={
                  category.bg
                    ? `flex flex-col w-full md:w-56  lg:w-44 rounded-sm text-center text-secondaryWhite py-5 gap-3 bg-primary m-auto`
                    : `flex flex-col w-full md:w-56 lg:w-44 rounded-sm text-center py-6 gap-3 bg-categoriesBg m-auto`
                }
                key={category.image}
              >
                <img src={category.image} className="w-20 block m-auto" />
                <p>{category.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-10 border-b "></div>
    </div>
  );
};

export default ThirdSection;
