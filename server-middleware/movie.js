// require는 함수실행, app에 한번에 넣어서 실행도 가능
// app.user때문에 따로 나눠놓음
const express = require('express')
const axios = require('axios')

const { OMDB_API_KEY } = process.env
const app = express()

app.user(express.json())

// 주소/.netlify.functions/movie
// .netlify.functions을 api로 바꿔서 사용 -> '/'
// 주소/api/movie
app.post('/', async (req, res) => {
    // body부분에 parameter가 들어있다
    const payload = req.body
  console.log(payload)

  const { title, type, year, page, id } = payload
  const url = id
    // 작업시 우리는 http로 test함
    // http는 http와 https둘다 요청이 가능
    // https는 실제 배포된 서버
    // https에서 http로 요청을 보내면 보안상 문제때문에 안될수도있음
    // https로 배포되는 서버는 만들어야함
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`    
  
    try {
      const { data } = await axios.get(url)
      if (data.Error) {
        res.status(400).json(data.Error)
      }
      res.status(200).json(data)
    } catch (error) {
    res
        .status(error.response.status)
        .json(error.message)
    }
})
// 내보내기 기능을 만들어주는 통로같은 역할
module.exports = app