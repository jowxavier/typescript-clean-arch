import { PostRepositoryInterface } from "../../../domain/post/repository/post.repository";
import { ListPostOutput } from "./list.dto";

export class ListPostUseCase {
    constructor(private postRepository: PostRepositoryInterface) {}

    async execute(): Promise<ListPostOutput[]> {
        const posts = await this.postRepository.findAll();
        return posts.map(p => p.toJson());
    }
};