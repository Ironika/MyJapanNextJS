import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import getScansVa from '../../apiHelpers/ScansVa'
import getScansReader from '../../apiHelpers/ScansReader'

const ScansVaHandler = nextConnect();
ScansVaHandler.use(middleware);

ScansVaHandler.get(async (req, res) =>  {
    const { query: { page, prevpage, uid, onlybookmark, link } } = req

    if(link) {
        const reader = await getScansReader(link)
        res.json(reader)
    }

    let scans = null
    if(uid) {
        const bookmark = await req.db.collection('bookmarks').findOne({ user_id: uid })
        if(bookmark)
            scans = bookmark.scans
    }
    const scansList = await getScansVa(page, prevpage, scans, onlybookmark)
    res.json(scansList)
})

export default ScansVaHandler;