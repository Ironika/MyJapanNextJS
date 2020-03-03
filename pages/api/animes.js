const getAnimes = require('../../apiHelpers/Animes');

export default async(req, res) => {
    const animes = await getAnimes()
    res.json(animes)
};