import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  onTextChange = text => {
    this.setState({ text: text });
  }

  onPress = () => {
    const { text } = this.state;

    if (text.length < 5) {
      console.log('Your name is less than what is required.');
    }
  }
  render() {

    return (


      <div id="login">

        <div className="box-container">

          <form>
            <h1 className='text'> Welcome!</h1>
            <p className='text'>
              Please input your name to continue.
            </p>

            <input onTextChange={this.onTextChange} minLength={3} maxLength={15} className="text-field" />
            <Link to='/homepage'>  <button onPress={this.onPress} className="primary-button"> Submit  </button></Link>






          </form>

        </div>


      </div>
    )
  }
}


export default App;
// ReactDOM.render(<App />, document.getElementById("root"))
