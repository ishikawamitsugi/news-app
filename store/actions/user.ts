export const ADD_CLIP = 'ADD_CLIP';
export const DELETE_CLIP = 'DELETE_CLIP';


export const addClip = ({clip}:any) => {
    return {
        type: ADD_CLIP,
        clip,
    }
}

export const deleteClip = ({clip}: any) => {
    return {
        type: DELETE_CLIP,
        clip,
    }
}