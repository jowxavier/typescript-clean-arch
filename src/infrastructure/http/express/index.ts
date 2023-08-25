require('dotenv/config');

import express, {Express, Request, Response} from 'express'
import { PostInMemoryRepository } from '../../db/inMemory/post-in-memory-repository';
import { CreatePostUseCase } from '../../../usecase/post/create/create-usecase';
import { ListPostUseCase } from '../../../usecase/post/list/list-usecase';

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const postRepository = new PostInMemoryRepository();

app.get('/posts', async (_req: Request, res: Response) => {
    const listAllUseCase = new ListPostUseCase(postRepository);
    const output = await listAllUseCase.execute();
    res.json(output);
});

app.post('/posts', async (req: Request, res: Response) => {
    const createUseCase = new CreatePostUseCase(postRepository);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
});

app.listen(port, () => {
    console.log(`Server working in port ${port}`);
});