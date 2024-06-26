import { Hono } from 'hono';

import { amplifyClient } from '@/infra/server/amplify';

export const threadsApp = new Hono()
  .get('/recent', async (c) => {
    const res = await amplifyClient.models.Thread.list({
      // limit: 20,
      selectionSet: [
        'author.name',
        'id',
        'title',
        'description',
        'createdAt',
        'comments.id',
      ],
    });

    return c.json({
      nextToken: res.nextToken,
      // FIX: sorting method
      threads: res.data.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)),
    });
  })
  .get('/:id', async (c) => {
    const res = await amplifyClient.models.Thread.get(
      { id: c.req.param().id },
      {
        selectionSet: ['id', 'title', 'description'],
      },
    );

    return c.json({
      thread: res.data,
    });
  })
  .get('/:id/comments', async (c) => {
    const res = await amplifyClient.models.Comment.list({
      filter: {
        threadId: { eq: c.req.param().id },
      },
      // limit: 20,
      selectionSet: ['author.name', 'id', 'body', 'createdAt'],
    });

    return c.json({
      // FIX: sorting method
      comments: res.data.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)),
      nexToken: res.nextToken,
    });
  });
