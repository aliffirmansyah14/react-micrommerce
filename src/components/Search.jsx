import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "../libs/libs";

const Search = ({ className }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const inputRef = useRef(null);
   const c = searchParams.get("c") || "all";
   const handleChange = useDebouncedCallback(() => {
      if (inputRef.current.value === "") return setSearchParams({ c });
      setSearchParams({ c, q: inputRef.current.value });
   }, 1000);
   return (
      <div className="">
         <input
            type="text"
            ref={inputRef}
            className={cn("px-1 py-1 text-sm bg-white rounded", className)}
            placeholder="search..."
            onChange={handleChange}
         />
      </div>
   );
};

export default Search;
