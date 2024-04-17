import { useEffect, useState } from "react";
import { axiosInstace } from "../libs/libs";

export const useFetchProducts = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const fetchProducts = async () => {
      try {
         setIsLoading(true);
         await new Promise(resolve => setTimeout(resolve, 3000));
         const response = await axiosInstace.get("/products");
         if (response.status === 200) {
            setProducts(response.data);
            setIsLoading(false);
         }
      } catch (error) {
         console.log(error.message);
      }
   };
   useEffect(() => {
      fetchProducts();
      return () => setIsLoading(false);
   }, []);

   return {
      products,
      isLoading,
   };
};
