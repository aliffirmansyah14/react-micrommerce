import { categorys } from "../data/produts";
import Tab from "../components/Tab";
import Cart from "../components/Cart";
import useModalCartContext from "../context/useModalCartContext";
import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import Header from "../components/Header";
import { useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
   const { open } = useModalCartContext();
   const [searchParams, setSearchParams] = useSearchParams();
   const category = searchParams.get("c");
   const query = searchParams.get("q") || "";

   useEffect(() => {
      if (category === null) {
         setSearchParams({ c: "all" });
      }
   }, []);

   const handleCategory = c => {
      if (query !== "") {
         setSearchParams({ c, q: query });
      } else {
         setSearchParams({ c });
      }
   };

   return (
      <>
         <Header> Shop Now </Header>
         <div className="space-y-3">
            <Search className={"block md:hidden w-full"} />
            <div className="flex justify-between">
               <div className="flex gap-1 overflow-scroll sm:overflow-hidden py-2 sm:py-0">
                  {categorys.map((item, i) => {
                     return (
                        <Tab
                           item={item}
                           category={category}
                           key={i}
                           onClick={() => handleCategory(item.name)}
                        />
                     );
                  })}
               </div>
               <Search className={"hidden md:block"} />
            </div>
            <Product category={category} search={query} />
            {/* <Suspense fallback={<ProductSkeleteon length={10} />}>
               <Product category={category} search={query} />
            </Suspense> */}
         </div>
         {open && <Cart />}
      </>
   );
};

export default Home;
