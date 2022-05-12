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

export const AddStreamer = async (streamer_id, playlist_id) => {
    try {
        const res = await Client.put(`/streamers/${streamer_id}`, {playlistId: playlist_id})
        return res.data
    } catch (error) {
        throw error 
    }
}