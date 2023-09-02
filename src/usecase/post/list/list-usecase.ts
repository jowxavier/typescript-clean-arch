import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";
import { PostDtoOutput } from "../../../infrastructure/controllers/post.dto";

export class ListPostUseCase {
    constructor(private postRepository: PostRepositoryInterface) {}

    async execute(): Promise<PostDtoOutput[]> {
        const posts = await this.postRepository.findAll();
        return posts.map(p => p.toJson());
    }
};