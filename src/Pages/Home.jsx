import {  useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  const categories = useLoaderData();
  console.log(categories);
  return (
    <>
      <div className="w-full px-8 md:px-12">
        <Helmet>
          <title>Home || Gadget Heaven</title>
        </Helmet>
        <Banner />
      </div>
      {/* Heading */}
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      {/* Nested tab section */}
      <Categories categories={categories}></Categories>

      {/* dynamic nested component */}
    </>
  );
};

export default Home;
