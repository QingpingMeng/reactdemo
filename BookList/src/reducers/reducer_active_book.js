// State is not app state, only the state 
// this deducer is responsable for 
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
}