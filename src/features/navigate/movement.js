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
import Navigate from '../navigate'

export default function handleClick(route) {
        
    
    
    //function handleClick(route) {
        switch(route) {
            case 'north':
                return attemptMove('NORTH')
            case 'south':
                return attemptMove('SOUTH')
            case 'east':
                return attemptMove('EAST')
            case 'west':
                return attemptMove('WEST')
            default:
                console.log(route)
        }
    //}

    

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
        //return nextTile < 27
        return (nextTile != 17 && nextTile != 18 && nextTile != 19 && nextTile != 9 && nextTile != 10 && nextTile != 32 && nextTile != 33) 
    }

    function playSound() {
        //var audio = new Audio({squish})
        //audio.loop = false
        //audio.volume = 0.99
        //audio.play()
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

                if (window.document.getElementById('treasure')) {
                    window.document.getElementById('treasure').style.display = 'initial'
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
        } else if(myNextTile==37)  {
            //direction = 'SOUTH'
            ReactDOM.render(<div 
                id='treasure' style={{width: '100px', color: 'white', display: 'flex'}}>
                <p style={{margin: '-25px'}}><b>Once upon a time, lived a wise Queen...</b></p>
                </div>,window.document.getElementById('thePlayer'))

                if (window.document.getElementById('treasure')) {
                    window.document.getElementById('treasure').style.display = 'initial'
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
        } else if(myNextTile==27) {
            if (window.document.getElementById('treasure')) {
                window.document.getElementById('treasure').style.display = 'none'
            }
            direction = 'SOUTH'
            ReactDOM.render(<div 
                id='blue' style={{width: '100px', color: 'white', display: 'flex'}}>
                <p style={{margin: '-25px'}}><b>Blue Armor!!!</b></p>
                </div>,window.document.getElementById('thePlayer'))

                if (window.document.getElementById('blue')) {
                    window.document.getElementById('blue').style.display = 'initial'
                }
                
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

                if (window.document.getElementById('treasure')) {
                    window.document.getElementById('treasure').style.display = 'initial'
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
    
    return route
}