//import akcji z pliku action.j
import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './action';


//reducer comments
function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state.comments];

        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);


        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        text: action.text
                    }
                }
                return comment;
            });

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes + 1
                    }
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes - 1
                    }
                }
                return comment;
            });

        default:
            return state;
    }
}

// przykładowy stan aplikacji dla tego zadania
// {
//     comments: [
//         {
//             id: 12741danx1278,
//             text: 'Nowy komentarz',
//             votes: 0
//         },
//         {
//             id: 12741danb1278,
//             text: 'Stary komentarz',
//             votes: 42
//         }
//     ], 
//      users: [
//         {
//             id: '121jk6d89h2d',
//             firstName: 'Jan',
//             lastName: 'Nowak',
//             comments: ['12741danb1278'],
//         }, ...
//     ]
// }

export default comments;

