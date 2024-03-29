import express  from "express";

import { getPostsBySearch , getPosts , getPost , createPost , updatePost , deletePost , likePost , commentPost } from "../controller/post.controller.js";
import auth from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/' , getPosts)
router.get('/:id' , getPost)
router.get('/search' , getPostsBySearch)
router.post('/' , auth ,  createPost)
router.patch('/:id', auth , updatePost)
router.delete('/:id' , auth ,  deletePost )
router.patch('/:id/likePost', auth ,  likePost )
router.post('/:id/commentPost', auth ,  commentPost )


export default router; 