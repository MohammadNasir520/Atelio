import React, { useState } from 'react';
import "../../components/Style.Css/Style.css"

const RecentWorks = ({ data }) => {
    console.log(data)
    const [selectedProduct, setSelectedProduct] = useState(null);
    console.log(selectedProduct)
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (product, index) => {
        setSelectedProduct(product);
        setSelectedIndex(index);
    };

    const getClassNameForIndex = (index) => {
        if (index % 6 === 0 || index % 6 === 2 || index % 6 === 3) {
            return "row-span-2 w-full sm:w-[300px] h-[350px] mx-auto my-2 cursor-pointer";
        } else {
            return "row-span-1 w-full sm:w-[300px] h-[150px] mx-auto my-2 cursor-pointer";
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
                <h1 className='fontFranklin lg:text-xl text-gray-400'>take a look at</h1>
                <h1 className="text-2xl lg:text-3xl font-bold">Our Recent Works</h1>
            </div>

            {groups.map((group, groupIndex) => (
                <div key={groupIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-2 lg:px-28 my-16">
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
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:w-3/4   mx-auto my-5 h-[700px] border">
                            <img
                                src={selectedProduct.image}
                                className="h-3/4 w-full  mx-auto"
                                alt={selectedProduct.title || "Selected Product Image"}
                            />
                            <h1 className="text-center font-bold my-2">{selectedProduct.title || "Product Title"}</h1>
                            <p className="text-center">
                                {selectedProduct.description || "Lorem ipsum dolor  adipisicing elit. Nulla, incidunt. Delectus assumenda quis nam odio eveniet laudantium possimus expedita repellendus in vel dolorum labore, quia perferendis fugit sit pariatur? Quisquam voluptatum quam, "}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RecentWorks;
