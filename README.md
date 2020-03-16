# Albany Beck Task

## Installation Instructions

`npm i`
`npm run start`
`Navigate to localhost:4200`

## Run tests (incomplete)
`npm run test`

## How the application works

As the application wasn't designed with NGRX, this application is reliant on simple parent and child communication to manage state. With this approach, it's important to keep components as 'dumb' as possible so that they are easier to unit test. To achieve this, state is managed by the app component.

A service was created for fetching data from the API. It utilises error handling which was implemented with RxJS.

To prevent successive API calls, the region-countries component uses flags to determine if the data is already retrieved.

## CSS Coding Standards

SCSS was chosen due to reusable CSS and familiarity

## What I would do if given more time

- Utilse NGRX for managing state and preventing API calls
- Finish the unit tests with Jest and enable code coverage
- Code cleanup
- Styling. Using the BEM methodology for appropriate class names
- Type all variables

## Going forward

I will create another branch on my GitHub to convert this application to NGRX as I am keen to learn the technology.



