import { CreateCommentDto } from './create-comments.dto';

export class UpdateItemDto {
  public: boolean;
  comments: CreateCommentDto[];
}
