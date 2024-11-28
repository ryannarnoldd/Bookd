import express from 'express';
import type { Request, Response } from 'express';
import { Post } from '../../models/post.js';

const router = express.Router();

// GET /posts - Get all posts
router.get('/', async (_req: Request, res: Response) => {
    try {
        const posts = await Post.findAll({});

        res.json(posts);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});



// GET /posts/:id - Get a post by id
router.get('/post/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id, {});
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// GET /posts/:postUser
router.get('/:postUser', async (req: Request, res: Response) => {
    const { postUser } = req.params;
    try {
        const posts = await Post.findAll({
            where: { "postUser": postUser }
        });


        if (posts) {
            res.json(posts);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Post /Posts - Create a new Post
router.post('/', async (req: Request, res: Response) => {
    const { postUser, title, author, rating, review } = req.body;
    try {
        const newPost = await Post.create({ postUser, title, author, rating, review });
        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});


// PUT /Posts/:id - Update a Post by id
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params; // Get the post ID from the route
    const { title, author, rating, review, postUser } = req.body; // Adjust fields as per your model

    try {
        // Find the post by its primary key (id)
        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Update the fields provided in the request body
        await post.update({ title, author, rating, review, postUser });

        // Return the updated post as a response
        return res.json(post); // Ensures the return type is handled
    } catch (error: any) {
        console.error('Error updating post:', error);
        return res.status(500).json({ message: 'An error occurred while updating the post', error: error.message });
    }
});

// DELETE /Posts/:id - Delete a Post by id
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if (post) {
            await post.destroy();
            res.json({ message: 'Post deleted' });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export { router as PostRouter };
