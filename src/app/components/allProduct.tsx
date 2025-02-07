// 'use client';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { allProductsGain } from '@/sanity/lib/quries';
// import { client } from '../../sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';
// import { Product } from '../../../types/product';
// import { addToCart } from '../action/action'

// const AllProduct = () => {
//   const [product, setProduct] = useState<Product[]>([]);
//     const handleAddToCart= (e:React.MouseEvent,product:Product)=>{
//       e.preventDefault()
//       addToCart(product)

//   useEffect(() => {
//     async function fetchProduct() {
//       const fetchedData: Product[] = await client.fetch(allProductsGain);
//       setProduct(fetchedData);
//     }
//     fetchProduct();
//   }, []);

//   return (
//     <div className="px-6 sm:px-10 md:px-20 bg-[#996262] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {product.map((product) => (
//         <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
//           <Link href={`/product/${product.slug?.current || 'default-slug'}`}>
//             <div className="flex flex-col items-center text-center">
//               {product.image && (
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   className="rounded-md object-cover"
//                 />
//               )}
//               <h3 className="mt-2 font-semibold text-lg text-gray-800">{product.name}</h3>
//               <p className="mt-1 text-gray-600 font-medium">${product.price}</p>
//               <button  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
//                onClick={(e)=>handleAddToCart(e,product)}>
//                 Add To Cart
//                </button>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllProduct;


'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { allProductsGain } from '@/sanity/lib/quries';
import { client } from '../../sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import { Product } from '../../../types/product';
import { addToCart } from '../action/action';
// import ProductPage from '../product/[slug]/page';// 
import Filterui from './filterui';

const SideTable = () => {
  const [product, setProduct] = useState<Product[]>([]);

  const handleAddToCart= (e:React.MouseEvent,product:Product)=>{
    e.preventDefault()
    addToCart(product)
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedData: Product[] = await client.fetch(allProductsGain);
        setProduct(fetchedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProduct();
  }, []);

  return (<>
    <div className="px-6 sm:px-10 md:px-20 bg-[#996262] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.length > 0 ? (
        product.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
            {/* <Link href={`/product/${product.slug}`}> */}
              <div className="flex flex-col items-center text-center">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-md object-cover"
                  />
                )}
                <h3 className="mt-2 font-semibold text-lg text-gray-800">{product.name}</h3>
                <p className="mt-1 text-gray-600 font-medium">${product.price}</p>
              </div>
              <button  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
               onClick={(e)=>handleAddToCart(e,product)}>
                Add To Cart
               </button>
            {/* </Link> */}
          </div>
        ))
      ) : (
        <p className="text-white text-center col-span-full">No products available</p>
      )}
    </div>
    </>
  );
};

export default SideTable;
