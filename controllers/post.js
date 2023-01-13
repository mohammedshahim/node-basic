/**
 * @desc    Add posts to database
 * @route   POST /api/posts
 * @access  Public
 */
exports.addPosts = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Nodejs is running in home route",
  });
};
