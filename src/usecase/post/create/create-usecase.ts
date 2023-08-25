import { Post } from "../../../domain/post/entity/post.entity";
import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";
import { CreatePostInput, CreatePostOutput } from "./create.dto";

export class CreatePostUseCase {
    constructor(private postRepository: PostRepositoryInterface) {}

    async execute(input: CreatePostInput): Promise<CreatePostOutput> {
        const post = new Post(input)
        await this.postRepository.insert(post);
        return post.toJson();
    }
};