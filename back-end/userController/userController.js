import Users from "../userModel/userModel.js"

export const create = async (req, res) => {
    try {
       const newUser = new Users(req.body)
       const {email} = newUser;
       const userExist = await Users.findOne({email});
        if(userExist){
            res.status(404).json({"Message": "User Already Exist"})
        }
        const response = await newUser.save();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}