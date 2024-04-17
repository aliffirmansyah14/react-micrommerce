import { NavLink } from "react-router-dom";
import { navbarItems } from "../data/navbarItems";
import { cn } from "../libs/libs";
import { useSelector } from "react-redux";
import useModalCartContext from "../context/useModalCartContext";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Navbar = () => {
   const { setOpen } = useModalCartContext();
   const local = useLocalStorage("cart");
   const { data: carts, quantity } = useSelector(state => state.cart);
   useEffect(() => {
      local.setItem(carts);
   }, [carts]);

   return (
      <header className="border-b border-[#cacaca] bg-white">
         <nav
            className={cn("p-4", "max-w-6xl mx-auto", "flex justify-between")}
         >
            <NavLink to="/?c=all" className="text-lg font-semibold">
               Micro
               <span className="text-indigo-900">merce</span>
            </NavLink>
            <div>
               {navbarItems.map(item => {
                  return (
                     <div
                        key={item.name}
                        className="cursor-pointer relative"
                        onClick={() => setOpen(true)}
                     >
                        {<Icon Comp={item.icon} badge label={quantity} />}
                     </div>
                  );
               })}
            </div>
         </nav>
      </header>
   );
};

function Icon({ Comp, badge, label }) {
   return (
      <>
         <Comp
            className={cn(
               "text-xl",
               "text-indigo-950 hover:text-indigo-950/80",
               "transition-colors duration-300 ease-in-out"
            )}
         />
         {badge && label ? (
            <div
               className={cn(
                  "absolute",
                  "-top-2 -right-2",
                  "min-w-4 h-4 p-1",
                  "flex justify-center items-center",
                  "rounded bg-red-600"
               )}
            >
               <p className="text-white text-[10px] font-medium">{label}</p>
            </div>
         ) : null}
      </>
   );
}

export default Navbar;
