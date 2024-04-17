import { useEffect } from "react";
import { cn } from "../libs/libs";

const ModalWrapper = ({ children }) => {
   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "auto");
   }, []);

   return (
      <div
         className={cn(
            "fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 bg-black/70"
         )}
      >
         {children}
      </div>
   );
};

export default ModalWrapper;
