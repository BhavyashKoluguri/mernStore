const productReducer = (state, action) => {
    
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "MY_API_DATA":
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
        filter_products: [...action.payload]
        
      };
      case "D_IMAGE":
      return {
        ...state,
        dImage: action.payload
        
      };
      case "D_INFO":
      return {
        ...state,
        dInfo: action.payload
        
      };
      case "D_PRICE":
      return {
        ...state,
        dPrice: action.payload
        
      };
      case "GET_SORT_VALUE":
        let userSortValue = document.getElementById("cars");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        console.log(sort_value);
        return {
          ...state,
          sorting_value: sort_value,
        }
    default:
      return state;
  }
};


export default productReducer;
