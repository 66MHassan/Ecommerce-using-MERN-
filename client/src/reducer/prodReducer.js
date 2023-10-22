const prodReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true

            }
        case "MY_DATA":
            const featureData = action.payload.filter((cuElmt) => {
                return cuElmt.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                productData: action.payload,
                featureProducts: featureData
            }
        case "API_ERROR":
            return {
                isError: true
            }

            case "SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,

            }
            case "SINGLE_PRODUCT":
                return{
                    ...state,
                    isSingleLoading:false,
                    singleProduct:action.payload,
                }
                


        default:
             return state;


    }

}

export default prodReducer;