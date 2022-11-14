import React from "react"
import ReactDOM from "react-dom/client"

// function-based component
/*const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  )

  return <div>Latitude: </div>
}*/

// class-based component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null, errorMessage: "" }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // to update the state, we call setState
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  // render method is required by react
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading...</div>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
