import React, { Component } from 'react'

import './DeckCard.css'

class DeckCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            card: {
                success: false,
                cards: [
                    {
                        image: '',
                        images: {
                            png: '',
                            svg: ''
                        },
                        value: '',
                        suit: '',
                        code: ''
                    },
                ],
                deck_id:'',
                remaining: 0
            }
        }

        this.fetchData()
        console.log('runs');
    }

    fetchData = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${this.props.match.params.deck_id}/draw/?count=1`)
            .then(response => response.json())
            .then(card => this.setState({ card }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchData()
        }
    }

    render() {
        const cardTemp = this.state.card.cards[0]
        const cardAlt = `${cardTemp.value} of ${cardTemp.suit}`
        return (
            <div className="deck-user">
                <img src={cardTemp.image} alt={cardAlt}/>
                <h2>{cardTemp.value} of {cardTemp.suit}</h2>
            </div>
        )
    }
}

export default DeckCard
