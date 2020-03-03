const { getScansVA } = require('../../apiHelpers/Scans');

export default async(req, res) => {
    const scansva = await getScansVA()
    res.json(scansva)
};