import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import getAnimes from '../../apiHelpers/Animes'

const AnimesHandler = nextConnect();
AnimesHandler.use(middleware);

AnimesHandler.get(async (req, res) =>  {
    const { query: { page, prevpage, uid, onlybookmark  } } = req
    let animes = null
    if(uid) {
        const bookmark = await req.db.collection('bookmarks').findOne({ user_id: uid })
        if(bookmark)
            animes = bookmark.animes
    }
    const animesList = await getAnimes(page, prevpage, animes, onlybookmark)
    res.json(animesList)
})

export default AnimesHandler;