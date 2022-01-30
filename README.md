# GraphQL - React - Apollo 🚀

practice repository

## Using `Express`

- create different routes
- with `graphql` we only have **one** endpoint

## Install `concurrently`

- to be able to run all server ports at the same time
- then add this to **package.json** -> `"dev": "concurrently \"npm run server\" \"npm run client\""`

## Note about `react-router-dom`

In V6, we don't use the component prop anymore. It was replaced in favor of element:

`<Route exact path='/' element={<Launches />}></Route>`
