import { combineReducers } from "redux"

const songsReducer=()=>{
    return[
        {title: 'No Scrubs', duration:'4:05'},
        {title: 'Macarena', duration:'3:05'},
        {title: 'All Star', duration:'2:05'},
        {title: 'I want it that way', duration:'1:05'}
    ]
}

const selectedSongReducer =(state = null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return state
}

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})