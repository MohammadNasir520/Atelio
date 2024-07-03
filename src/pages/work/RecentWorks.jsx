import React, { useState } from 'react';

const RecentWorks = ({ data }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (product, index) => {
        setSelectedProduct(product);
        setSelectedIndex(index);
    };

    const getClassNameForIndex = (index) => {
        if (index % 6 === 0 || index % 6 === 2 || index % 6 === 3) {
            return "row-span-2 w-full sm:w-[300px] mx-auto my-2 cursor-pointer";
        } else {
            return "row-span-1 w-full sm:w-[300px] mx-auto my-2 cursor-pointer";
        }
    };

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const groups = chunkArray(data, 6);

    return (
        <div id="recent-work" className="my-7">
            <div className="text-center">
                <h1>take a look at</h1>
                <h1 className="font-bold">Our Recent Works</h1>
            </div>

            {groups.map((group, groupIndex) => (
                <div key={groupIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-3 lg:px-32">
                    {group.map((product, i) => (
                        <React.Fragment key={i}>
                            <div
                                className={getClassNameForIndex(i)}
                                onClick={() => handleClick(product, i + groupIndex * 6)}
                            >
                                <img
                                    src={product?.image}
                                    className="h-full w-full object-cover"
                                    alt={product?.title || "Product Image"}
                                />
                            </div>
                        </React.Fragment>
                    ))}
                    {selectedProduct && Math.floor(selectedIndex / 6) === groupIndex && (
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full lg:w-2/4 mx-auto my-5 h-[600px] border">
                            <img
                                src={selectedProduct.image}
                                className="h-[450px] w-full object-cover"
                                alt={selectedProduct.title || "Selected Product Image"}
                            />
                            <h1 className="text-center font-bold my-2">{selectedProduct.title || "Product Title"}</h1>
                            <p className="text-center">
                                {selectedProduct.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, incidunt. Delectus assumenda quis nam odio eveniet laudantium possimus expedita repellendus in vel dolorum labore, quia perferendis fugit sit pariatur? Quisquam voluptatum quam, "}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RecentWorks;
