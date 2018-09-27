import React from 'react'
import ReactDOM from 'react-dom'
import Player from '../player'
import Map from '../map'
import Navigate from '../navigate'
import World from '../world'
import {Provider} from 'react-redux'
import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import squish from './squish.mp3'
import walkSpriteBlue from './player_blue-armor.png'
import walkSprite from './player_walk.png'

export default function handleMovement(player) {

    var myNextTile = []

    function getNewPosition(oldPos, direction) {
        
        switch (direction) {
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
        }
    }

    function getSpriteLocation(direction, walkIndex) {
        switch(direction) {
            case 'SOUTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
            case 'EAST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
            case 'WEST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
            case 'NORTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
        }
    }

    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex
        return walkIndex >= 5 ? 0 : walkIndex + 1
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
               (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles

        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        
        const nextTile = tiles[y][x]
        myNextTile = nextTile
        //alert('mynexttile ' + nextTile)

        return (nextTile != 17 && nextTile != 18 && nextTile != 19 && nextTile != 9 && nextTile != 10 && nextTile != 32 && nextTile != 33) 
    }

    function playSound () {
        const audio = new Audio({squish})
        audio.play()
    }


    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex()
        
        if(myNextTile==15) {
            direction = 'SOUTH'
            store.dispatch({
                type: 'WORLD_RENDER',
                payload: {
                    castleWorld: 'true',
                    direction: direction
                }
            })
            
            ReactDOM.render(
            <Provider store={store}>
                <World><Map /><Player /><Navigate /></World>
            </Provider> , document.getElementById('gameWorld'))
        }

        if(myNextTile==30) {
            newPos = [320,80]
            direction = 'SOUTH'
            store.dispatch({
                type: 'WORLD_RENDER',
                payload: {
                    castleWorld: 'false',
                    position: newPos,
                    direction: direction
                }
            })
            
            ReactDOM.render(
            <Provider store={store}>
                <World><Map /><Player /><Navigate /></World>
            </Provider> , document.getElementById('gameWorld'))
        }




        if(myNextTile==4) {
            direction = 'SOUTH'
            ReactDOM.render(<div 
                id='treasure' style={{width: '100px', color: 'white', display: 'flex'}}>
                <p style={{margin: '-25px'}}><b>Treasure chest!!!</b></p>
                </div>,window.document.getElementById('thePlayer'))
                window.document.getElementById('treasure').style.display = 'initial'

            if ( store.getState().player.blueArmor == 'true') {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSpriteBlue}')`,
                        blueArmor: 'true',
                    }
                })
            } else {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSprite}')`,
                        blueArmor: 'false',
                    }
                })
            }
        } else if(myNextTile==37)  {
            //direction = 'SOUTH'
            ReactDOM.render(<div 
                id='treasure' style={{width: '100px', color: 'white', display: 'flex'}}>
                <p style={{margin: '-25px'}}><b>Once upon a time, lived a wise Queen...</b></p>
                </div>,window.document.getElementById('thePlayer'))
                window.document.getElementById('treasure').style.display = 'initial'

            if ( store.getState().player.blueArmor == 'true') {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSpriteBlue}')`,
                        blueArmor: 'true',
                    }
                })
            } else {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSprite}')`,
                        blueArmor: 'false',
                    }
                })
            }
        } else if(myNextTile==27) {
            if (window.document.getElementById('treasure')) {
                window.document.getElementById('treasure').style.display = 'none'
            }
            direction = 'SOUTH'
            ReactDOM.render(<div 
                id='blue' style={{width: '100px', color: 'white', display: 'flex'}}>
                <p style={{margin: '-25px'}}><b>Blue Armor!!!</b></p>
                </div>,window.document.getElementById('thePlayer'))
                window.document.getElementById('blue').style.display = 'initial'
            store.dispatch({
                type: 'MOVE_PLAYER',
                payload: {
                    position: newPos,
                    direction: direction,
                    walkIndex,
                    spriteLocation: getSpriteLocation(direction, walkIndex),
                    backgroundImage: `url('${walkSpriteBlue}')`,
                    blueArmor: 'true',
                }
            })
            //alert('bluearmor ' + store.getState().player.blueArmor)
        } else if (myNextTile==7) {
            direction = 'SOUTH'
            ReactDOM.render(<div 
                id='treasure' style={{width: '100px', color: 'white', display: 'flex'}}>
                <p style={{margin: '-25px'}}><b>Goin' fishin'!!!</b></p>
                </div>,window.document.getElementById('thePlayer'))
                window.document.getElementById('treasure').style.display = 'initial'

            if ( store.getState().player.blueArmor == 'true') {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSpriteBlue}')`,
                        blueArmor: 'true',
                    }
                })
            } else {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSprite}')`,
                        blueArmor: 'false',
                    }
                })
            }
        }
        else {
            if (window.document.getElementById('treasure')) {
                window.document.getElementById('treasure').style.display = 'none'
            }
            if (window.document.getElementById('blue')) {
                window.document.getElementById('blue').style.display = 'none'
            }
            if ( store.getState().player.blueArmor == 'true') {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSpriteBlue}')`,
                        blueArmor: 'true',
                    }
                })
            } else {
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        position: newPos,
                        direction: direction,
                        walkIndex,
                        spriteLocation: getSpriteLocation(direction, walkIndex),
                        backgroundImage: `url('${walkSprite}')`,
                        blueArmor: 'false',
                    }
                })
            }
        }
        playSound()
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
            dispatchMove(direction, newPos)
        
    }

    function handleKeyDown(e){
        e.preventDefault()

        switch(e.keyCode) {
            case 37:
                return attemptMove('WEST')
            case 38:
                return attemptMove('NORTH')
            case 39:
                return attemptMove('EAST')
            case 40:
                return attemptMove('SOUTH')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })


    return player
}