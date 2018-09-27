# Identify Change(s) in a Framework

## Project Structure

JavaScript frameworks are continually changing and updating. A lot of the time this is not an issue for our lessons.

JavaSript projects keep track of changes through a `package.json` that can be found in the root of the project. The `package.json` file contains the meta-data for the project like the authors' name, a `scripts` section, `dependencies` section, and `devDependencies` section. 

The `dependencies` section contains the list of all the libraries used in the project that are essential for the application to run (e.g., React, Angular, Redux, RxJS).

```json
{
  "name": "redux-course",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "json-server": "^0.13.0",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-redux": "^5.0.5",
    "react-router-dom": "^4.1.1",
    "redux": "^4.0.0",
    "redux-devtools-extension": "^2.13.2",
    "redux-thunk": "^2.2.0",
    "yarn": "^1.6.0"
  },
  "devDependencies": {
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "production": "json-server --static ./build db.json",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "dev-server": "json-server -p 8080 db.json"
  }
}
```

Each of these dependencies has a version number listed that informs npm (or Yarn) to download the version specified.

The version number follows the Semantic Versioning Specification (SemVer).

## Semantic Versioning (SemVer)

SemVer attempts to provide more meaning of the underlying changes in a project through additional structure to version numbers. 

Each Version X.Y.Z must be non-negative numbers starting and (supposed to) have non-leading zeroes (though many libraries start at `0.1.0`).

- X is a **MAJOR** version

- Y is a **MINOR** version

- Z is a **PATCH** version

With these versions specified, `0.2.10` is ordered before `0.3.1` and subsequently, `1.0.0` comes after both `0.2.10` and `0.3.1`.

A PATCH version is incremented when internal bugs are fixed in a library that does not affect any projects. MINOR versions are incremented when there is 'backward compatible' features introduced to a library or significant improvements to the internal workings of the library are added. MAJOR versions are incremented when there are **Breaking Changes** introduced to the library.

In the previously mentioned example, theoretically, there are backward compatible features added in-between the packages `0.2.10` and `0.3.1` versions. When the package reached `1.0.0`, it can be assumed that it contains breaking changes if you wrote your application on a previous version (e.g., `0.2.10` or `0.3.1`).

### SemVer Version Ranges

A lot of the time, specifying a single version of a technology is too fine grain and restrictive because subsequent MINOR and PATCH updates won't break the project that the dependency is in. It can be annoying to have to update version numbers _every_ time a MINOR or PATCH version is released.

This is why SemVer has version ranges which can be denoted a few different ways. The simplest ways are to use a set of primitive operators, which are: `<` Less than, `<=` Less than or equal to, `>` Greater than, `>=` Greater than or equal to, and `=` Equal. `=` can be assumed when no operator is present. 

For review, a range specifying `>15.3.0 <16.4.1` says the course started at version `15.3.0` and is valid up to all version (excluding) `16.4.1` where a `<=16.4.1` will specify the version including `16.4.1`.

To make versions easier to specify, the squiggly `~` and caret `^` also identify ranges. When `~` is placed before version (e.g., `~15.0.0`), it specifies all versions incremented at the PATCH level. In other words `15.0.1`, `15.0.3`, or `15.0.19` are all valid. In other words, `~15.0.0` equals `>=15.0.0 <15.1.0`.

The caret `^` specifies all version increments at the MINOR and PATCH levels. `^15.0.0` specifies that any of these following versions are valid: `15.0.1`, `15.1.3`, or `15.5.0`. in other words, `^15.0.0` would equal the range `>=15.0.0 <16.0.0`.

### Fine-grain Version Specification

The `||` operator combines versions and version ranges. `^15 || ^16` specifies all MINOR and PATCH version increments in the MAJOR versions `15` and `16`.

A great place to explore semantic versioning is the [npm SemVer calculator](https://semver.npmjs.com/)

### Pre-release Versions

Many projects will have several pre-release versions published before an official version is published. These pre-release versions are subject to change and can be typically ignored when updating lesson code. 

Pre-release tags range from alpha, beta, and rc (release candidate). With the specified order as follows: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

It is good to note that a pre-release is available and what stage they are in as that likely means a MAJOR version update is close to being published and will trigger more reviews.

## Review with SemVer Versions in Mind

You need to identify these **Breaking Changes**​​​​​​​ and keep them in mind when watching through lessons.

Each framework or library will have a CHANGELOG.md that will record the changes of that specific framework. (link to example) Usually found on the respective frameworks github page.

Most frameworks use Semantic Versioning (SemVer) to keep track of updates. We are mostly interested in Major and Minor

Under each new version, there will be a Breaking Changes (or similarly named) section that is where you will see what exactly will break any lesson examples that egghead might have.

## Track Course Dependency Information

egghead is now keeping track of all the relevant dependency versions related to a course

i.e., A course on "State Management with Mobx in React" will track the version range that starts with the course published version and ends with the current version the course example.

Data for this looks like: 

```json

{
        slug: 'manage-complex-state-in-react-apps-with-mobx',
        dependencies: {
          mobx: '>=2.6.3 <=5.0.3',
          react: '>=15.3.0 <=16.4.1',
        },
        reviews: [
          {
            performedOn: '2018-07-17',
            performedBy: 248653,
            scopeOfReview: 'full course lesson review',
            notes: [
              {
                type: 'major issue',
                title: 'removed line- “useStrict(true);',
                details: 'The useStrict terminology is no longer recognized',
              },
              {
                type: 'major issue',
                title: 'Keys and values now return iterators',
                details:
                  'keys and values now return iterators, to return an array, use Array.from with the iterator https://github.com/mobxjs/mobx/issues/1488',
              },
            ],
          },
        ],
      },
```

As seen above, every review is recorded with the date it was done (in YYYY-MM-DD format), the scope, and most importantly, any notes or issues that came up during the review.

The range specifies the range that starts with package versions that the course was released on and ends with the latest version the course was updated to. For the example specified above, the course was released with React v15.3.0 and has since been updated to React v16.4.1.