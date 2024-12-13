const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    firebaseAdmin.auth().verifyIdToken(token).then(() => next()).catch(() => res.status(401).json({ error: 'Unauthorized' }));
    
    if (token !== "VALID_TOKEN") {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
};

module.exports = authMiddleware;