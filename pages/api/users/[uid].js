import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const BookmarksHandler = nextConnect();
BookmarksHandler.use(middleware);

BookmarksHandler.get(async (req, res) =>  {
    const { query: { uid } } = req
    const bookmark = await req.db.collection('bookmarks').findOne({ user_id: uid })
    if(bookmark) return res.json({status: 200, bookmark})
    return res.json({status: 400, err: 'An error Occured !'})
})

BookmarksHandler.post(async (req, res) =>  {
    const { query: { uid } } = req
    const { body: { datas, type } } = req

    const exist = await req.db.collection('bookmarks').countDocuments({ user_id: uid })
    if (exist > 0) {
        const bookmark = await req.db.collection('bookmarks').findOne({ user_id: uid })
        let newDatas = []
        let bookmarkToUpdate = {}
        if(type === 'scans') {
            const isAlreadyInBookmark = isInBookmarks(datas.title, bookmark.scans)
            if(isAlreadyInBookmark) {
                for(let i = 0; i < bookmark.scans.length; i++) {
                    if(datas.title.includes(bookmark.scans[i].title)) {
                        bookmark.scans[i] = datas
                    }
                }
                newDatas = [...bookmark.scans]
            } else {
                newDatas = [...bookmark.scans, datas]
            }
            bookmarkToUpdate = { $set: {scans: newDatas} }
        } else {
            newDatas = [...bookmark.animes, datas.title]
            bookmarkToUpdate = { $set: { animes: newDatas} }
        }
        const response = await req.db.collection("bookmarks").updateOne({ user_id: uid }, bookmarkToUpdate)
        if(response && response.matchedCount) return res.json({status: 200})
    } else {
        const bookmarkToInsert = type === 'scans' ? { user_id: uid, scans: [datas], animes: [] } : { user_id: uid, scans: [], animes: [datas.title] }
        const response = await req.db.collection('bookmarks').insertOne(bookmarkToInsert)
        if(response && response.matchedCount) return res.json({status: 200})
    }
    return res.json({status: 400, err: 'An error Occured !'})
});

BookmarksHandler.put(async (req, res) =>  {
    const { query: { uid } } = req
    const { body: { datas, type } } = req

    const bookmark = await req.db.collection('bookmarks').findOne({ user_id: uid })
    let newDatas = type === 'scans' ? bookmark.scans : bookmark.animes
    if(type === 'scans') {
        newDatas.splice(newDatas.indexOf(datas), 1);
    } else {
        newDatas.splice(newDatas.indexOf(datas.title), 1);
    }
    const bookmarkToUpdate = type === 'scans' ? { $set: {scans: newDatas} } : { $set: { animes: newDatas} }
    const response = await req.db.collection("bookmarks").updateOne({ user_id: uid }, bookmarkToUpdate)
    if(response && response.matchedCount) return res.json({status: 200})
    return res.json({status: 400, err: 'An error Occured !'})
});

function isInBookmarks(title, bookmarks) {
    for(let i = 0; i < bookmarks.length; i++)
        if(title.includes(bookmarks[i].title))
            return true
    return false
}

export default BookmarksHandler;