import Client from './api'

export const GetStreamers = async() => {
    try {
        const res = await Client.get('/streamers')
        return res.data
    } catch (error){
        throw error
    }
}

export const GetStreamerDetails = async (streamer_id) =>{
    try {
        const res = await Client.get(`/streamers/${streamer_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const AddStreamer = async (streamer_id, user_id) => {
    try {
        const res = await Client.put(`/${streamer_id}`, {userId: user_id})
        return res.data
    } catch (error) {
        throw error 
    }
}