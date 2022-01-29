import "./App.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { Launches } from "./components/Launches"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>SpaceX</h1>
      </div>
      <Launches />
    </ApolloProvider>
  )
}

export default App
