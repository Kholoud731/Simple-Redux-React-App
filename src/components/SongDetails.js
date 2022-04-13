import React from "react";
import { connect } from "react-redux";

const SongDeatils = (props) => {
    return ( 
        <>
        {props.song && <div>
            <h3>Details For</h3>
            <p>
            Title: {props.song.title}
            <br/>
            Duration: {props.song.duration}
            </p>
            
            </div>}
        </>
        
     );
}

const mapStateToProps = (state)=>{
    return {song: state.selectedSong}
}
 
export default connect(mapStateToProps)(SongDeatils);