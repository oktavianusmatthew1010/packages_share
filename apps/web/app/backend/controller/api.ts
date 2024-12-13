const { updateUser, fetchUser } = require('../repository/userCollection');

const updateUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        await updateUser(userId, userData);
        res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fetchUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await fetchUser(userId);
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { updateUserData, fetchUserData };