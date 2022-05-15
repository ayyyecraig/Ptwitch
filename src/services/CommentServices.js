import Client from './api'

export const NewComment = async ( content, userId, streamerId) => {
    try {
      console.log(userId, "here")
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

  export const GetById = async(commentId) => {
      try {
          const res = await Client.get(`comments/${commentId}`)
          return res.data
      } catch (error) {
          throw error
      }
  }

  export const DeleteComment = async (commentId) => {
    try {
      const res = await Client.delete(`/comments/${commentId}`)
      return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateComment = async (commentId, content) => {
    try {
        const res = await Client.put(`/comments/${commentId}`, {
            content: content
        })
        return res.data
    } catch (error) {
        throw error
    }
}