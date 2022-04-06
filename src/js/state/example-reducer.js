export const exampleReducer = (state, action) => {
    // console.log({ ...action });
    switch (action.type) {
        case "INCREMENT": {
            return { ...state, value: state.value + 1 };
        }
        case "DECREMENT": {
            return { ...state, value: state.value - 1 };
        }
        case "INCREMENT_BY_N": {
            return { ...state, value: state.value + action.value };
        }
        default: {
            throw new Error(`Unsupported action type: ${action.type}`);
        }
    }
};
