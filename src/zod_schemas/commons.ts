import { defaultBlogPageSize } from '@/contants/blog';
import { z } from 'zod';

export const paginationZodSchema = z.object({
  pagination: z
    .object({
      pageIndex: z.number(),
      pageSize: z.number(),
    })
    .catch({
      pageIndex: 0,
      pageSize: defaultBlogPageSize,
    }),
});
