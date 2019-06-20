import {

    CREATE_PARTICIPANT,
    ERROR_ON_CREATE_PARTICIPANT,

} from "./../types/participant";

const defaultStates = {
    participants: [],
};
export default function (state = defaultStates, action) {
    switch (action.type) {
        case CREATE_PARTICIPANT:
            return { ...state };
        case ERROR_ON_CREATE_PARTICIPANT:
            return state;
        default:
            return state;
    }
}