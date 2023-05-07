const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/animals/:id', (req, res) => {
    // 1. Routing by parameter value
    // const q = req.params
    // console.log(q)
    // if (q.id === 'cat') {
    //     res.send({'고양이': '야옹~'})
    // } else if (q.id === 'dog') {
    //     res.send({'강아지': '멍멍!'})
    // } else {
    //     res.send('올바른 동물 id를 입력하시오!')
    // }

    // 2. Get values by query
    const q = req.query
    console.log(q)
    res.json({'id': q.id,
            'age': q.age})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})