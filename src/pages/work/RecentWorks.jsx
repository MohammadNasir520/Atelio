import React, { useState } from 'react';

const RecentWorks = ({ data }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (product, index) => {
        setSelectedProduct(product);
        setSelectedIndex(index);
    };

    return (
        <div id="recent-work" className="my-7">
            <div className="text-center">
                <h1>take a look at</h1>
                <h1 className="font-bold">Our Recent Works</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((product, i) => (
                    <React.Fragment key={i}>
                        <div
                            className="h-[250px] w-full sm:w-[300px] mx-auto my-5 cursor-pointer"
                            onClick={() => handleClick(product, i)}
                        >
                            <img
                                src={product?.image}
                                className="h-full w-full"
                                alt={product?.title || "Product Image"}
                            />
                        </div>
                        {i % 3 === 2 && (
                            <>
                                {selectedProduct && Math.floor(selectedIndex / 3) === Math.floor(i / 3) && (
                                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full lg:w-2/4 mx-auto my-5 h-[600px] border">
                                        <img
                                            src={selectedProduct.image}
                                            className="h-[450px] w-full object-cover"
                                            alt={selectedProduct.title || "Selected Product Image"}
                                        />
                                        <h1 className="text-center font-bold my-2">Product Title</h1>
                                        <p className="text-center">
                                            {selectedProduct.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, incidunt. Delectus assumenda quis nam odio eveniet laudantium possimus expedita repellendus in vel dolorum labore, quia perferendis fugit sit pariatur? Quisquam voluptatum quam, "}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </React.Fragment>
                ))}

            </div>
        </div>
    );
};

export default RecentWorks;
