const initialstate = {
    mail: 'mmail@harcodeadoo.com', // user for login
    update: true
}

export default function rootReducer (state = initialstate, action) {
    switch(action.type){
        case 'USER_EMAIL':
            return{
                ...state, 
                mail: action.payload,
            };

            
            case 'UPDATE_NEW_SONGS':
                console.log('entreeee al redcerrr');
                return{
                    ...state, 
                    update: !state.update,
                };
            
            default: return state;
    }

}