const FilterReducer=(state,action)=>{
switch (action.type){
    case "FILTER_PRODUCTS":
        return {
            ...state,
        filterProducts:[...action.payload],
        allProducts:[...action.payload]
        
    }
    case "GET_VALUE":
        return{
            ...state,
            sortingValue:action.payload,
        }
        case "SORTING_PRODUCTS":
            let newSortingData;
            const{filterProducts}=state;
            const tempProducts=[...filterProducts];
            if(state.sortValue==="a-z"){
               return newSortingData=tempProducts.sort((a,b)=>a.name.localeCompare(b.name))
            }
        return{
            ...state,
            filterProducts:newSortingData
        }
    default:
        return state;
}
}

export default FilterReducer;