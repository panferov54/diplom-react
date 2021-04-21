const initialState = {
    items:[],
    isLoaded:false
}
const wheels = (state = initialState, action)=>{
    switch (action.type){
        case 'SET_WHEELS':
            return{
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'SET_LOADED':
            return{
                ...state,
                isLoaded: action.payload,
            }

        default:
            return state;
    }




}

export default wheels;