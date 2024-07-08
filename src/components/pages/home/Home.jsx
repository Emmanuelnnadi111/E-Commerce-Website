import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Navbar } from "./navbar/Navbar";
const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full p-4 m-auto  md:w-[80%] lg:w-[90%]">
        <Navbar />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
