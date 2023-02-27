import bcrypt from 'bcryptjs';
import User from '../../models/userModel.js';
import wrapAsync from '../../utils/wrapAsync.js';
import AppError from '../../utils/AppError.js';

const registerUser = wrapAsync(async(req, res) => {
  const {name, email, password} = req.body;

  // Find if user already exists
  const userExists = await User.findOne({email});

  if(userExists) {
    throw new AppError('User already exists', 400);
  }

  console.log(password);
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = password ? await bcrypt.hash(password, salt) : '';

  console.log(hashedPassword);
  
  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      pubId: user.pubId,
      name: user.name,
      email: user.email,
    });
  } else {
    throw new AppError('Invalid user data', 400);
  }
});

const loginUser = wrapAsync(async(req, res) => {
  const {email, password} = req.body;

  const aUser = await User.findOne({email});

  // Check user and password match
  if(aUser && (await bcrypt.compare(password, aUser.password))) {
    res.status(200).json({
      pubId: aUser.pubId,
      name: aUser.name,
      email: aUser.email,
    });
  } else {
    throw new AppError('Invalid user credentials', 401);
  }
});
export {registerUser, loginUser};