## Host a demo REST API
Want data to play around with in your next egghead lesson?

egghead co-founder and instructor extraordinaire John Lindquist set us up with a REST API using [swapi](https://swapi.co/) (The Star Wars API) and [json-server](https://github.com/johnlindquist/swapi-json-server). As long as you don’t openly endorse or promote swapi (or Star Wars), you’ll have no issues with copyrights.

If you don’t have a need for any special configurations, you can spin up the server using [npx](https://github.com/zkat/npx).

npx ships with the latest versions of npm, so you probably already have it installed.

`$ npx https://github.com/johnlindquist/swapi-json-server`
`// --> http://localhost:3000`


💥 Presto. You’re now running a REST API using Star Wars data. 💥


### Build custom data for egghead lessons

Of course, you have endless options for building a REST API.

If your data needs to be unique for the lesson you’re crafting (there’s a lesson for that!), John shows us [how to generate a large dataset of JSON data](https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server)


### 100 random people

If 100 random people is enough for your data set, grab this gist: [100 people in JSON format](https://gist.github.com/johnlindquist/3a7d28dbf231c476d62dd3f481d7b1c5).


### Serve JSON locally

`json-server` will serve any JSON file we have ready.

`$ npm i -g json-server`

`$ json-server {data.json}`

You're good to go.


### Host a REST API

Zeit's [now](https://zeit.co/now) feature is a great way to host any application needing it.

You can use the now  command with an app John set up:

`$ npm i -g now`
`$ now https://github.com/johnlindquist/swapi-json-server`

If this is your first time using now, there will be a small amount of setup, but overall it's a breeze.

There’s a lesson for that, too. Check out [Deploy Web Apps with Zeit Now](https://egghead.io/courses/deploy-web-apps-with-zeit-now) for an in-depth look at `now`. Watch it right now!