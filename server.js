const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema")
const cors = require("cors")

const app = express()

// allow cross-origins
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`))
