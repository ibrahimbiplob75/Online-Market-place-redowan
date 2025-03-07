
import Container from '../Components/UI/Container';
import Carousel from '../Components/UI/Carousel';
import ProductCard from '../Components/ProductCard';
import OurCollections from './Collections';
import { FaHeadphonesAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import { useQuery } from '@tanstack/react-query';
import UseAxios from '../Hook/UseAxios';

const Home = () => {
  const Axios = UseAxios();
  const getProducts = async () => {
    const response = await Axios.get(`/user/products`);
    return response;
  };
  const {
    data: Products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
  });

  // console.log(Products)
  
  return (
    <Container>
      {/* Hero Section */}
      <Carousel></Carousel>

      <OurCollections></OurCollections>
      <div className='py-10 bg-gray-100 flex justify-center items-center mt-10'>
  <div className='w-full max-w-7xl'>
    <h1 className='text-3xl font-bold text-center mb-8'>New Arrival</h1>
    <div className='grid w-full items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 m-4 place-items-center'>
    {Products?.data?.result?.map(product=><ProductCard product={product} key={product?._id}></ProductCard>)}
      
      
    </div>
  </div>
      </div>

      

      

      {/* Features Section */}
      <div className="bg-gradient-to-br mb-10 from-white to-gray-50 py-16 mt-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Discover why we’re the preferred choice for thousands of customers every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 md:px-16">
          {/* Card 1: 24/7 Support */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
              <FaHeadphonesAlt className=" text-3xl text-white"></FaHeadphonesAlt>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">24/7 Support</h3>
            <p className="text-gray-500 text-sm mt-2">
              Our team is available around the clock to assist you with any queries or concerns.
            </p>
          </div>
          {/* Card 2: Cash on Delivery */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
              <CiDeliveryTruck className="fas fa-hand-holding-usd text-3xl text-white"></CiDeliveryTruck>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Cash on Delivery</h3>
            <p className="text-gray-500 text-sm mt-2">
              Pay after you receive your product, ensuring a hassle-free shopping experience.
            </p>
          </div>
          {/* Card 3: On-Time Delivery */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
              <IoIosTimer className="fas fa-shipping-fast text-3xl text-white"></IoIosTimer>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">On-Time Delivery</h3>
            <p className="text-gray-500 text-sm mt-2">
              We prioritize punctuality, ensuring your order arrives exactly when expected.
            </p>
          </div>
          {/* Card 4: 7 Days Return Policy */}
          <div className="text-center bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
              <TbTruckReturn className="fas fa-undo text-3xl text-white"></TbTruckReturn>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">7 Days Return</h3>
            <p className="text-gray-500 text-sm mt-2">
              Enjoy a flexible return policy, allowing returns within 7 days of purchase.
            </p>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default Home;
