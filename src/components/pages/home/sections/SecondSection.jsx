import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GamePad from "/images/homepage/Frame 611.png";
import Keyboard from "/images/homepage/Frame 612.png";
import Monitor from "/images/homepage/Frame 613.png";
import Chair from "/images/homepage/Frame 614.png";
import Half from "/images/homepage/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
import FiveStar from "/images/homepage/Five star.png";
import FourStar from "/images/homepage/Four Star.png";
import FourHalfStar from "/images/homepage/Four Half Star.png";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
const SecondSection = () => {
  return (
    <div className="py-20">
      <div className="flex  textColor items-center">
        <div className="h-16 bg-primary w-8 rounded-md "></div>
        <p className="text-primary font-semibold">Today’s</p>
      </div>
      <div className="sm:flex py-10 justify-between items-center ">
        <div className="sm:flex items-center gap-20">
          <div>
            <h1 className="font-semibold sm:text-3xl">Flash Sales</h1>
          </div>
          <div className="flex gap-5 items-center">
            <div className="">
              <p className="text-xs">Days</p>
              <p className="font-bold sm:text-3xl">03</p>
            </div>
            <div className="text-primary sm:text-2xl font-bold">:</div>
            <div className="">
              <p className="text-xs">Hours</p>
              <p className="font-bold sm:text-3xl">23</p>
            </div>
            <div className="text-primary sm:text-2xl font-bold">:</div>
            <div className="">
              <p className="text-xs">Minutes</p>
              <p className="font-bold sm:text-3xl">19</p>
            </div>
            <div className="text-primary text-2xl font-bold">:</div>
            <div className="">
              <p className="text-xs">Seconds</p>
              <p className="font-bold sm:text-3xl">56</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-searchBg px-3 py-2 rounded-full text-center">
            <FontAwesomeIcon icon={faArrowLeft} className="text-center" />
          </div>
          <div className="bg-searchBg px-3 py-2   rounded-full text-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-center" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div>
            <div className="relative ">
              <div className="bg-searchBg rounded-sm ">
                <img src={GamePad} alt="" className="block m-auto p-6" />
              </div>
              <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                <div className="flex justify-between">
                  <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                    <p className="">-40%</p>
                  </div>
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
              <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
              <div className="flex gap-2">
                <p className="text-primary">$120</p>
                <p className="text-footer  line-through">$160</p>
              </div>
              <div className="flex items-center">
                <img src={FiveStar} alt="" />
                <p>(75)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="bg-searchBg rounded-sm ">
                <img src={Keyboard} alt="" className="block m-auto p-8" />
              </div>
              <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                <div className="flex justify-between">
                  <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                    <p className="">-35%</p>
                  </div>
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
              <button className="bg-footerCol text-secondaryWhite text-center rounded-sm w-full p-3 absolute bottom-0">
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">AK-900 Wired Keyboard</p>
              <div className="flex gap-2">
                <p className="text-primary">$960</p>
                <p className="text-footer  line-through">$1160</p>
              </div>
              <div className="flex items-center">
                <img src={FourStar} alt="" />
                <p>(99)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="bg-searchBg rounded-sm ">
                <img src={Monitor} alt="" className="block m-auto p-9" />
              </div>
              <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                <div className="flex justify-between">
                  <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                    <p className="">-30%</p>
                  </div>
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
              <p className="font-semibold">IPS LCD Gaming Monitor</p>
              <div className="flex gap-2">
                <p className="text-primary">$370</p>
                <p className="text-footer  line-through">$400</p>
              </div>
              <div className="flex items-center">
                <img src={FiveStar} alt="" />
                <p>(99)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="bg-searchBg rounded-sm ">
                <img src={Chair} alt="" className="block m-auto p-6" />
              </div>
              <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                <div className="flex justify-between">
                  <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                    <p className="">-25%</p>
                  </div>
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
              <p className="font-semibold">S-Series Comfort Chair</p>
              <div className="flex gap-2">
                <p className="text-primary">$375</p>
                <p className="text-footer  line-through">$400</p>
              </div>
              <div className="flex items-center">
                <img src={FourHalfStar} alt="" />
                <p>(99)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="bg-searchBg rounded-sm ">
                <img src={Half} alt="" className="block m-auto p-5" />
              </div>
              <div className="absolute top-0  bottom-0 w-full px-3 py-2">
                <div className="flex justify-between">
                  <div className="text-secondaryWhite px-2 py-1 rounded-md text-xs h-6 text-center bg-primary">
                    <p className="">-25%</p>
                  </div>
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
              <p className="font-semibold">S-Series Comfort Chair</p>
              <div className="flex gap-2">
                <p className="text-primary">$375</p>
                <p className="text-footer  line-through">$400</p>
              </div>
              <div className="flex items-center">
                <img src={FourHalfStar} alt="" />
                <p>(99)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 m-auto">
          <button className="bg-primary px-9 text-sm py-3 rounded-md text-secondaryWhite block m-auto">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
