import { FaStar } from "react-icons/fa";
import { cn } from "../libs/libs";
import AddToCartButton from "./AddToCartButton";

const CardProduct = ({ product }) => {
   return (
      <div
         className={cn(
            "px-3 py-4",
            "bg-white group rounded-lg shadow cursor-pointer",
            "flex flex-col justify-between gap-y-2 overflow-hidden"
         )}
      >
         <div className="space-y-4">
            <div className="flex justify-center items-center">
               <img
                  src={product?.image}
                  alt="product"
                  className="max-h-[140px] aspect-auto object-cover object-center group-hover:scale-105 transition-all duration-300"
               />
            </div>
            <div className="flex flex-col gap-y-1">
               <h3 className="text-gray-500 text-[10px] sm:text-[12px] font-medium capitalize">
                  {product?.category}
               </h3>
               <h3 className="font-semibold text-[12px] sm:text-[13px] leading-tight">
                  {" "}
                  {product?.title}{" "}
               </h3>
               <div className="flex items-stretch gap-x-1">
                  <div className="flex items-center gap-x-1">
                     <FaStar className="text-yellow-300 text-[11px] sm:text-base" />
                     <p className="text-gray-500 font-medium text-[10px] sm:text-[12px]">
                        {" "}
                        {product?.rating.rate}
                     </p>
                  </div>
                  <div className="w-[1px] bg-gray-500"></div>
                  <p className="text-[10px] sm:text-[12px] text-gray-500 font-medium">
                     {" "}
                     {product?.rating.count} reviews
                  </p>
               </div>
            </div>
         </div>
         <div className="bg-gray-300 rounded-full px-4 py-2 relative overflow-hidden">
            <h4 className="text-black font-semibold text-[11px] sm:text-base">
               ${product?.price}
            </h4>
            <AddToCartButton product={product} />
         </div>
      </div>
   );
};

export default CardProduct;
