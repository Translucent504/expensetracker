

export default (state, action) => {
    switch(action.type){
        case "NEW_TRANSACTION":
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
                
            };
        default:
            return state;

    }
}
