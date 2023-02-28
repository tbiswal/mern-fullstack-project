import jwt from 'jsonwebtoken';
import wrapAsync from '../utils/wrapAsync.js';
import User from '../models/userModel.js';
import AppError from '../utils/AppError.js';

const protect = wrapAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      [, token] = req.headers.authorization.split(' ');

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findOne({ pubId: decoded.pubId }).select(
        '-password'
      );
      next();
    } catch (error) {
      throw new AppError('Not authorized', 401);
    }
  }

  if (!token) {
    throw new AppError('Not authorized', 401);
  }
});

export default protect;
