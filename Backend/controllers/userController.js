
const createUser = (req, res) => {
    
    const {name, email,phone} = req.body
    console.log(req.body)
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
      }
    res.status(201).json({message: ` Create User ${req.params.id}`});
}

const getUsers = (req, res) => {
    res.status(200).json({ message: `Get User form api server for ${req.params.id}` });
}

const updateUser = (req, res) => {
    
 res.status(200).json({ message: `PUT user form api server ${req.params.id}`})
        }

const deleteUser = (req, res) => {
    res.status(200).json({ message:`DELETE user form api server ${req.params.id}`})
}


module.exports = { createUser, getUsers, updateUser, deleteUser}