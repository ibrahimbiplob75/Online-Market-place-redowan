import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../Hook/UseAxios";
import Container from "../../Components/UI/Container";
import Loader from "../../Components/UI/Loader";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

const Love_Box = () => {
  const Axios = UseAxios();
  const [price, setPrice] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [Category, SetCategory] = useState([]);

  const limit = 6;
  const noOfpage=5

  // useEffect(() => {
  //   Axios.get("/categories")
  //     .then((res) => res.data)
  //     .then((data) => SetCategory(data));
  // }, []);

  // const getServices = async () => {
  //   const response = await Axios.get(
  //     `/user/magazines/?sortField=details.pricing&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
  //   );
  //   return response;
  // };

  // const {
  //   data: services,
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["services", price, page],
  //   queryFn: getServices,
  // });

  // if (isLoading) {
  //   return <Loader />;
  // }

  // const noOfpage = Math.ceil(services.data?.total / limit);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < noOfpage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Container>
        {/* Header Section */}
        <div className="my-12 flex flex-col items-center bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            শাড়ী চুরী আর নারী 
          </h1>
          <p className="text-sm md:text-lg max-w-2xl text-center">
            <span className="text-2xl">জামদানি শাড়ি:</span>  
              জামদানি শাড়ি বাংলাদেশের ঐতিহ্যবাহী বুননশিল্পের একটি নিদর্শন, যা সূক্ষ্ম হাতে বোনা নকশার জন্য বিশ্বখ্যাত। এর সুতার সূক্ষ্মতা এবং নকশার সৌন্দর্য শাড়িটিকে অনন্য করে তোলে।  
            <br></br>
            <span className="text-2xl">কাঠান শাড়ি:</span>  
              কাঠান শাড়ি ভারতের ঐতিহ্যবাহী বেনারসি শাড়ির একটি ধরন, যা মোটা সিল্ক এবং জটিল নকশার জন্য পরিচিত। এটি বিশেষ অনুষ্ঠান ও উৎসবের জন্য জনপ্রিয়।  
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-lg shadow-md mb-10">
          <h2 className="font-semibold text-lg mb-4 md:mb-0">
            Find your choiced category:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="form-control">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Chose category
                  </option>
                  {/* {Category?.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))} */}
                  <option>Jamdani Love Box</option>
                  <option>Katan Love Box</option>
                  
                  
                </select>
              </div>
              <div className="form-control">
                <select
                  onChange={(e) => setPrice(e.target.value)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Price Range
                  </option>
                  <option value={"desc"}>High to low</option>
                  <option value={"asc"}>Low to high</option>
                </select>
              </div>
            </div>
        </div>
      </Container>

      {/* Magazine Cards */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        

        {/* Pagination */}
        <div className="mt-10 text-center">
          <div className="join">
            <button
              onClick={handlePrev}
              className="join-item btn btn-outline btn-sm"
            >
              Prev
            </button>
            {[...Array(noOfpage)].map((_, key) => (
              <input
                key={key}
                className="join-item btn btn-square w-20 btn-sm"
                type="radio"
                name="options"
                onClick={() => setPage(key + 1)}
                aria-label={`Page ${key + 1}`}
              />
            ))}
            <button
              onClick={handleNext}
              className="join-item btn btn-outline btn-sm"
            >
              Next
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Love_Box;
