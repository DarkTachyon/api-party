import React, { Component } from 'react'

import './SteamUser.css'

class SteamUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            results: {
                response: {
                    players: [
                        {
                            steamid: '',
                            communityvisibilitystate: '',
                            profilestate: '',
                            personaname: '',
                            lastlogoff: '',
                            profileurl: '',
                            avatar: '',
                            avatarmedium: '',
                            avatarfull: '',
                            personastate: '',
                            realname: '',
                            primaryclanid: '',
                            timecreated: '',
                            personastateflags: '',
                            loccountrycode: '',
                            locstatecode: '',
                            loccityid: '',
                        },
                    ],
                },
            },
            results2: {
                response: {
                    game_count: 0,
                    games: [
                        {
                            "appid": 0,
                            "playtime_forever": 0
                        },
                        {
                            "appid": 0,
                            "playtime_forever": 0
                        },
                    ],
                },
            },
        }
        key: 'Your Steam Api Key'

        this.fetchUserData()
    }

    fetchUserData = () => {
        fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${this.state.key}&steamids=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(results => this.setState({ results }))
        fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${this.state.key}&steamid=${this.props.match.params.id}&format=json`)
            .then(response => response.json())
            .then(results2 => this.setState({ results2 }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchUserData()
        }
    }

    render() {
        const responseTemp = this.state.results.response.players[0]
        const gamesTemp = this.state.results2.response
        return (
            <div className="steam-user">
                <img src={responseTemp.avatarfull} alt="steam user avatar"/>
                <h2>{responseTemp.personaname}</h2>
                <h3>Games Count: {gamesTemp.games_count}</h3>
                <h3>Games:</h3>
                <ul>
                    {
                        gamesTemp.games.slice(0, 20).map((game) => {
                            return (
                                <div>
                                    <p>Game ID: {game.appid}</p>
                                    <p>Play Time: {game.playtime_forever}</p>
                                    <br/>
                                </div>
                            )
                        })
                    }
                </ul>
                <a href={responseTemp.profileurl} target="_">Link to {responseTemp.personaname} s profile</a>
            </div>
        )
    }
}

export default SteamUser
