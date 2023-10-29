const FilterReducer=(state,action)=>{
    var {allProducts}=state;
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
            let newData;
            let tempData=[...action.payload];
            if(state.sortingValue==="feature"){
                newData=tempData;
            }
            if(state.sortingValue==="a-z"){
                newData=tempData.sort((a,b)=>{
                 return   a.name.localeCompare(b.name);
                });
            }
            if(state.sortingValue==="z-a"){
                newData=tempData.sort((a,b)=>{
                 return   b.name.localeCompare(a.name);
                });
            }
            if(state.sortingValue==="lowest"){
                newData=tempData.sort((a,b)=>{
                 return   a.price-b.price;
                });
            }
            if(state.sortingValue==="highest"){
                newData=tempData.sort((a,b)=>{
                    return   b.price-a.price;
                   });
            }
            return{
                ...state,
                filterProducts:newData,
            }
            
            case "FILTER_VALUE" :
                const {name,value}=action.payload;
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value,
                    }
                
                }

                case "FILTER_PROD" :
                    let newP;
                    let tempFilterProduct=[...allProducts];
                    const {text}=state.filters;
                    if (text){
                        newP=tempFilterProduct.filter((curEle)=>{
                            return curEle.name.toLowerCase().includes(text); 
                        })
                        
                    }
                    
                    return{
                        ...state,
                        filterProducts:newP,
                    }

                 case "FILTER_CATEGORY_VALUE" :
                    const valueCate=action.payload
                return{
                    ...state,
                    category:valueCate,
                }
                case "FILTER_CATEGORY" :
                    let filCate;
                    let tempFilterCate=[...allProducts];
                    const {category}=state;
                      if(category){
                        filCate=tempFilterCate.filter((curEle)=>{
                            return curEle.category === category; 
                        })
                    }
                    return{
                        ...state,
                        filterProducts:filCate,
                    }
        
        default:
        return state;
 }
}

export default FilterReducer;