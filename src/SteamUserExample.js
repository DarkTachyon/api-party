import React, { Component } from 'react'

import './SteamUser.css'

class SteamUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            response: {},
            key: 'Your Key'
        }

        this.fetchUserData()
    }

    fetchUserData = () => {
        fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${this.state.key}&steamids=${this.props.match.id}`)
            .then(response => response.json())
            .then(response => this.setState({ response }), console.log(this.state.response))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchUserData()
        }
    }

    render() {
        // const response = this.state.response.response.players
        return (
            <div className="steam-user">
                <img src="./favicon.ico" alt="steam user avatar"/>
                <h2>response.personaname}</h2>
                <a href="#" target="_">Link to response.personaname} s profile</a>
            </div>
        )
    }
}

export default SteamUser
