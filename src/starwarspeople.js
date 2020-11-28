import React from 'react'
import starwarscharacter from './starwarscharacter';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [12],
            isFetch: true,
        }
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(charactersJson => this.setState({ memes: charactersJson.result, isFetch: false }))
    }

    render() {
        const { isFetch, character } = this.state
        if (this.state.isFetch) {
            return "Loading..."
        }
        return (
            character.map((character) => <Meme name={character.displayName} key={character.generatorID} />)
        )
    }
}
export default App