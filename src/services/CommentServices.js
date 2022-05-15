import Client from './api'

export const NewComment = async ( content, streamer_Id) => {
    try {

        const res = await Client.post(`/comments/${streamer_Id}`, {
          content: content,
          streamerId: streamer_Id
      })
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetComments = async (streamer_Id) => {
      try {
        const res = await Client.get(`/comments/${streamer_Id}`)
        return res.data
      } catch (error) {
          throw error
      }
  }

  export const GetById = async(comment_Id) => {
      try {
          const res = await Client.get(`comments/${comment_Id}`)
          return res.data
      } catch (error) {
          throw error
      }
  }

  export const DeleteComment = async (comment_Id) => {
    try {
      const res = await Client.delete(`/comments/${comment_Id}`)
      return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateComment = async (comment_Id, content) => {
    try {
        const res = await Client.put(`/comments/${comment_Id}`, {
            content: content
        })
        return res.data
    } catch (error) {
        throw error
    }
}