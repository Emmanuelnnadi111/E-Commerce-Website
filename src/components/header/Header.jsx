import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="bg-footerCol w-full p-4">
      <div className=" w-[100%] text-small  md:w-[80%] lg:w-[60%] md:text-sm flex items-center m-auto text-secondaryWhite justify-between">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>
            <a href="">ShopNow</a>
          </span>
        </p>
        <div className="flex space-x-2 items-center">
          <p>English</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  );
};

export default Header;
