import React, { Component } from 'react'

import './MarvelChar.css'
import { pubKey, timestamp, hash } from './MarvelReqs'

class MarvelChar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: {
                data: {
                    results: []
                },
            },
        }

        this.fetchCharData()
    }

    fetchCharData = () => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.props.match.params.nameStartsWith}&ts=${timestamp}&apikey=${pubKey}&hash=${hash}`)
            .then(response => response.json())
            .then(info => this.setState({ info }))

    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchCharData()
        }
    }

    capitalize = (incomingString) => {
        const letter = incomingString.substr(0, 1)
        const str = incomingString.toLowerCase()

        return letter.toUpperCase() + str.substr(1)
    }

    render() {
        const { info } = this.state
        // console.log(this.state.info.data.results)
        return (
            <div className="marvel-info">
                /*{
                    info.data.results.map((character) => {
                        const path = `${character.thumbnail.path}.${character.thumbnail.extension}`
                        const tempClassName = `character ${character.id}`;
                        return (<div className={tempClassName}>
                            <img src={path} alt={character.name} />
                            <h2>Name: {character.name}</h2>
                            <h3>Marvel Character ID: {character.id}</h3>
                            <h3>List of comics:</h3>
                            <ul>
                            {
                                character.comics.items.map((comic) => <li>{comic.name}</li>)
                            }
                            </ul>
                            <h3>URLs</h3>
                            <ul>
                            {
                                character.urls.map((item) => {
                                    <li>
                                        <a href={item.url} target="_">{ item.type })}</a>
                                    </li>
                                })
                            }
                            </ul>
                        </div>)
                    })
                }*/
                {info.attributionHTML}
            </div>
        )
    }
}

export default MarvelChar
