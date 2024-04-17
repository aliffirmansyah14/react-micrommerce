import axios from "axios";
import { useSelector } from "react-redux";

export const axiosInstace = axios.create({
   baseURL: "https://fakestoreapi.com",
});

export const cn = (...args) => {
   const className = args.join(" ");
   return className;
};

export const getTotal = () => {
   const { data: carts } = useSelector(state => state.cart);
   const total =
      carts.length > 0
         ? carts
              .map(product => product.price * product.quantity)
              .reduce((acc, item) => acc + item)
              .toFixed(2)
         : 0;
   return total;
};
