import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Xbox.css'
import XboxUser from './XboxUser'

class Xbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gamertag: ''
        }
    }

    handleChange = (ev) => {
        this.setState({ gamertag: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/xbox/${this.state.gamertag}`)
        this.setState({ gamertag: ''})
    }

    render () {
        return (
            <div className="xbox">
                <img
                    className="xbox-logo"
                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e"
                    alt="xbox logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.gamertag}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Lookup Xbox Gamertag
                        </button>
                    </div>
                </form>
                <Route path="/xbox/:gamertag" component={XboxUser} />
                <Route exact path="/xbox" render={() => <h3>Please enter a gamertag to search on Xbox.</h3>} />
            </div>
        )
    }
}

export default Xbox
