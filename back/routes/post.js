const express = require('express');

const router = express.Router();
const { isLoggedIn } = require('./middlewares');

const { Post, User, Image, Review } = require('../models');

/**
 * 게시글 정보 가져오기
 * GET /post
 */
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글 입니다.');
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: User,
          as: 'Likers',
          attributes: ['id', 'nickname'],
        },
        {
          mode: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Review,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
    });
    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/**
 * 게시글 생성
 * POST /post
 */
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        { model: User, attributes: ['id', 'nickname'] },
        {
          model: Review,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/**
 * 리뷰 작성
 * POST /post/1/revuew
 * post 1 에 대한 리뷰
 */
router.post('/:postId/review', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다');
    }
    const review = await Review.create({
      content: req.body.content,
      starpoint: req.body.starpoint,
      PostId: req.params.postId,
      UserId: req.user.id,
    });
    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/**
 * 게시글 삭제
 * DELETE /post/1
 * TODO: 관리자 체크
 */
router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
