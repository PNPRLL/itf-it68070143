import express, { text } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//api
app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000');
})

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get('/ping', (req,res) => {
    res.send({text:'IT68070143'})
})

let mock_data = [];

app.post('/form', (req,res) => {
    const {owner, color, type, wheel, weight} = req.body
    res.send({owner:owner, color:color, type:type, wheel:wheel, weight:weight, id:mock_data.length})
    mock_data.push({owner:owner, color:color, type:type, wheel:wheel, weight:weight, id:mock_data.length})
    console.log(mock_data)
})