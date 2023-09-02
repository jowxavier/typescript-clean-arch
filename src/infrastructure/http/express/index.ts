require('dotenv/config');

import express, {Express, Request, Response} from 'express'
import { PostInMemoryRepository } from '../../db/inMemory/post-in-memory-repository';
import { PostController } from '../../controllers/post.controller';

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const postRepository = new PostInMemoryRepository();
const controller = (new PostController(postRepository)); 

app.get('/posts', async (_req: Request, res: Response) => {
    const output = await controller.listAll();
    res.status(200).json(output);
});

app.post('/posts', async (req: Request, res: Response) => {
    const output = await controller.add(req.body);
    res.status(201).json(output);
});

app.listen(port, () => {
    console.log(`Server working in port ${port}`);
});