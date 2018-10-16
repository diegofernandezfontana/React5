import { connect } from 'react-redux';
import Station from '../components/Station';
import {start} from '../action-creators/player'

const mapDispatchToProps = function (dispatch, ownProps ) {
    return {
        start: function(song, list){
            dispatch(start(song,list));
        }
    };
}

const mapStateToProps = function (state, ownProps) {    
    const genero = ownProps.match.params.genre;
    const cancionesFiltradas = state.songs.filter(song => song.genre == genero);
    console.log(state);
    
    return {
        genero,
        cancionesFiltradas,
        currentSong: state.player.currentSong
    };
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station); // devuelve un componente conectado al store.
export default StationContainer;
