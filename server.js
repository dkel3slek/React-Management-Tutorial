const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '이선우',
            'birthday': '960406',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '김소연',
            'birthday': '960214',
            'gender': '여자',
            'job': '바보'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '정승규',
            'birthday': '961002',
            'gender': '남자',
            'job': '병신'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));