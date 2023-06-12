const userService = require('../services/userService');

exports.getUserById = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await userService.getUserById(id);

        if(user){
            res.json(user);
        }else{
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
}