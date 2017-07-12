import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Steam.css'
import SteamUser from './SteamUser'

class Steam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: ''
        }
    }

    handleChange = (ev) => {
        this.setState({ id: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/steam/${this.state.id}`)
        this.setState({ id: ''})
    }

    render() {
        return(
            <div className="steam">
                <img
                    className="steam-logo"
                    src="http://steamcommunity-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016"
                    alt="steam logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.id}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up steam user
                        </button>
                    </div>
                </form>
                <Route path="/steam/:id" component={SteamUser} />
                <Route exact path="/steam" render={() => <h3>Please enter a steam id to search.</h3>} />
            </div>
        )
    }
}

export default Steam
