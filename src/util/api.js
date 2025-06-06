import axios from 'axios'

export const fetchLecturers = async () => {
  const url = 'https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers'
  const response = await axios.get(url)

  return response.data
}