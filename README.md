> _[Link to "Users list" GitHub Pages](https://Andrejb596.github.io/Users-list)_

## App plan and progress:

- [x] Create project
- [-] Setup dependencies
  - [x] Eslint
  - [x] Husky
  - [x] Css (css-modules, global styles)
- [x] Implement basic navigation
  - [x] `/users` - User page
  - [x] Not found page
- [x] Header with a menu (link to pages)
- [ ] Setup api services (axios)
- [ ] Setup store (@redux/toolkit)
- [ ] Users page (react-table/mui-table)
- [ ] User page (Info about user)
  - Navigation `/user/{id}`
  - User store
  - User view (component)
- [ ] Modal window component
- [ ] "Create user" button
- [ ] "Create user" form
- [ ] Add created user to list

### File structure:

`/assets` - Global static assets such as images, svgs, company logo, etc.

`/services` - JavaScript modules (REST api, local storage, etc)

`/components` - Global shared/reusable components, such as layout (wrappers, navigation), form components, buttons

`/constants` - global values, variables that are used across multiple pages

`hooks` - global hooks that are used across multiple pages

`/pages` - folder should contain one folder for each page in your application. Inside of those page specific folders should be a single root file that is your page (generally index.js) alongside all the files that are only applicable to that page.

`/routes` - app navigation

`/store` - Global Redux store

`/styles` - Global project styles

`/utils` - Utilities, helpers, constants, and the like
