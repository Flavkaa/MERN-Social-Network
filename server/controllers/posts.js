import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    // const { userId, description, picturePath } = req.body;
    const { userId, description } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      // userPicturePath: user.picturePath,
      // picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const posts = await Post.find().sort({ _id: -1 }); // Запрос постов в обратном порядке
    res.status(201).json(posts);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find().sort({ _id: -1 });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId }).sort({ _id: -1 }); // Исправление здесь
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const commentPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, firstName, lastName, userId } = req.body;
    // const { text, firstName, lastName, picturePath, userId } = req.body;
    const post = await Post.findById(id);
    const comment = { userId, text, firstName, lastName };
    // const comment = { userId, text, firstName, lastName, picturePath }; // include firstName and picturePath here
    post.comments.push(comment);
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { comments: post.comments },
      { new: true } // pass options object as a single argument
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
