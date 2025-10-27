import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  // 🔹 목록 조회 (검색 + 페이지네이션)
  async findAll(search?: string, page = 1, limit = 5): Promise<Post[]> {
    const query = search ? { title: new RegExp(search, 'i') } : {};
    return this.postModel
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  // 🔹 단일 게시글 조회
  async findOne(id: string): Promise<Post | null> {
    return this.postModel.findById(id).exec();
  }

  // 🔹 새 게시글 작성
  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  // 🔹 게시글 수정
  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post | null> {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
  }

  // 🔹 게시글 삭제
  async delete(id: string): Promise<Post | null> {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
