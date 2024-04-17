export const ProductSkeleteon = ({ length }) => {
   const skeleton = [...new Array(length)].fill(0);
   return (
      <>
         {skeleton.map((_, i) => (
            <div
               key={i}
               className={
                  "animate-pulse px-3 py-4 bg-white group rounded-lg shadow cursor-pointer flex flex-col justify-between gap-y-2 overflow-hidden"
               }
            >
               <div className="bg-gray-300 aspect-square rounded"></div>
               <div className="space-y-3">
                  <div className="space-y-1">
                     <div className="w-1/3 h-3 bg-gray-300 rounded"></div>
                     <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                     <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-5 bg-gray-300 rounded"></div>
               </div>
            </div>
         ))}
      </>
   );
};
