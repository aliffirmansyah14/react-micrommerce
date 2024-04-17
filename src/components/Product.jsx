import { useMemo } from "react";
import { useFetchProducts } from "../features/useFetchProducts";
import CardProduct from "./CardProduct";
import { ProductSkeleteon } from "./Skeleton";

const Product = ({ category, search }) => {
   const { products, isLoading } = useFetchProducts();
   // const filteredDatas = useMemo(() => {
   //    const data =
   //       category === "all"
   //          ? products
   //          : products.filter(item => item.category === category);
   //    return data.filter(item => item.title.includes(search));
   // }, [category, search]);
   const filteredDatas = () => {
      const data =
         category === "all"
            ? products
            : products.filter(item => item.category === category);
      return data.filter(item => item.title.includes(search)).splice(0, 10);
   };

   return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
         {isLoading ? (
            <ProductSkeleteon length={10} />
         ) : (
            filteredDatas().map((data, i) => {
               return <CardProduct product={data} key={i} />;
            })
         )}
      </div>
   );
};

export default Product;
