# Linking to Plunker

Plunker has a public UI, but we primary use its embeds. The first is the typical approach, where you use the public UI and setup your example code there. This is very functional, and will work just fine. This has been done for some stand-alone lessons on eggheadio.

Plunker also supports loading the code for examples directly into the embed via Github 😳 This is an amazing feature as it allows us to version control the examples that are presented to the user. This means that we (egghead) can handle maintenance on the code examples and keep them updated and supported for a much longer time. This is critical for course content!

## Link a Plunker embed to a Github repo

Linking a Github repository to plunker is fairly simple and involves configuring the plunker embed url. We start with `https://embed.plnkr.co/`, which is the base embed url. To link to Github we configure the url by adding:

```
https://embed.plnkr.co/github/{profile-name}/{repository}/{branch} 
```

**Note:** We have to load our embeds through `https` (instead of `http`) or the embed won't load on egghead.

{branch} can be replaced with {tag|sha1} depending on how your repo is set up. If your repo is set up with an example in individual folders, you can add that /path to the embed url.

[Click here to see an example repo](https://github.com/eggheadio-projects/nlp-in-javascript-with-natural). This is divided into a folder per lesson.

## Additional Plunker embed config

URL parameters can be added to affect how the embed presents itself. The most used feature is showing specific files (the default being the index and preview). Add `?show=` to the end of the url with the various filenames separated via commas.

```
https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building-an-instant-search-with-angular-2-combining-observables-with-flatmap?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview
```

Notice the additional parameters appended to the end of the link.

```
?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview
```

`?preview=plnkr.html` allows us to set the preview panel to display the `plnkr.hmtl` page that we made instead of `index.html` which would be the default case.

`&show=src%2Fapp%2Fapp.component.ts,preview` tells plunker to show the file `src/app/app.component.ts` as well as run the code in the `preview` pane.

We specify which file we want shown to the viewer on load as often times the instructors will work on a single.

An complex example of this is shown [here](https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building-an-instant-search-with-angular-2-combining-observables-with-flatmap?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview). There are quite a few additional parameters that can be used which are all documented in this [gist](https://ggoodman.gitbooks.io/plunker/content/embed.html).