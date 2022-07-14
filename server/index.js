const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 1000; 
const app = express();

app.use(cors());

// Connect to database
connectDB();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))


// if (process.env.NODE_ENV == 'production') {
//     app.use(express.static('../client/build'));
// }

app.listen(port, console.log(`Server running on port ${port}`));