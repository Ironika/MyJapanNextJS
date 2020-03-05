const { getScansVA } = require('../../apiHelpers/Scans');

export default async(req, res) => {
    const page = req.query.page
    const prevPage = req.query.prevpage
    const scansva = await getScansVA(page, prevPage)
    res.json(scansva)
};