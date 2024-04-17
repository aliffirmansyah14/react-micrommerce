const useLocalStorage = key => {
   const getItem = () => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : [];
   };
   const setItem = value => {
      try {
         localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
         console.log(error);
      }
   };
   return {
      getItem,
      setItem,
   };
};
export default useLocalStorage;
