export const ADD_CLIP = 'ADD_CLIP';
export const DELETE_CLIP = 'DELETE_CLIP';


export const AddClip = (clip:any) => {
    return {
        type: ADD_CLIP,
        clip: clip
    }
}

export const DeleteClip = (clip: any) => {
    return {
        type: DELETE_CLIP,
        clip: clip
    }
}