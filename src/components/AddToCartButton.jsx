import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCart } from "../store/slice/cart";
import { FaCirclePlus } from "react-icons/fa6";

const AddToCartButton = ({ product }) => {
   const [isLoading, setIsLoading] = useState(false);
   const dispatch = useDispatch();
   const handleCart = async () => {
      setIsLoading(true);
      await new Promise((resolve, _) => setTimeout(resolve, 1000));
      dispatch(AddCart(product));
      setIsLoading(false);
   };

   return (
      <>
         {isLoading ? (
            <div className="animate-to-left absolute w-full top-0 left-0 h-full bg-black text-white flex items-center justify-center">
               loading....
            </div>
         ) : (
            <button
               className="absolute h-full top-0 right-0"
               onClick={handleCart}
               aria-disabled={isLoading}
            >
               <FaCirclePlus className="text-3xl hover:text-black/70 transition-colors duration-300" />
            </button>
         )}
      </>
   );
};

export default AddToCartButton;
