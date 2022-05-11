import Client from './api'

export const GetStreamers = async() => {
    try {
        const res = await Client.get('/playlists/streamers')
        return res.data
    } catch (error){
        throw error
    }
}