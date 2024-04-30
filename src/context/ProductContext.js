import axios from "axios";
import { useContext, createContext, useEffect, useReducer } from "react";
import productReducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://www.course-api.com/react-store-products";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  filter_products: [],
  sorting_value: "lowest"
};

const AppProvider = ({ children }) => {
  let data = null;
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const resp = await axios.get(url);
      data = resp.data;
      dispatch({ type: "MY_API_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const sorting = () =>{
    dispatch({type:"GET_SORT_VALUE"});
  }

  useEffect(() => {
    getProducts(API);
  }, [API]);

  return (
    <AppContext.Provider value={{ ...state, sorting }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
