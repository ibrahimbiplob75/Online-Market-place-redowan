import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../Hook/UseAxios";
import Container from "../../Components/UI/Container";
import Loader from "../../Components/UI/Loader";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

const Shawl = () => {
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
             উন্নত ও অরিজিনাল শাল এর কালেকশন 
          </h1>
          <p className="text-sm md:text-lg max-w-2xl text-center">
            <span className="text-2xl">শালের ধরন:</span>   
              কাশ্মীরি পশমিনা শাল উষ্ণ এবং মসৃণ, যা শীতকালের জন্য আদর্শ। উলের শাল দৈনন্দিন ব্যবহারে হালকা ও আরামদায়ক। সিল্ক শাল ঝকঝকে ও মসৃণ, যা অনুষ্ঠানের জন্য উপযুক্ত। হ্যান্ডলুম শাল ঐতিহ্যবাহী বুননের সৌন্দর্য তুলে ধরে। 
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-lg shadow-md mb-10">
          <h2 className="font-semibold text-lg mb-4 md:mb-0">
            Find your choiced category:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full md:w-auto">
            <div className="form-control">
              <select
                onChange={(e) => setPrice(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option value={"desc"}>Hight to Low</option>
                <option value={"asc"}>Low to High</option>
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

export default Shawl;
