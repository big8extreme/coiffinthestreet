import { FETCH_CONFIGS, FETCH_CONFIG, CREATE_CONFIG, UPDATE_CONFIG, DELETE_CONFIG } from '../types/config'

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

        default:
            return state
    }
}
