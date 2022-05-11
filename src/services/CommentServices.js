import Client from './api'

export const NewComment = async ( content, ownerId, playlistId) => {
    try {
        const res = await Client.post(`/comments/${userId}/${playlistId}`, {
          rating: rating,
          content: content,
          userId: userId,
          playlistId: playlistId
      })
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetComments = async (playlistId) => {
      try {
        const res = await Client.get(`/comments/${playlistId}`)
        return res.data
      } catch (error) {
          throw error
      }
  }

//   export const GetReviewById = async(reviewId) => {
//       try {
//           const res = await Client.get(`reviews/${reviewId}`)
//           return res.data
//       } catch (error) {
//           throw error
//       }
//   }

//   export const DeleteReview = async (reviewId) => {
//     try {
//       const res = await Client.delete(`/reviews/${reviewId}`)
//       return res.data
//     } catch (error) {
//         throw error
//     }
// }

// export const UpdateReview = async (reviewId, rating, content) => {
//     try {
//         const res = await Client.put(`/reviews/${reviewId}`, {
//             rating: rating,
//             content: content
//         })
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }