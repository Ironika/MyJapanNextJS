# IronikaSpace
https://ironikaspace.com/

# INSTALL
npm install

# RUN DEV
npm run dev

Authentication and bookmarks require MongoDB. Configure `MONGODB_URI` in a
local `.env` file or in your deployment environment with the connection string
for a reachable MongoDB instance containing the `ironikaspace` database. The
legacy `mongo_api_pwd` configuration is still supported when `MONGODB_URI` is
not set. Never commit credentials.

Browser API requests use the current deployment's origin. Server-rendered pages
use `VERCEL_URL` on Vercel or `127.0.0.1` with `PORT` (default 3000) locally.
If the server-side request is blocked, for example by Vercel deployment
protection, the list is loaded in the browser instead. MongoDB and mail
credentials must be configured as server environment variables, not in the
`env` section of `next.config.js`.

On the profile page, the latest available chapter is retrieved from the manga
search results. Cover and chapter information is cached for five minutes in the
current browser tab; older cached information is shown while it is refreshed.
Only visible and nearby cards are refreshed, with at most two lookups at once.

# BUILD
npm run build

# DEPLOY
now (Or auto deploy with ZEIT)


# -----------------------------------------

# StoryBook
https://confident-leakey-5c5440.netlify.com

# RUN DEV
npm run storybook

# BUILD STORY-BOOK
npm run build-storybook

# DEPLOY
auto deploy with Netlify