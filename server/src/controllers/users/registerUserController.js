import bcrypt from 'bcryptjs';
import User from '../../models/userModel.js';
import wrapAsync from '../../utils/wrapAsync.js';

const registerUser = wrapAsync(async(req, res) => {
  const {name, email, password} = req.body;

  // Find if user already exists
  const userExists = await User.findOne({email});

  if(userExists) {
    res.status(400);
    throw new Error('User already exists');
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
    res.status(400);
    throw new error('Invalid user data');
  }
});

export default registerUser;