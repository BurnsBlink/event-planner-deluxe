It's time to focus on the front-end! Think of your favorite conference, convention, or category of event. Is there one you look forward to every year? We're going to design and build for them a snappy new React.js app, using all the latest CSS tricks, so that it even looks good on mobile devices. Are you ready to get cracking?

## Introduction

We've created a simple, unstyled single-page application (SPA) for your event. It has a landing page, a registration form, and a list of registered attendees. And since it's completely unstyled, it looks about as dreadful as you'd expect. Drawing inspiration from your favorite event (or type of event, or fantastical event of your own imagining), you'll be wireframing improved designs, using CSS to implement those designs, and even building a styleguide.

This challenge is a longer, multi-part challenge, so take your time and make thoughtful choices. You'll be working with the colors and fonts that you select through several sessions, so you'd better not pick anything you're going to come to loathe.

## Getting Started

From your challenges directory, run the following:

```sh
$ et get event-planner-deluxe
$ cd event-planner-deluxe
$ bundle install
$ npm install
```

Then open up the `react/src/constants/event.js` file, and edit the `event` JavaScript object you find there to match your chosen event.

```javascript
const event = {
  name: <Your Event Name>,
  organizer: <Your Event Organizer>,
  date: new Date(<Date of Your Event>),
  venue: <Venue For Your Event>,
  address: <Event Venue Address>
};

```

Then you'll need two terminal tabs (one for the React.js app, and the other for the Sinatra server providing the back-end.) In the first tab, run:

```sh
$ npm start
```

In the second tab, run:

```sh
$ ruby server.rb
```

Open up a browser to `http://localhost:4567` and voila! That looks dreadful (I warned you it would!)

![Unstyled Deluxe Event Landing Page](https://s3.amazonaws.com/horizon-production/images/web-design-challenge-unstyled.png)

## Part One

Your Event Registration App is quite generic. Pick a specific event for this
application so people can register to attend.

Here are a few ideas, but don't be afraid to come up with your own!

* Renaissance Fair
* Video Game Themed (e.g.- Pax, E3, Bit Fest, etc)
* Art Gallery Opening

Using wireframes, sketch out what you would like your application would look like.
Consider a Mobile-first approach (e.g. - create two wireframes, one for mobile
and one for desktop).

## Part Two

Based on your planning in Part One of this challenge, choose colors and typography
to bring your Event Registration App to life.

Spend time styling your application by applying your choices. Using your wireframes
as a guide, arrange components on the page using a CSS grid system.

## Part Three (Optional)

* Integrate Sass into your application.
* Build a Styleguide.

## Part Four (Optional)

Currently, we don't have any tests for our React code! Add in the enzyme testing
library and write tests for your application.

## Resources

* [Creating Style Guides - Susan Robertson](https://alistapart.com/article/creating-style-guides)
* [Styleguide Generators](https://github.com/davidhund/styleguide-generators)
