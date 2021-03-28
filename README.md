[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://GitHub.com/Naereen/)
[![ForTheBadge makes-people-smile](http://ForTheBadge.com/images/badges/makes-people-smile.svg)](http://ForTheBadge.com)
[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)

# UniPals

## Inspiration

The recent COVID-19 pandemic has severely affected the social aspects of many university students throughout the country. The shift from in-person to online teaching has made it harder for students to proactively make friends virtually. In order to solve this issue, we decided to develop a social media platform designed for university students in mind.

## What it does

UniPals is a website that allows users, specifically university students, to connect with others and socialize.

## How we built it

We utilized the following technology stack to build UniPals:

- Front-End
  - React.js
  - Semantic UI
  - UI-Avatars
- Back-End
  - Django
- Database
  - SQLite

UniPals utilizes Django's built-in authentication and database support to quickly develop a user login system.

## Challenges we ran into

We encountered many challenges along the way while developing UniPals:

1. Website Design
   - Before beginning the hackathon, we did not take time to come up with a design. Thus, we had to come up with a robust design as we simultaenously develop the logic behind it, taking up more time than necessary.
2. Technical Difficulties
   - Our team made use of VSCode Live Share to develop UniPals together in realtime. However, one of our back-end developers had immense troubles trying to solve an error related to VSCode that prevented active contribution in realtime
   - Our team spent an entire day determining how to best integrate Django-based registration/authentication with frontend API calls

## Accomplishments that we're proud of

We are quite proud of the entire project overall. We never attempted to develop software in a limited time frame, but we grew a lot from doing so.

## What we learned

1. Integrate React builds with a Django backend
2. Create and test API endpoints
3. Register and authenticate users
4. Cache login tokens
5. Execute Python scripts through an API call
6. Define, serialize, and view database models/schemas
7. Handle frontend/backend routes through a single URL

## What's next for UniPals

We plan to do the following:

1. Refactor most of the codebase for more reusability and better readability.
2. Switch from SQLite to a Database-as-a-Service, such as Firebase or AWS for better scalability.
3. Improve the overall design and aesthetics.
4. Add additional authentication (2FA, social logins) for better security and easier logins.
