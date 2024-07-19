import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { faCancel, faXmark } from "@fortawesome/free-solid-svg-icons";

const tableItems = [
  {
    image: "/images/homepage/Frame 613.png",
    title: "LCD Monitor",
    price: "$650",
    quan: "01",
    sub: "$650",
  },
  {
    image: "/images/homepage/Frame 611.png",
    title: "Hi Gamepad",
    price: "$650",
    quan: "02",
    sub: "$1100",
  },
  // {
  //   image: "",
  //   title: ",
  //   price1: "$650",
  //   quan2: "02",
  //   sub2: "$1100",
  // },
];
// const customers = [
//   {
//     name: "John Cooper",
//     company: "Microsoft",
//     phone: "+1 555-123-4567",
//     email: "john.doe@acmecorp.com",
//     country: "USA",
//     status: "Active",
//   },
//   {
//     name: "Jane Smith",
//     company: "Yahoo",
//     phone: "+44 20 7946 0958",
//     email: "jane.smith@techsolutions.co.uk",
//     country: "UK",
//     status: "Inactive",
//   },
//   {
//     name: "Hans Müller",
//     company: "Adobe",
//     phone: "+49 30 123456",
//     email: "hans.mueller@muellergmbh.de",
//     country: "Germany",
//     status: "Active",
//   },
//   {
//     name: "Marie Dubois",
//     company: "Tesla",
//     phone: "+33 1 23456789",
//     email: "marie.dubois@dubois.fr",
//     country: "France",
//     status: "Inactive",
//   },
// ];
const Cart = () => {
  return (
    <div>
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%] ">
        <div className="py-20">
          <p>Home / Cart</p>
        </div>
        <div>
          <table className="min-w-full bg-white overflow-x-scroll ">
            <thead className="bg-white py-6 shadow-md rounded-md">
              <tr className="flex bg-white py-6 px-10 w-full justify-between">
                <th className="">Product</th>
                <th className="">Price</th>
                <th className="">Quantity</th>
                <th className="">Subtotal</th>
              </tr>
            </thead>
            <tbody className="">
              {tableItems.map((item) => (
                <>
                  <tr
                    key={item.name}
                    className="flex items-center bg-white mt-10 py-6 px-10 w-full justify-between shadow-md"
                  >
                    <td className=" flex items-center ">
                      <div className="relative">
                        <img src={item.image} alt="" className="w-12" />
                        <div className="absolute top-0 rounded-full">
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="bg-primary text-secondaryWhite rounded-full text-small h-3 w-3 relative bottom-1"
                          />
                        </div>
                      </div>
                      <p className="text-xs">{item.title}</p>
                    </td>

                    <td className=" pr-[4rem]">{item.price}</td>
                    <td className=" pr-[4rem]">
                      <input
                        type="number"
                        name=""
                        id=""
                        className="w-24 rounded-md"
                      />
                    </td>
                    <td className="">{item.sub}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between py-10">
          <button className="px-14 py-4 border rounded-md ">
            Return To Shop
          </button>
          <button className="px-14 py-4 border rounded-md ">Update Cart</button>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-y-5 sm:gap-y-0">
          <div className="w-full flex flex-col sm:flex-row  gap-x-4 gap-y-4 sm:gap-y-0">
            <div className="md:w-[73%] md:py-5 lg:w-56 lg:py-0">
              <input
                type="text"
                name=""
                id=""
                className="py-3 rounded-md placeholder:px-3"
                placeholder="Coupon Code "
              />
            </div>
            <div>
              <button className="px-10 py-4 bg-primary text-secondaryWhite rounded-md text-sm">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 border-2 border-footerCol rounded-md px-4 py-7 w-full sm:w-[60%]">
            <h1 className="font-semibold">Cart Total</h1>
            <div className="flex justify-between border-b-2 py-2">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between ">
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <button className="bg-primary text-secondaryWhite px-5 py-4 w-60 block m-auto rounded-md">
              Process to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
