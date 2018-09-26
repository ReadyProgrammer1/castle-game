import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './movement'


function Player(props) {
    //alert('props.spriteLocation ' + props.spriteLocation)
    //check other props here maybe setup the walkSpriteBlue = 'true' 'false'
    return (
        <div id= 'thePlayer'
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: props.backgroundImage,
                backgroundPosition: props.spriteLocation,
                width: '40px',
                height: '40px'
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,    
    }
}

export default connect(mapStateToProps)(handleMovement(Player))
