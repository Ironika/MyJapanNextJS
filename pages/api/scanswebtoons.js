const { getScansWebtoons } = require('../../apiHelpers/Scans');

export default async(req, res) => {
    const scansWebtoons = await getScansWebtoons()
    res.json(scansWebtoons)
};