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
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )

    return <div>Latitude: </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
