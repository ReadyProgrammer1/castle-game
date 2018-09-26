import React from 'react'
import ReactDOM from 'react-dom'
import store from '../../config/store'
import {Provider} from 'react-redux'
import { connect } from 'react-redux'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import Icon from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/fa/arrowUp'
import {arrowDown} from 'react-icons-kit/fa/arrowDown'
import {arrowRight} from 'react-icons-kit/fa/arrowRight'
import {arrowLeft} from 'react-icons-kit/fa/arrowLeft'
import walkSpriteBlue from '../player/player_blue-armor.png'
import walkSprite from '../player/player_walk.png'
import World from '../world'
import Player from '../player'
import Map from '../map'
import handleClick from './movement'

function Navigate(props) {
    
    return (
        <div style={{
            position: 'absolute', top: '84%',}}>
            <table>
            <tr><td></td><td><button id='north' style={{color: 'blue'}} onClick={(e) => {handleClick('north')}}><Icon icon={arrowUp} size={18}/></button></td><td></td></tr>
            <tr><td><button id='west' style={{color: 'blue'}} onClick={(e) => {handleClick('west')}}><Icon icon={arrowLeft} size={18}/></button></td><td></td><td><button id='east' style={{color: 'blue'}} onClick={(e) => {handleClick('east')}}><Icon icon={arrowRight} size={18}/></button></td></tr>
            <tr><td></td><td><button id='south' style={{color: 'blue'}} onClick={(e) => {handleClick('south')}}><Icon icon={arrowDown} size={18}/></button></td><td></td></tr>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.navigate,    
    }
}

export default connect(mapStateToProps)(Navigate)
