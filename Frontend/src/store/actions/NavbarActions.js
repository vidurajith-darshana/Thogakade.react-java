import * as actionTypes from './actions';

export const openDrawer=()=>{
    console.log('open')
    return{
        type:actionTypes.DRAWER_OPEN
    }
}

export const closeDrawer=()=>{
    console.log('close')
    return{
        type:actionTypes.DRAWER_CLOSE
    }
}
