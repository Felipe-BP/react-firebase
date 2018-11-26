import React, { Component, Fragment } from 'react'
import './habilidades.css'

class Habilidades extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {skills} = this.props
        return <Fragment>
                <div id="flex">
                    {skills.map(
                        (item, index) => {
                            return <p className="skill" key={index}>{item}</p>
                        }
                )}
                </div>
                </Fragment>
    }
}

export default Habilidades