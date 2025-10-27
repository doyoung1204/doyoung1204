import { Controller, Get, Post, Body, Param, Query, Render, Redirect } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @Render('posts/list')
  async getPosts(@Query('search') search: string, @Query('page') page = 1) {
    const limit = 5;
    const posts = await this.postsService.findAll(search, page, limit);
    return { posts, search, page };
  }

  @Post()
  @Redirect('/posts')
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postsService.create(createPostDto);
  }

  @Get(':id')
  @Render('posts/detail')
  async getPost(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    return { post };
  }

  @Post(':id/update')
  @Redirect('/posts')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    await this.postsService.update(id, updatePostDto);
  }

  @Post(':id/delete')
  @Redirect('/posts')
  async delete(@Param('id') id: string) {
    await this.postsService.delete(id);
  }
}
