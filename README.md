# ✨ DC Action Lab ✨

This is a [Next.js](https://nextjs.org) site using [Sanity](https://www.sanity.io) as a [CMS](https://en.wikipedia.org/wiki/Content_management_system). It was created with [Stackbit](https://www.stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes) in under a minute.

## Develop Locally

1. Install [Node.js and npm](https://nodejs.org/en/)

1. Install npm dependencies:

        npm install

1. Navigate to the ["API Settings"](https://manage.sanity.io/projects/e86onudg/settings/api) page of this Sanity.io project. Then click "Add new token" and create new "write" token.

1. Assign the created token to the `SANITY_ACCESS_TOKEN` environment variable (replace `{sanity_write_token}` with the token):

        export SANITY_ACCESS_TOKEN={sanity_write_token}

1. [Optional] Install and run Sanity Studio locally: install sanity-cli `npm install -g @sanity/cli`, navigate to the `/studio` directory, and run `sanity install` and `sanity start`.
You may be required to login with the Sanity CLI.

1. Start the Next.js local development server:

        npm run develop

1. Open [http://localhost:3000/](http://localhost:3000/) in the browser

1. 🎉

## Editing Content

To start editing your site, you can use the Sanity interface at https://dc-action-lab-54b0c.sanity.studio/.


## Colophon

Generated at `2021-05-07T14:13:56.060Z` by Stackbit version `0.3.51`.
