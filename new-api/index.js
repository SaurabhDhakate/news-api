const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());
let port = 3300;

let news_data = [
    { headlines: 'Headine one of news one', id: 101 },
    { headlines: 'Headine two of news two', id: 102 },
    { headlines: 'Headine three of news three', id: 103 },
    { headlines: 'Headine four of news four', id: 104 },
    { headlines: 'Headine five of news five', id: 105 },
    { headlines: 'Headine six of news six', id: 106 },
    { headlines: 'Headine seven of news seven', id: 107 },
    { headlines: 'Headine eight of news eight', id: 108 },
    { headlines: 'Headine nine of news nine', id: 109 },
    { headlines: 'Headine ten of news ten', id: 110 }
]

let details = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/news', (req, res) => {
    let home = news_data.map((item) => ({headlines: item.headlines, id: item.id}))
    res.json({
        news: home
    })
})

app.get('/news/:id', (req, res) => {
    let news = {headlines: news_data.filter(item => item.id == req.params.id)[0].headlines, details: details}
    res.json(news)
})



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })