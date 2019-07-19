import { FETCH_CONFIGS,  CONTACT_ADMIN, ERROR_ON_CONTACT , FETCH_CONFIG, CREATE_CONFIG, UPDATE_CONFIG, DELETE_CONFIG } from '../types/config'

const initialState = {
    currentConfig: {
        cgu: "",
        charte: "",
        email: "",
        videoGuidelines: "",
        videoPath:"",
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_CONFIGS:
            return { ...state, currentConfig: payload };
            case CONTACT_ADMIN:
                return state;
              case ERROR_ON_CONTACT:
                return state;
        default:
            return state
    }
}
