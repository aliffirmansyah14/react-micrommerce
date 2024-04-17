import { IoClose } from "react-icons/io5";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { decreamentQuantity, increamentQuantity, removeCart } from "../store/slice/cart";


const ListCart = ({ product }) => {
   const dispatch = useDispatch();

   const handleRemoveCart = ()=>{
      dispatch(removeCart(product));
   }
   const handleIncreament = ()=>{
      dispatch(increamentQuantity(product))
   }
   const handleDecreament = () =>{
      if(product.quantity === 1){
         dispatch(removeCart(product));
         return 
      }
      dispatch(decreamentQuantity((product)));
   }

  return (
    <div className="px-4 flex gap-x-2">
      <div className="flex items-center justify-center p-1">
         <img src={ product?.image } 
            alt="gambar"
            className="w-[30px] object-cover object-center"
         />
      </div>
      <div className="flex-1 flex">
         <div className="flex-1">
            <h4 className="text-[13px] font-bold"> { product?.title } </h4>
            <p className="text-gray-500 text-[11px] font-medium capitalize"> { product?.category }</p>
            <p className="text-black font-bold text-base">{ product?.price }</p>
         </div>
         <div className="relative flex items-end ">
            <button 
               type="button" 
               className="absolute top-0 right-0 cursor-pointer"
               onClick={handleRemoveCart} 
            >
               <IoClose className="text-2xl text-gray-500" />  
            </button>
            <div className="flex justify-center items-stretch rounded-full border border-gray-300 overflow-hidden">
               <ActionButton onClick={handleDecreament}>
                  <FaMinus className="text-[12px] "/>
               </ActionButton>
               <p className="font-medium w-[30px] text-center">{ product?.quantity }</p>
               <ActionButton onClick={handleIncreament}>
                  <FaPlus className="text-[12px] "/>
               </ActionButton>
            </div>
         </div>
      </div>
 </div>
  )
}


const ActionButton = ({children,...props})=>{
   return(
      <button className="px-2 hover:bg-gray-200 transition-all duration-300" {...props} >
         {children}
      </button>
   )
}


export default ListCart