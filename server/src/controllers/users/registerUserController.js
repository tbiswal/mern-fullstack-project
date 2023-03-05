import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';
import wrapAsync from '../../utils/wrapAsync.js';
import AppError from '../../utils/AppError.js';

const generateToken = (pubId) =>
  jwt.sign({ pubId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

const registerUser = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;

  // Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new AppError('User already exists', 400);
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = password ? await bcrypt.hash(password, salt) : '';

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      pubId: user.pubId,
      name: user.name,
      email: user.email,
      token: generateToken(user.pubId),
    });
  } else {
    throw new AppError('Invalid user data', 400);
  }
});

export default registerUser;
