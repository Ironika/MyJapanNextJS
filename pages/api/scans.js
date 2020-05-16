import getScans from '../../apiHelpers/Scans'

export default async(req, res) => {
    const scans = await getScans()
    res.json(scans)
};