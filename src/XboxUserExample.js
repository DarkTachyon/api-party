import React, { Component } from 'react'

import './XboxUser.css'

class XboxUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tag: {},
            unirest: require('unirest')
        }

        this.fetchUserData()
    }

    fetchUserData = () => {
        this.state.unirest.get(`https://xboxapi.p.mashape.com/json/profile/${this.props.match.gamertag}`)
            .header("X-Mashape-Key", "Your key here")
            .header("Accept", "application/json")
            .end((result) => {
                this.setState({ tag: result })
            })
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchUserData()
        }
    }

    render() {
        return(
            <div className="xbox-user">
                <h1>{this.state.tag.body}</h1>
            </div>
        )
    }
}

export default XboxUser
