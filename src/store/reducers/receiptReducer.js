const initialState = {
    receipt: [],
  };
  
  const receiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_RECEIPT": {
			return {
                ...state, 
                receipt: action.payload
            };
		}
      default:
        return state;
    }
  };
  export default receiptReducer;
  