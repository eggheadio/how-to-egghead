## Sharing your code
Playing around with code is critical to becoming a better web developer.

For every egghead lesson, we provide a concise, organized, readable code example below the lesson video in a runnable embed, using Plunker or a similar service. That way, egghead members can jump in right away.

Note: You should always record in a local environment using your favorite text editor, and then repurpose your code using Plunker or your service of choice. You do you!


### Using Plunker

Plunker allows us to embed even fairly complex apps as runnable examples, perfect for our learners to run with. There are two ways to use it:

- You’ll typically use **Plunker’s public UI** and set up your code example there. For standalone lessons, feel free to just do this. It works great.
- Plunker also supports loading your code **directly into the embed via Github**. This is an amazing feature that allows us to version control the examples presented to the user. egghead can then handle maintenance on your examples and keep them updated and supported for a much longer time. :muscle:

Much as we love Plunker, there are cases where it just won’t work. In those cases, simply link to a GitHub repository.


### Link a Plunker embed to a GitHub repo

Linking a GitHub repository to Plunker is fairly simple and involves configuring the Plunker embed url. We start with https://embed.plnkr.co/ , which is the base embed url. To link to Github we configure the url by adding:

`https://embed.plnkr.co/github/{profile-name}/{repository}/{branch}`

`{branch}` can be replaced with `{tag|sha1}` depending on how your repo is set up. If your repo is set up with an example in individual folders, you can add that `/path` to the embed url.

[Here’s an example Github repo](https://github.com/eggheadio-projects/nlp-in-javascript-with-natural), which is divided into one folder per lesson.


![](https://lh4.googleusercontent.com/BN85gMdmTnjYqHeoEwsHzjtXWp-ihYBBQULZI4C6tz0jmyhGGTjnkHwEOiYqTMn3w28D7bvq9Lvgixz5QdBtQM8mfs7V1vfOgYiRQIaahBfd22lcHBqEqARyqgWhzPib478Gmgz2)

### Additional Plunker embed config

URL parameters can be added to affect how the embed presents itself. The most-used feature is showing specific files (the default being the index and preview). Add `?show=` to the end of the url with the various filenames separated by commas.

`https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building`

You’ll see a complex example of this [here](https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building-an-instant-search-with-angular-2-combining-observables-with-flatmap?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview).

If you want to go wild, [this gist documents](https://ggoodman.gitbooks.io/plunker/content/embed.html) quite a few additional parameters you can use.


### Build complex apps in Plunker

Before you go any further, **stop!** You don’t need to build apps in Plunker. egghead will do this for you. Just hit up @zac in Slack and we’ll get to it.

...but if you’re the DIY type, this is actually pretty cool.

Plunker itself doesn’t support the node file system—import and export statements in Plunker will not work. But it is possible to create an in-browser Typescript compiler. This is usually required for Angular lesson examples. Doing this takes a bit of set up, so hang in there!

Here’s what you do.

**1)** Install jspm on your local machine if it isn’t already. It’s  an auto-configure systemjs tool:
`$ npm i -g jspm@beta`

**2)** Run in whatever dir pleases you:
`$ jspm init`

**3)** Select all the defaults given to you. Then run:
`$ jspm i npm:{package_you_want_to_install}`
For instance: `jspm i npm:data.task` This will give a verbose working example of the config file needed to achieve in-browser compiling.

**4)** After init is done, this is the barebones .html page you will need:

![](https://lh3.googleusercontent.com/QfBRAe4xp95hUC9bSIhOaSanvInun0erAoUtjBQTdZ9AldfSC_-aOj-2nv1gbCf28B3MXmQK46WI0ABJCBbP8FBwjY2F-c8nmWOr79KsqIWWw5QaD2TsX4-nWEbXUGBEeJGZd1aE)


**5)** You then need to create an `app.js` file in the `src` directory `src/app.js` . This file will contain the code you want to run. Any packages that are installed using
`jspm i npm:{package_you_want_to_install}` will create a `jspm_packages/npm/{package_you_want_to_install}@1.2.3.json` file.

**6)** ⚡️ Copy those contents. ⚡️
The content will be placed in your `SystemJS.config` under the packages property as the package you installed. For instance:

![](https://lh5.googleusercontent.com/8j8p214IkMmQBkcdc9Y8m4ctaHcRfZGMksRnYHJ3IOa0y0okvb6TE0gVjZu-8a0qL_S_XRFnayxS1ID9yEh_EYuIbum_Arlwriy9sFeIaCLiausO2wqcFmUwFnFPeLLo9V5_Y4T9)


**7)** Jspm will also give you a `jspm.config.js` file: Copy this file, with some slight modifications.

![](https://lh5.googleusercontent.com/Vyby8a90s6HEJspKmtAsyx6rzK_G0t1lUUtehzkc_3S-7e6QealWhI-yuSpP8IAf65BGyGOTG73BbStHeuna8SI9OmRU6xjZnEcbfqdK6xhUpiZ4AK_3gVRdRFe0AqNk32fFGDsn)


Note that the `"baseURL":` property was changed from `/` to a `.`

Also note that
`"systemjs-babel-build": "npm:systemjs-plugin-babel/systemjs-babel-browser.js` **line was added under the** `map` property (nested in the `devConfig` property).

**8)** For Plunker apps, just add this script tag (in `index.html` ): `<scriptsrc="https://unpkg.com/systemjs@0.19.41/dist/system.src.js"></script>`

**9)** Then the two `SystemJS.config` objects can be added in their own script. Now you’re good to go!

Here’s [one last example of a Plunker embed](http://embed.plnkr.co/UxkIoIK9PEkaupwTInDE?show=script.js,preview) to send you on your way.