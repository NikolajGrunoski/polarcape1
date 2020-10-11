import React from 'react'
import './App';

class homePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {

        fetch('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });


    }

    render() {
        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Type: {item.type}
                        </li>
                    ))}
                </ul>
            </div>
           

        );
    }


}

export default homePage;