import React from 'react'
import './App';

class homePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            search:null
        }
    }

    componentDidMount() {

        fetch('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English')
            // .then(res => {console.log(res.json().cards)
            // }).then(data => {
            //     console.log(data)
            //     this.setState({
            //         items:res.json().cards,
            //         isLoaded:true,
            //     })
            // }).catch((err) => {
            //     console.log(err)
            // })

            .then(res => res.json()).then(data => {
                console.log(data)
                this.setState({
                    items: data.cards,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err)
            })



    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {
        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        const styleInfo = {
            paddingRight: '10px'
        }
        const elementStyle = {
            border: 'solid',
            borderRadius: '10px',
            position: 'relative',
            left: '10vh',
            height: '3vh',
            width: '20vh',
            marginTop: '5vh',
            marginBottom: '10vh'
        }
        const stvari = items.map(data => {
            return (
                <div>
                    <ul>
                        <li style={{ position: 'relative', left: '10vh' }}>
                            <span style={styleInfo}>{data.name}</span>
                            <span style={styleInfo}>{data.type}</span>
                            <span style={styleInfo}>{data.setName}</span>
                            <span style={styleInfo}>{data.colors}</span>
                        </li>
                    </ul>
                </div>
            )
        })





        return (
            <div className="App">

                <div>
                    <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)} />
                    {stvari}
                </div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Type: {item.type} | NameOfTheSet : {item.setName} | Color : {item.colors}
                        </li>
                    ))}
                </ul>
            </div>




        );
    }


}

export default homePage;