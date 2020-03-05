const getAnimes = require('../../apiHelpers/Animes');

export default async(req, res) => {
    const page = req.query.page
    const prevPage = req.query.prevpage
    const animes = await getAnimes(page, prevPage)
    res.json(animes)
};