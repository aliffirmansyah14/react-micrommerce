import { createContext, useContext, useState } from "react";

const ContextModal = createContext();

export const ModalProvider = ({ children }) => {
   const [open, setOpen] = useState(false);
   return (
      <ContextModal.Provider value={{ open, setOpen }}>
         {children}
      </ContextModal.Provider>
   );
};
const useModalCartContext = () => {
   const context = useContext(ContextModal);

   if (context === undefined) {
      throw new Error("u must be used within a ModalProvider");
   }
   return context;
};

export default useModalCartContext;
