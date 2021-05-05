import React from 'react'

function Hero({heroName}) {
    if (heroName === 'Joker') {
        throw new Error('Not a hero :(')
    }
    return (
        <div>
            I am a hero
            My name is: {heroName}
        </div>
    )
}

export default Hero