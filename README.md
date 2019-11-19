This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

The `src/resume.js` is the configuration file for the resume. You can edit the Javascript `resume` object to change the content of the shown resume. The Resume component expects an object with the following structure:
``` text
const resume = {
  header: {
    name
    links: [
      {
        href
        icon
        text
      },
      ...
    ],
  },
  summary: []string,
  sections: [
    {
      title
      subsections: [
        {
          title
          subtitle
          details: []string
        }
        ...
      ]
    },
    ...
  ]
}
```

The theme can be toggled between light and dark in the `src/App.js` file by passing either `lightTheme` or `darkTheme` in as a prop to the `<ThemeProvider />` component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.