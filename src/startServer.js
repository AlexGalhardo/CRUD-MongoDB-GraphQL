import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'


function startServer({ typeDefs, resolvers }) {
	mongoose.connect('mongodb://alex:root@172.17.0.2:27017/graphql', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	const server = new ApolloServer({ typeDefs, resolvers })
	server.listen().then(({ url }) => console.log(`Running on port ${url}`))
}

export default startServer;