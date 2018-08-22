import * as actionTypes from '../actions/actions';

const initialState={
    open:false
};

const reducer=(state=initialState,action)=>{
    switch (actionTypes) {

        case actionTypes.DRAWER_OPEN:
            return{
                ...state,
                open:true
            };

        case actionTypes.DRAWER_CLOSE:
            return{
                ...state,
                open:false
            };

        default:
            return state;
    }
}

export default reducer;