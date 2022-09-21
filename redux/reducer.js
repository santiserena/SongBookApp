const initialstate = {
    mail: 'sarasa', // user for login
}

export default function rootReducer (state = initialstate, action) {
    switch(action.type){
        case 'GET_USER_EMAIL':
            return{
                ...state, 
                personajes: action.payload.results, //cambio
                nexturl: action.payload.info.next,  //cambio
                prevurl: action.payload.info.prev   //cambio
            };

        default: return state;
    }

}