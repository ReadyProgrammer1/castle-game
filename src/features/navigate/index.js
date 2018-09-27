import React from 'react'
import { connect } from 'react-redux'
import Icon from 'react-icons-kit'
import {arrowUp} from 'react-icons-kit/fa/arrowUp'
import {arrowDown} from 'react-icons-kit/fa/arrowDown'
import {arrowRight} from 'react-icons-kit/fa/arrowRight'
import {arrowLeft} from 'react-icons-kit/fa/arrowLeft'
import handleClick from './movement'

function Navigate(props) {
    
    return (
        <div id = {props.name} style={{
            position: 'absolute', top: '84%',}}>
            <table><tbody>
            <tr><td></td><td><button id='north' style={{color: 'blue'}} onClick={() => {handleClick('north')}}><Icon icon={arrowUp} size={18}/></button></td><td></td></tr>
            <tr><td><button id='west' style={{color: 'blue'}} onClick={(e) => {handleClick('west')}}><Icon icon={arrowLeft} size={18}/></button></td><td></td><td><button id='east' style={{color: 'blue'}} onClick={(e) => {handleClick('east')}}><Icon icon={arrowRight} size={18}/></button></td></tr>
            <tr><td></td><td><button id='south' style={{color: 'blue'}} onClick={(e) => {handleClick('south')}}><Icon icon={arrowDown} size={18}/></button></td><td></td></tr>
            </tbody></table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.navigate,    
    }
}

export default connect(mapStateToProps)(handleClick(Navigate))
