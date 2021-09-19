import * as actionTypes from './actionTypes';

const initState = {
    images: [],
    placeList: [],
    isAuth: false,
    token: null
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_IMAGES:
            return {
                ...state,
                images: [...action.payload]
            }


            // search images
        // case actionTypes.ADD_PLACE:
        //     return {
        //         ...state,
        //         placeList: state.placeList.concat(action.payload)
        //     }
        // case actionTypes.DELETE_PLACE:
        //     return {
        //         ...state,
        //         placeList: state.placeList.filter(place => place.key !== action.payload)
        //     }
        // case actionTypes.SET_PLACES:
        //     return {
        //         ...state,
        //         placeList: action.payload
        //     }
        // case actionTypes.AUTHENTICATE_USER:
        //     return {
        //         ...state,
        //         isAuth: true,
        //         token: action.payload
        //     }
        // case actionTypes.REMOVE_TOKEN:
        //     return {
        //         ...state,
        //         isAuth: false,
        //         token: null
        //     }
        default:
            return state;
    }
}