//import akcji z pliku action.j
import { ADD_COMMENT } from './action';
import { EDIT_COMMENT} from './action';
import { REMOVE_COMMENT} from './action';
import { THUMB_UP_COMMENT} from './action';
import { THUMB_DOWN_COMMENT} from './action';

//początkowy stan aplikacji. Są dwie niezależne części comments i users.
const initialState = {
    comments: [],
    users =[]
};

/*function reducer(state, action) {
    if (!state){
        return initialState;
    }
    return state;
}*/

//obsługa pierwszej akcji dodającej komentarze
function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state.comments];

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.text = action.id
                }
                return comment;
            });
            
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.handup = comment.handup + 1;
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.handdown = comment.handdown - 1;
                }
                return comment;
            });

        default:
            return state;
    }
}

export default comments;

