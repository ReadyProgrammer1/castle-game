import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

const grass = require('./images/grass.png')
const tree = require('./images/tree.png')
const book = require('./images/book.png')
const castleFloor = require('./images/CastleFloor.png')
const wall = require('./images/castle-tower-wall.png')
const bridge = require('./images/bridge.png')
const river1 = require('./images/river1.png')
const river2 = require('./images/river2.png')
const throne = require('./images/throne.png')
const door = require('./images/door.png')
const knight1 = require('./images/knight-1.png')
const knight2 = require('./images/knight-2.png')
const knight3 = require('./images/knight-3.png')
const knight4 = require('./images/knight-4.png')
const castleTopLeft = require('./images/castle-large_01.png')
const castleTopCenter = require('./images/castle-large_02.png')
const castleTopRight = require('./images/castle-large_03.png')
const castleBottomLeft = require('./images/castle-large_04.png')
const castleBottomCenter = require('./images/castle-large_05.png')
const castleBottomRight = require('./images/castle-large_06.png')
const flowersLeft = require('./images/FlowersLeft.png')
const flowersRight = require('./images/FlowersRight.png')
const pondLeft = require('./images/PondLeft.png')
const pondCenter = require('./images/PondCenter.png')
const pondRight = require('./images/PondRight.png')
const gateCenter = require('./images/GateCenter.png')
const gateLeft = require('./images/GateLeft.png')
const gateRight = require('./images/GateRight.png')
const rock = require('./images/rock.png')
const rockSnow = require('./images/rock-snow.png')
const treeSnow = require('./images/tree-snow.png')
const blueArmor = require('./images/blue-armor.png')
const iceLeft = require('./images/ice-left.png')
const iceRight = require('./images/ice-right.png')
const chest = require('./images/chest.png')




function getTileSprite(type) {
    switch(type) {
        case 0: 
            return grass
        case 1:
            return 'mixed'
        case 3:
            return tree
        case 4:
            return chest
        case 5:
            return gateCenter
        case 6:
            return pondLeft
        case 7: 
            return pondCenter
        case 8:
            return pondRight
        case 9:
            return gateLeft
        case 10:
            return gateRight
        case 11:
            return castleTopLeft
        case 12: 
            return castleTopCenter
        case 13:
            return castleTopRight
        case 14:
            return castleBottomLeft
        case 15:
            return castleBottomCenter
        case 16:
            return castleBottomRight
        case 17:
            return rock
        case 18: 
            return tree
        case 19:
            return rockSnow
        case 20:
            return treeSnow
        case 21:
            return iceLeft
        case 22:
            return iceRight
        case 23:
            return knight1
        case 24:
            return knight2
        case 25:
            return knight3
        case 26:
            return knight4
        case 27:
            return blueArmor
        case 28:
            return castleFloor
        case 29:
            return throne
        case 30:
            return door
        case 31:
            return wall
        case 32:
            return river1
        case 33:
            return river2
        case 34:
            return bridge
        case 35:
            return flowersLeft
        case 36: 
            return flowersRight
        case 37:
            return book
    }
}

//alert('castle world?')

function MapTile(props) {
    return <div 
    style={{
        display: 'inline-flex',
        backgroundColor: '#42b842',
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        //backgroundImage: `url('${getTileSprite(props.tile)}')`,
    }}>
    <img src={getTileSprite(props.tile)}/>
    </div>
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
                
                props.tiles.map( row => <MapRow tiles={row} />)
                
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        castle: state.map.castle,
        //images: state.map.images,
        ...state.map
    }
}

export default connect(mapStateToProps)(Map)