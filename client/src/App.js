import "./App.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Launches } from "./components/Launches"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <h1>SpaceX</h1>
        </div>
        <Routes>
          <Route exact path='/' element={<Launches />}></Route>
        </Routes>
        {/* <Launches /> */}
      </Router>
    </ApolloProvider>
  )
}

export default App
