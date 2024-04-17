import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegFrownOpen } from "react-icons/fa";
import ListCart from "./ListCart";
import useModalCartContext from "../context/useModalCartContext";
import ModalWrapper from "./ModalWrapper";
import { getTotal } from "../libs/libs";

const Cart = () => {
   const { setOpen } = useModalCartContext();
   const { data: carts } = useSelector(state => state.cart);
   const total = getTotal();
   return (
      <ModalWrapper>
         <div className="animate-scale-in w-full h-full sm:w-[450px]  sm:h-[400px] rounded bg-white flex flex-col">
            <header className="relative border-b border-[#eaeaea] px-4 py-3">
               <button
                  className="absolute top-1/2 -translate-y-1/2"
                  onClick={() => setOpen(false)}
               >
                  <IoIosArrowBack />
               </button>
               <h4 className="font-semibold text-center"> Carts </h4>
            </header>
            <div className="flex-1 flex flex-col gap-y-4 py-1 overflow-y-auto">
               {carts.length > 0 ? (
                  carts.map((product, i) => {
                     return <ListCart product={product} key={i} />;
                  })
               ) : (
                  <NotFound />
               )}
            </div>
            <div className="space-y-2 border-t border-[#eaeaea] px-4 py-3">
               <div className="flex justify-between">
                  <div>
                     <h4 className="font-medium text-base">Total</h4>
                     <p className="text-gray-500 text-[10px]">
                        With this order you will earn 5 point
                     </p>
                  </div>
                  <div>
                     <p className="font-bold text-end">${total}</p>
                     <p className="text-gray-500 text-[10px] text-end">
                        VAT Unlocked
                     </p>
                  </div>
               </div>
               <button
                  type="button"
                  className="bg-gray-950 rounded-lg w-full text-white text-center py-2"
               >
                  Proceed to checkout
               </button>
            </div>
         </div>
      </ModalWrapper>
   );
};

const NotFound = () => {
   return (
      <div className="h-full w-full flex justify-center items-center">
         <div className="flex items-center">
            <FaRegFrownOpen className="text-xl me-2" /> Belum Ada...
         </div>
      </div>
   );
};
export default Cart;
