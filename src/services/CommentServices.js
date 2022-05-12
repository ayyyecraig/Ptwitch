import Client from './api'

export const NewComment = async ( content, userId, streamerId) => {
    try {
        const res = await Client.post(`/comments/${userId}/${streamerId}`, {
          content: content,
          userId: userId,
          streamerId: streamerId
      })
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetComments = async (streamerId) => {
      try {
        const res = await Client.get(`/comments/${streamerId}`)
        return res.data
      } catch (error) {
          throw error
      }
  }

//   export const GetById = async(reviewId) => {
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