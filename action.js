import uuid from uuid;

//definicja typów akcji i ich eksport
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//definicja kreatorów akcji
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text: text        
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id        
    }
}

function thumbUpComment(id, handup) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        handup: handup++
    }
}

function thumbDownComment(id, handdown) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        handdown: handdown--
    }
}