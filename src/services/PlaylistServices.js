import Client from './api'

export const GetAllPlaylists = async () => {
  try {
    const res = await Client.get('/playlists')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPlaylistDetails = async (streamers) => {
  try {
    const res = await Client.get(`/playlists/${streamers}`)
    return res.data
  } catch (error) {
    throw error
  }
}

// export const CreatePlaylist = async (user_id) => {
//   try {
//     const res = await Client.post(`/${user_id}`)
//     return res.data

//   } catch (error) {
//     throw error
//   }
// }


// export const AddStreamers = async (
//     playlist_id, 
    // streamer_id,
//     name, 
//     contentType, 
//     schedule, 
//     img, 
//     ) => {
//   try {
//     const res = await Client.put(`/playlists/${playlist_id}`, {
//       name:  + {$playlist_id},
//       contentType: 
//       schedule: 
//       img: 
//     })
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
