import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { Navbar } from "../home/navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <div className="">
        <Header />
        <div className="w-full p-4 m-auto  md:w-[80%] lg:w-[90%]">
          <Navbar />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
