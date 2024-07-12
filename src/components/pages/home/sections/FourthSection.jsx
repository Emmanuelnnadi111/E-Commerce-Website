import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Shirt from "/images/homepage/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png";
import Bookshelf from "/images/homepage/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png";
import Speaker from "/images/homepage/gammaxx-l240-argb-1-500x500 1.png";
import Bag from "/images/homepage/Frame 606.png";
import FiveStar from "/images/homepage/Five star.png";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
// import FourStar from "/images/homepage/Four Star.png";
import FourHalfStar from "/images/homepage/Four Half Star.png";
const FourthSection = () => {
  return (
    <div className="py-14">
      <div className="flex  gap-3 items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">This Month</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">Best Selling Products</h1>
            <h1></h1>
          </div>
        </div>
        <div className="">
          <button className="bg-primary px-8 py-3 rounded-sm text-secondaryWhite text-center text-xs">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="relative ">
            <div className="bg-searchBg rounded-sm flex w-72 md:w-full h-60">
              <img src={Shirt} alt="" className="block m-auto " />
            </div>
            <div className="absolute top-0  bottom-0 w-full px-3 py-2">
              <div className="flex  items-center justify-end">
                <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="">
                <FontAwesomeIcon
                  icon={faEye}
                  className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-semibold">The north coat</p>
            <div className="flex gap-2">
              <p className="text-primary">$260</p>
              <p className="text-footer  line-through">$360</p>
            </div>
            <div className="flex items-center">
              <img src={FiveStar} alt="" />
              <p>(65)</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative ">
            <div className="bg-searchBg flex rounded-sm w-72 md:w-full h-60">
              <img src={Bag} alt="" className="block m-auto " />
            </div>
            <div className="absolute top-0  bottom-0 w-full px-3 py-2">
              <div className="flex  items-center justify-end">
                <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="">
                <FontAwesomeIcon
                  icon={faEye}
                  className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-semibold">Gucci duffle bag</p>
            <div className="flex gap-2">
              <p className="text-primary">$960</p>
              <p className="text-footer  line-through">$1160</p>
            </div>
            <div className="flex items-center">
              <img src={FourHalfStar} alt="" />
              <p>(65)</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative ">
            <div className="bg-searchBg flex rounded-sm w-72 md:w-full h-60">
              <img src={Speaker} alt="" className="block m-auto " />
            </div>
            <div className="absolute top-0  bottom-0 w-full px-3 py-2">
              <div className="flex  items-center justify-end">
                <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="">
                <FontAwesomeIcon
                  icon={faEye}
                  className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-semibold">RGB liquid CPU Cooler</p>
            <div className="flex gap-2">
              <p className="text-primary">$160</p>
              <p className="text-footer  line-through">$170</p>
            </div>
            <div className="flex items-center">
              <img src={FourHalfStar} alt="" />
              <p>(65)</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative ">
            <div className="bg-searchBg flex w-72 md:w-full h-60 rounded-sm ">
              <img src={Bookshelf} alt="" className="block m-auto " />
            </div>
            <div className="absolute top-0  bottom-0 w-full px-3 py-2">
              <div className="flex  items-center justify-end">
                <div className="px-2 py-1 rounded-full bg-secondaryWhite">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="">
                <FontAwesomeIcon
                  icon={faEye}
                  className="flex ml-auto mt-4 px-2 py-1 rounded-full bg-secondaryWhite"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-semibold">Small BookSelf</p>
            <div className="flex gap-2">
              <p className="text-primary">$360</p>
            </div>
            <div className="flex items-center">
              <img src={FiveStar} alt="" />
              <p>(65)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
