const getNews = require('../../apiHelpers/News');

export default async(req, res) => {
    const news = await getNews()
    res.json(news)
};