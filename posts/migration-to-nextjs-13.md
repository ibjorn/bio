---
title: 'Migrating to Next.js 13 With App Router'
description: 'Migrating my bio from Next.js 12 to Next.js 13 with the new app router'
keywords: 'next.js, next.js migrate, next.js 13, next.js app router, next.js nested layouts'
date: '2023-08-08'
slug: 'migration-to-nextjs-13'
---

It was about time that I updated this little Next.js website.

Updating to Next.js 13 went fairly smoothly, when I made use of the codemods, but then of course the itch to also migrate to the Next.js app router started.

While I'm not going to write another "how to migrate" tutorial, there's enough of those that are easy to find with a quick Google, I decided however to document where I hit some snags and supply links to what helped with the process.

1. Simply migrating to Next.js 13 was the easy part and I just followed the docs on the [Next.js website](https://nextjs.org/docs/pages/building-your-application/upgrading/version-13).

2. From there I scooted over to this page in the Next.js docs which started me off in the [migration to the Next.js app router](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration).

3. On that last page there's a link to Lee Robinson's YouTube walk-through, [Incrementally adopt the Next.js App Router](https://www.youtube.com/watch?v=YQMSietiFm0), which helped a great deal in overcoming that first daunting move on moving files over to the app folder.

4. This blog article on [dev.to](https://dev.to/) was a huge help in [getting Google Analytics with GTM up and running](https://dev.to/valse/how-to-setup-google-tag-manager-in-a-next-13-app-router-website-248p) again.

5. Next up was the [new Next.js nested layouts](https://dev.to/logrocket/a-guide-to-nextjs-layouts-and-nested-layouts-5c0d) which was really not that hard at all.

6. The new [Next.js font optimisation](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) is a really cool feature.

7. And last but not least, [the new Next.js metadata feature](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) for all that good ol' search engine love.

The repo for this site can be found here: [https://github.com/ibjorn/bio](https://github.com/ibjorn/bio). It's far from perfect and there's a whole bunch of things I'd still like to change about it, but I'm happy for now.
