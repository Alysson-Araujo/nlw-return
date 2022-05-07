import express from 'express'
import { routes } from './routes';

import cors from 'cors'
const app = express();

app.use(cors());// medida de segurança para evitar que frontends externos se comuniquem com esse backend
app.use(express.json())


app.use(routes)
app.set('port',process.env.PORT || 3333);
app.listen(() =>{
    console.log("HTTP server running!");
});