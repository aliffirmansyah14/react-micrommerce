import { cn } from "../libs/libs";

const Tab = ({ item, category, ...props }) => {
   return (
      <button
         className={cn(
            "px-3 py-1",
            "bg-gray-300 hover:bg-gray-300/70 rounded-full",
            "transition-all duration-300",
            "cursor-pointer",
            category == item.name ? "border border-black" : " "
         )}
         {...props}
      >
         <p className="text-[12px] md:text-sm font-medium capitalize text-nowrap">
            {item.name || "Not found"}
         </p>
      </button>
   );
};

export default Tab;
