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