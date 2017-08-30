const express = require('express')
const expressGraphQL = require('express-graphql')

const schema = require('./schema/schema')

const rootValue = {
  hello: () => {
    return 'Hello world!'
  },
}

const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  rootValue,
  graphiql: true,
}))

app.listen(4000)

console.log('Running a GraphQL API server at localhost:4000/graphql')