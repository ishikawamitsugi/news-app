import {ADD_CLIP, DELETE_CLIP} from '../actions/user';

const initialState: any = {
    clips: []
}
const userReducer = (prevState= initialState, action: any) => {
    switch (action.type) {
        case ADD_CLIP:
            return {
                ...prevState,
                clips: [...prevState.clips, action.clip]
            }
        case DELETE_CLIP:
            return {
                    ...prevState,
                    clips: [...prevState.clips.filter((clip:any)=> clip.url !== action.clip.url)]
            }
        default:
            return prevState;

    }
}
export default userReducer;