# Drcryptoid

### By Andy Grossberg

## Description
An Angular application rendering a cryptocurrency-focused news blog and forum.

## Rules
**Site Rebuild**

We're almost 75% of the way through Epicodus (not including our internship) and it's time to start building more portfolio pieces!

Over the next two weeks, we'll rebuild a site of your choice using Angular, as described in the Code Review Prep: Rebuilding a Site with Angular lesson from earlier this week. Refer back to this lesson for more details, and an explanation of how the project will be evaluated.

Today, I will focus on planning your application and building and separating your application into components. If I have additional time, I'll consider adding a pipe and jumping into next week's content (such as adding a database or a router).

**NOTE:**
I am NOT rebuilding a site per se but rather following a common design pattern of similar sorts of blog sites with active components. The advantage here is that while learning on the job programming the site I am also not carrying the same amount of overhead that a full-fledged CMS like Wordpress brings with it and I will have more control of my components.

**Building Out The Application**

Once I have built out the basic structure of my application and separated the code into working components, I'll consider adding:

1) More directives (practice with ngIf, ngFor, and more).
2) Full CRUD functionality that changes the models.
3) Firebase (a noSQL database) instead of a hard-coded dataset.
4) Seed data for your database.
5) Pipes for filtering data.
6) A router for adding additional pages.
7) Authentication and route guards.
8) Deployment (as a dry run for next week).
9) API calls.
10) CSS styling.
11) Tests using Jasmine and Protractor.

**Objectives**

*The project will be reviewed on the following objectives:*

1) Project includes a detailed README with information on all completed features as well as features to be added.

2) Project includes a detailed commit history that clearly shows at least eight hours of work between 8 and 5 on Friday. You are also welcome to put additional work into your project outside of that time frame.

3) Project demonstrates understanding of this week's concepts. If prompted, I am able to discuss code with an instructor using correct terminology.

## User Stories
There will be two levels of user for this site: Administrator and Reader.

**READER**
* A Reader can see detailed article headlines and a lead paragraph sample about crypto currencies, read them, and open a window linking to the original on their host.

* A Reader can see blog article post headlines and a lead paragraph sample on the top pages

* A Reader can click on an article and that article will expand on the page to be read and then optionally closed (can it scroll?)

* A Reader can search the site's articles for keywords

* A Reader can see a ticker of cryptocurrency values for major coins.
- LIKE TO HAVE: The reader can click on a currency and get details

* A Reader can see #crypto and #cryptocurrency tweets from Twitter on the page
- LIKE TO HAVE: The tweets will update periodically.

* A Reader can log in to the forum, post, and read posts.
- LIKE TO HAVE: A Reader can respond to other posts

**ADMIN**
* An Admin can post read, edit, and delete blog posts on the site.

* An Admin can post, read, edit, and delete articles on the site.

* An Admin can post, read, edit, and delete forum posts.

* An Admin can add, edit, or delete users to and from the database
- LIKE TO HAVE: An Admin can suspend users for TOS violations

* An Admin can post featured articles to a ticker

## Specifications

**Ignoring all previous specs**
This project has been reconfigured due to my new ability to use firebase for data persistence.
The project is divided into sections:
1) The articles
2) The comments
3) The widgets
4) Authorization and login stuff
5) The forum
6) Authorization and login
* 1a) Admin level and rights
* 2a) User level and rights

Then I will refactor and make it look pretty.

* App component created and functional

* 'Article' model created

* 'Article' component created and functional

* database created and functioning

* Article Service created

* Router implemented

* About component created

* About page routes to top page

* Articles removed from app.component.html and article "top page" created

* Top page shows mock articles from Article component for now.

* Database modified to hold article structure

* Mock articles uploaded to db

* Articles displayed correctly
  * Articles show upvotes and downvotes

* User can link from title and lede on top page to a page for the article and back

* User can get to inactive Admin dashboard from 'login'

* Articles can be created (Admin level assumed)

* Articles can be deleted (Admin level assumed)

* Articles can be updated (Admin level assumed)

* BACK buttons added to Add Article and Update Article <--

* Buttons blank their forms and/or return to top page on Click

* Proper display of Article on pages

**Look into why the stupid thing won't update headlines correctly!**
**Look into why articles update sometimes adds an article**

* Admin page is working

* Articles can have comments added

* Article upvoting increments and decrements voting as needed

* Articles appear with CR/LF between paragraphs

* Create User model with privileges

* Create user/admin login authorization

* CRUD tasks, comments and voting are limited by user Level.

* Pretty up the UI

* Refactor code as needed.

## Methodology and Comments

I began by trying to adapt the online store lesson from learnhowtoprogram.com and went on from there. In the process I rebuilt my logic from the ground up on more than one occasion. (I even found a bug in Angular where a reserved word as a part of a parameter name included in the constructor of an object renders the argument undefined.)

## Technologies Used

* HTML
* CSS
* Typescript/Javascript
* Node
* Angular
* Firebase

## Dependencies and plugins

**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Angular/ *

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0
* tslint
* typescript

## Setup/Installation Requirements
* You can find the app online at: https://drcryptoid-23.firebaseapp.com/ 
**otherwise:**
* Download the project from the repository https://github.com/agro23/drcryptoid
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory

* Type "npm install dotenv-webpack --save-dev" to process environment variables (if you don't have Dotenv installed).
* Type "npm install typescript -g" (unless you already have Typescript installed)
* Type "npm install -g @angular/cli@1.6.5 --save" (unless you already have Angular installed)
  - If you're on a Mac and get an error: Type "brew upgrade node"
* Type "npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save" to add firebase if you don't have it.
  - The app's key will be provided in a separate file (OR YOU WILL HAVE TO GET YOUR OWN!).
* Add: ",
    "types": [ "firebase" ]" to the end of your tsconfig.json file if it's not in there.
* Type "npm install"
* Type "ng serve"
* Point your browser to localhost:4200

## Future expansion
I didn't get anywhere near as much done as I would have liked. I need to make sure the entries in the database are correct. Once the database CRUD is stable I can put in real articles, allow comments, and implement upvote/downvote. After that I need to implement user authentication (almost trivial with Google!) so that users and moderators and admin are separate levels. Then the blog is able to be deployed. Belss and whistles come later. I'd like to enable forums and maybe separate articles from forum posts. It would be nice to have the crypto widgets working right. I'd also like to be able to add more market data about cryptos and also let users navigate some custom forecasting tools and apply formulae to their chosen crypto. I'd also like to have a "portfolio" section where they can gauge the value of their cryptos and maybe make informed decisions about when to buy and sell. Also, it would be neat if the site could grab articles about cryptocurrencies from the internet periodically and post them to the front page, functionally indistinguishable from blog posts and other linked articles

## Known Bugs and Issues

There are no known bugs at this time.

## Support and contact details

**Contact the author at andy.grossberg@gmail.com**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
