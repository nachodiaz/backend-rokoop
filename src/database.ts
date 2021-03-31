import {connect } from 'mongoose'

export async function startConnection(){
    await connect('mongodb://localhost:27017/photo-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })    

    console.log('Database is connected')
}

