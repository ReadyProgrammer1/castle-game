import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'

function getTileSprite(type) {
    switch(type) {
        case 0: 
            return 'grass'
        case 1:
            return 'mixed'
        case 3:
            return 'tree'
        case 4:
            return 'chest'
        case 5:
            return 'gateCenter'
        case 6:
            return 'pondLeft'
        case 7: 
            return 'pondCenter'
        case 8:
            return 'pondRight'
        case 9:
            return 'gateLeft'
        case 10:
            return 'gateRight'
        case 11:
            return 'castleTopLeft'
        case 12: 
            return 'castleTopCenter'
        case 13:
            return 'castleTopRight'
        case 14:
            return 'castleBottomLeft'
        case 15:
            return 'castleBottomCenter'
        case 16:
            return 'castleBottomRight'
        case 17:
            return 'rock'
        case 18: 
            return 'tree'
        case 19:
            return 'rockSnow'
        case 20:
            return 'treeSnow'
        case 21:
            return 'iceLeft'
        case 22:
            return 'iceRight'
        case 23:
            return 'knight1'
        case 24:
            return 'knight2'
        case 25:
            return 'knight3'
        case 26:
            return 'knight4'
        case 27:
            return 'blueArmor'
        case 28:
            return 'castleFloor'
        case 29:
            return 'throne'
        case 30:
            return 'door'
        case 31:
            return 'wall'
        case 32:
            return 'river1'
        case 33:
            return 'river2'
        case 34:
            return 'bridge'
        case 35:
            return 'flowersLeft'
        case 36: 
            return 'flowersRight'
        case 37:
            return 'book'
    }
}

function MapTile(props) {
    return <div 
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
    }}
    />
}

function MapRow(props) {

    return <div 
        className="row"
        style={{
            height: SPRITE_SIZE,
        }}
        >
        {
            props.tiles.map( tile => <MapTile tile={tile} />)
        }
        </div>
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '560px',
                border: '4px solid white',
                border: '4px solid white',
                webkitBoxShadow: '0px 0px 0px 2px blue',
                mozBoxShadow: '0px 0px 0px 2px blue',
                boxShadow: '0px 0px 0px 2px blue',
                
            }}
        >
            {
                props.tiles.map( row => <MapRow tiles={row} /> )
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        castle: state.map.castle,
    }
}

export default connect(mapStateToProps)(Map)