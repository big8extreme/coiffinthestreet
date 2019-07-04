import {
    FETCH_PARTICIPANTS, ERROR_ON_PARTICIPANTS,
    FETCH_PARTICIPANT, ERROR_ON_PARTICIPANT,
    CREATE_PARTICIPANT, ERROR_ON_CREATE_PARTICIPANT,

} from "./../types/participant";

const defaultStates = {
    participants: [],
};
export default function (state = defaultStates, action) {
    switch (action.type) {
        case FETCH_PARTICIPANTS:
            return { ...state, participants: [...action.payload] };
        case ERROR_ON_PARTICIPANTS:
            return state;
        case FETCH_PARTICIPANT:
            return { ...state };
        case ERROR_ON_PARTICIPANT:
            return state;
        case CREATE_PARTICIPANT:
            return { ...state};
        case ERROR_ON_CREATE_PARTICIPANT:
            return state;
        default:
            return state;
    }
}