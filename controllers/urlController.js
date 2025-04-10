const URL = require('../models/URL');

exports.shorten = async (req, res) => {
    const { originalUrl, customAlias } = req.body;

    if (!customAlias) {
        return res.status(400).json({ msg: 'Custom alias is required' });
    }

    const exists = await URL.findOne({ shortId: customAlias });
    if (exists) return res.status(400).json({ msg: 'Alias already in use' });

    const url = new URL({
        originalUrl,
        shortId: customAlias,
        userId: req.user.id,
    });
    await url.save();
    res.status(201).json(url);
};

exports.getUserUrls = async (req, res) => {
    const urls = await URL.find({ userId: req.user.id });
    res.json(urls);
};

exports.redirect = async (req, res) => {
    const { alias } = req.params;
    const url = await URL.findOne({ shortId: alias });
    if (!url) return res.status(404).json({ msg: 'Not found' });
    res.redirect(url.originalUrl);
};