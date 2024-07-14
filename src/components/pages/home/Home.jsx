import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Navbar } from "./navbar/Navbar";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
import SeventhSection from "./sections/SeventhSection";
import EightSection from "./sections/EightSection";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%]">
        <Navbar />
      </div>
      <FirstSection />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%] ">
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
