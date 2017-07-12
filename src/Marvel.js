import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Marvel.css'
import MarvelChar from './MarvelChar'

class Marvel extends Component {
    constructor() {
        super()

        this.state = {
            nameStartsWith: '',
        }

        //this.getHash()
    }

    handleChange = (ev) => {
        this.setState({ nameStartsWith: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/marvel/${this.state.nameStartsWith}`)
        this.setState({ nameStartsWith: '' })
    }

    render() {
        return(
            <div className="marvel">
                <img
                    className="marvel-logo"
                    src="https://i.annihil.us/u/prod/misc/marvel.svg"
                    alt="marvel logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Character's name starts with"
                            value={this.state.nameStartsWith}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up Marvel Character
                        </button>
                    </div>
                </form>
                <Route path="/marvel/:nameStartsWith" component={MarvelChar} />
                <Route exact path="/marvel" render={() => <h3>Please enter a character to search on Marvel.</h3>} />
            </div>
        )
    }
}

export default Marvel
