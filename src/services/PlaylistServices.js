import Client from './api'



export const CreatePlaylist = async (userId, playlistId) => {
  try {
    const res = await Client.post(`/user/${userId}/${playlistId}`, {
      userId: userId,
      playlistId: playlistId
    })
    return res.data

  } catch (error) {
    throw error
  }
}



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



// export const AddStreamers = async (
//     playlist_id, 
    // streamer_id,
//    
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
