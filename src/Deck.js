import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Deck.css'
import DeckCard from './DeckCard'

class Deck extends Component {
    constructor() {
        super()

        this.state = {
            deck: {
                success: false,
                deck_id: '',
                shuffled: false,
                remaining: 0
            },
        }

        this.getDeck()
    }

    getDeck = () => {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            .then(response => response.json())
            .then(deck => this.setState({ deck }))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/deck/${this.state.deck.deck_id}`)
        this.setState({ deck: {
            success: false,
            deck_id: '',
            shuffled: false,
            remaining: 0
        } })
    }

    render() {
        return(
            <div className="deck">
                <h2>Pick a card</h2>
                <button
                    onClick={this.getDeck}
                >
                    Shuffle
                </button>
                <button
                    onClick={this.handleSubmit}
                >
                    Draw Card
                </button>
                <Route path="/deck/:deck_id" component={DeckCard} />
            </div>
        )
    }
}

export default Deck
