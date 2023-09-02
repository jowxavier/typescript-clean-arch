import { Post } from "../../../domain/post/entity/post.entity";
import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";
import { PostDtoInput, PostDtoOutput } from "../../../infrastructure/controllers/post.dto";

export class CreatePostUseCase {
    constructor(private postRepository: PostRepositoryInterface) {}

    async execute(input: PostDtoInput): Promise<PostDtoOutput> {
        const post = new Post(input)
        await this.postRepository.insert(post);
        return post.toJson();
    }
};