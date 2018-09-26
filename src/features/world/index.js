import React from 'react'
import Player from '../player'
import Map from '../map'

import Navigate from '../navigate'
import { connect } from 'react-redux'

import { tiles } from '../../data/maps/1'
import { tilesCastle } from '../../data/maps/2'
import store from '../../config/store'

import handleRender from './render'

function World(props) {
    
    if (store.getState().world.castleWorld == 'true') {
        store.dispatch({ type: 'ADD_TILES', payload: {
            tiles: tilesCastle,
        }})
    } else {
        store.dispatch({ type: 'ADD_TILES', payload: {
            tiles: tiles,
        }})
    }
//p
    return (
        <div id='gameWorld'
        style={{
                position: 'relative',
                width: '800px',
                height: '560px',
                margin: '20px auto',
            }}
        >
            <Map />
            <Player />
            <Navigate />
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        ...state.world,   
    }
}
export default connect(mapStateToProps)(handleRender(World))