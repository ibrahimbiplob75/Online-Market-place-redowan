import React, { useState } from 'react';
import Container from '../../Components/UI/Container';
import ProductCard from '../../Components/ProductCard';

const KathanSaree = () => {

    
    const [page, setPage] = useState(1);
    
  const limit = 6;
  const noOfpage=5
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
        <div>
            <Container>
                    {/* Header Section */}
                    <div className="my-12 flex flex-col items-center bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-2xl p-8 shadow-lg">
                      <h1 className="text-3xl font-bold mb-4">
                        শাড়িতে নারী মনে হয়, যেন ঐতিহ্যের সৌন্দর্য আর আধুনিকতার মেলবন্ধন একসঙ্গে জেগে উঠেছে
                      </h1>
                      <p className="text-sm md:text-lg max-w-2xl text-center">
                        <span className="text-2xl">কাতান শাড়ি:</span>  
                            কাতান শাড়ি ভারতের ঐতিহ্যবাহী বেনারসি শাড়ির একটি ধরন, যা মোটা সিল্ক এবং জটিল নকশার জন্য পরিচিত। এটি বিশেষ অনুষ্ঠান ও উৎসবের জন্য জনপ্রিয়।  
                        </p>
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
        </div>
    );
};

export default KathanSaree;