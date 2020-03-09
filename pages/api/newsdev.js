const getNewsDev = require('../../apiHelpers/NewsDev');

export default async(req, res) => {
    const newsDev = await getNewsDev()
    res.json(newsDev)
};