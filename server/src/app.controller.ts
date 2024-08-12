import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer, diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = 'upload';
          // Create folder if doesn't exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
            console.log('mkdir upload');
          }
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          // Calling the callback passing the random name generated with
          // the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`); // Fixed template string
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Multer.File, @Body() dto: any) {
    console.log(file, 'file');
    let data = {
      description: dto.description,
      alt: dto.alt,
      extension: file?.filename.split('.')[1],
      type: file.mimetype,
      path: 'http://localhost:4000/' + 'upload/' + file.filename,
    };
    return data;
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
