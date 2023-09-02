import { PostRepositoryInterface } from "../../domain/post/repository/post.repository";
import { CreatePostUseCase } from "../../usecase/post/create/create-usecase";
import { ListPostUseCase } from "../../usecase/post/list/list-usecase";
import { PostDtoInput, PostDtoOutput } from "./post.dto";

export class PostController {
    constructor(private postRepository: PostRepositoryInterface) {}

    async add(postDto: PostDtoInput): Promise<PostDtoOutput> {
        const createUseCase = new CreatePostUseCase(this.postRepository);
        return await createUseCase.execute(postDto);
    }

    async listAll(): Promise<PostDtoOutput[]> {
        return await (new ListPostUseCase(this.postRepository)).execute();
    }
};