import userModel from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // password hashing
    const hash = await bcryptjs.hash(password, 10);

    const createdUser = new userModel({
      name: name,
      email: email,
      password: hash,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully" , user: createdUser});
  } catch (error) {
    console.log("Error : " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req,res) =>{
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email: email});
        const isMatched = await bcryptjs.compare(password,user.password);

        if(!user || !isMatched){
            return res.status(400).json({message: 'Invalid username or password'});
        }else{
            res.status(200).json({message: 'Login Successful', user:user})
        }
        
    } catch (error) {
        console.log('Error : ', error)
    }
}
