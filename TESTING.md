# Testing

Return back to the [README.md](README.md) file.

## Code Validation
### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

Unfortunately, pages that require a user to be logged-in and authenticated (CRUD functionality), will not work using this method, due to the fact that the HTML Validator (W3C) doesn't have access to login to those pages.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fogc1231.github.io%2Fcomprehensible-spanish-frontend%2Findex.html) | ![screenshot](documentation/html-validation-home.png) | Section lacks header h2-h6 warning |
| Contact | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fogc1231.github.io%2Fcomprehensible-spanish-frontend%2Fcontact.html) | ![screenshot](documentation/html-validation-contact.png) | obsolete iframe warnings |
| Quiz | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fogc1231.github.io%2Fcomprehensible-spanish-frontend%2Fquiz.html) | ![screenshot](documentation/html-validation-quiz.png) | Pass: No Errors |
| Add Blog | n/a | ![screenshot](documentation/html-validation-add-blog.png) | Duplicate IDs found, and fixed |
| Checkout | n/a | ![screenshot](documentation/html-validation-checkout.png) | Pass: No Errors |
| x | x | x | repeat for all remaining HTML files |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

The css was copied from style.css and pasted directly into the validator and shows no errors. However when the live site link was used the validator showed parse errors caused by Boostrap and Fontawesome.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fogc1231.github.io%2Fcomprehensible-spanish-frontend) | ![screenshot](documentation/css-validation-style.png) | Pass: No Errors |
| checkout.css | n/a | ![screenshot](documentation/css-validation-checkout.png) | Pass: No Errors |
| x | x | x | repeat for all remaining CSS files |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

If using modern JavaScript (ES6) methods, then make sure to include the following
line at the very top of every single JavaScript file (this should remain in your files for submission):

    /* jshint esversion: 11 */

If you are also including jQuery (`$`), then the updated format will be:

    /* jshint esversion: 11, jquery: true */

This allows the JShint validator to recognize modern ES6 methods, such as:
`let`, `const`, `template literals`, `arrow functions (=>)`, etc.

**IMPORTANT**: External resources

Sometimes we'll write JavaScript that imports variables from other files, such as an array of questions
from `questions.js`, which are used within the main `script.js` file elsewhere.
If that's the case, the JShint validation tool doesn't know how to recognize unused variables
that would normally be imported locally in your code.
These warnings are acceptable to showcase on your screenshots.

The same thing applies when using external libraries such as Stripe, Leaflet, Bootstrap, Materialize, etc..
To instantiate these components, we need to use their respective declarator.
Again, the JShint validation tool would flag these as undefined/unused variables.
These warnings are acceptable to showcase on your screenshots.

Sample JS code validation documentation (tables are extremely helpful!):

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/js-validation-script.png) | Unused variables from external files |
| questions.js | ![screenshot](documentation/js-validation-questions.png) | Pass: No Errors |
| quiz.js | ![screenshot](documentation/js-validation-quiz.png) | Unused variables from external files |
| stripe_elements.js | ![screenshot](documentation/js-validation-stripe.png) | Undefined Stripe variable |
| x | x | x | repeat for all remaining JavaScript files |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox.png) | Works as expected |
| Edge | ![screenshot](documentation/browser-edge.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet.png) | Works as expected |
| Razer Blade 15 | ![screenshot](documentation/responsive-desktop.png) | Works as expected |
| 2K Monitor | ![screenshot](documentation/responsive-4k.png) | Noticeable scaling issues |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home Page| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/home_mobile.PNG) | Few warnings |
| Add Resource Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_desktop.PNG) | Some minor warnings |
| Home Page| Desktop | ![screenshot]() | Some minor warnings |
| Add Resource Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_mobile.PNG) | Some minor warnings |
| Add Resource Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_desktop.PNG) | Some minor warnings |
| Resource Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/resources_mobile.PNG) | Few warnings |
| Resource Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/resources_desktop.PNG) | Some minor warnings |
| Favourites Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/favourites_mobile.PNG) | Few warnings |
| Favourites Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/favourites_desktop.PNG) | Some minor warnings |
| Contact Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/contact_mobile.PNG) | Some minor warnings |
| Contact Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/contact_desktop.PNG) | Some minor warnings |
| Profile Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/profile_mobile.PNG) | Few warnings |
| Profile Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/profile_desktop.PNG) | No major warnings |
| Sign In Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signin_mobile.PNG) | No major warnings |
| Sign In Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signin_desktop.PNG) | Some minor warnings |
| Sign Up Page | Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signup_mobile.PNG) | No major warnings |
| Sign Up Page | Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signup_desktop.PNG) | Some minor warnings

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home Page - Logged Out | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| | Click on Resources link in navbar | Redirection to Resources page | Pass | |
| | Click on Sign in link in navbar | Redirection to Sign in page | Pass | |
| | Click on Sign up link in navbar | Redirection to Sign up page | Pass | |
| | Click on Explore Resources link on Homre Page | Redirection to Resources page | Pass | |
| Home Page - Logged In | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| | Click on Add Resources link in navbar | Redirection to Create Resource page | Pass | |
| | Click on Resources link in navbar | Redirection to Resources page | Pass | |
| | Click on Favourites link in navbar | Redirection to Favourites page | Pass | |
| | Click on Contact link in navbar | Redirection to Contact Form page | Pass | |
| | Click on Log out link in navbar | Open Log Out Modal | Pass | |
| | Click on Cancel Button in modal | Close Modal | Pass | |
| | Click on X Button in modal | Close Modal | Pass | |
| | Click on Log Out Button modal | Log Out user | Pass | |
| | Click on Profile link in navbar | Redirection to Profile page | Pass | |
| | Click on Explore Resources link on Home Page | Redirection to Resources page | Pass | |
| Sign In Page | | | | |
| | Click on Sign in button with both inputs empty | This field may not be blank alert appears | Pass | |
| | Click on Sign in button with password input empty | This field may not be blank alert appears | Pass | |
| | Click on Sign in button with username input empty | Must include "username" and "password" alert appears | Pass | |
| | Click on Sign in button with correct username & incorrect password | Unable to log in with provided credentials alert appears | Pass | |
| | Click on Sign in button with correct username & correct password | Signs in user and Redirection to previous page before sign in | Pass | |
| | Click on Don't have an account? Sign up now? link | Redirection to Sign Up page | Pass | |
| Sign Up Page | | | | |
| | Click on Sign up button with all inputs empty | This field may not be blank alert appears | Pass | |
| | Click on Sign up button with password inputs empty | This field may not be blank alert appears | Pass | |
| | Click on Sign up button with confirm password input empty | This field may not be blank alert appears | Pass | |
| | Click on Sign up button with non matching passwords | The two password fields didn't match alert appears | Pass | |
| | Click on Sign up button with password with less than 8 characters | This password is too short. It must contain at least 8 characters alert appears | Pass | |
| | Click on Sign up button with a simple or common password | This password is too common alert appears | Pass | |
| | Click on Sign up button with matching & secure passwords | Redirection to Sign in page | Pass | |
| | Click on Already have an account? Sign in link | Redirection to Sign in page | Pass | |
| Add Resource Page | | | | |
| | Click or tap to upload an image button | Opens file upload window | Pass | |
| | Click cancel button | Redirection to previous page | Pass | |
| | Click Create button with all information filled out except description | Redirection to resource page for the resource just created | Pass | |
| | Empty Image input or non image file uploaded | The submitted data was not a file. Check the encoding type on the form alert appears | Pass | |
| | Empty Title input | This field may not be blank alert appears | Pass | |
| | Empty URL input | This field may not be blank alert appears | Pass | |
| | Resource with same URL as previously created resource | resource with this resource url already exists alert appears | Pass | |
| | No Dialect choosen in dropdown | Please select an item in the list alert appears | Pass | |
| | No Level choosen in dropdown | Please select an item in the list alert appears | Pass | |
| | No Resource Type choosen in dropdown | Please select an item in the list alert appears | Pass | |
| Resources Page | | | | |
| | Search bar search | Show results contain the search keyword | Pass | |
| | Search bar search with non existent result | No results found. Adjust the search keyword. | Pass | |
| | Dialect Dropdown | Shows result containing the selected dialect keyword | Pass | |
| | Level Dropdown  | Shows result containing the selected level keyword | Pass | |
| | Media Type Dropdown  | Shows result containing the selected Media Type keyword | Pass | |
| | Click on a resource  | Redirection the resource page for that resource | Pass | |
| | Click on Heart icon under resource if not yet favourited by used  | Adds resource to user's favourites page | Pass | |
| | Click on Heart icon under resource if already favourited by used  | Removes resource from user's favourites page | Pass | |
| | Click on Heart icon under resource if not logged in | Sign in to add to favourites! alert appears | Pass | |
| | Click on a Popular Resource Icon | Redirection the resource page for that resource  | Pass | |
| Individual Resource Page | | | | |
| | Click on Profile icon/text | Redirection to profile page of user ho uploaded resource | Pass | |
| | Click on Open Link link | Opens resource URL in a new tab | Pass | |
| | Click on Three Dots icon on resource | Opens edit/delete dropdown | Pass | |
| | Click on Edit icon | Redirect to resource edit page | Pass | |
| | Click on Delete icon | Open Delete resource modal | Pass | |
| | Click on Cancel Button | Close Modal | Pass | |
| | Click on X Button | Close Modal | Pass | |
| | Click on Delete Button | Delete resource | Pass | |
| | Click on Heart icon under resource if not yet favourited by used  | Adds resource to user's favourites page | Pass | |
| | Click on Heart icon under resource if already favourited by used  | Removes resource from user's favourites page | Pass | |
| | Click on Heart icon under resource if not logged in | Sign in to add to favourites! alert appears | Pass | |
| | Click on a Popular Resource Icon | Redirection the resource page for that resource  | Pass | |
| | Click on a Post Button with empty comment | This field may not be blank alert appears | Pass | |
| | Click on a Post Button with comment entered | Posts comment below | Pass | |
| | Click on Three Dots icon on comment | Opens edit/delete dropdown | Pass | |
| | Click on Edit icon | Can edit comment | Pass | |
| | Click on Cancel Edit Button | Cancel comment editing | Pass | |
| | Click on Save Edit Button | Saves editied comment | Pass | |
| | Click on Delete Comment Icon | Open Delete comment modal | Pass | |
| | Click on Cancel Button | Close Modal | Pass | |
| | Click on X Button | Close Modal | Pass | |
| | Click on Delete Button | Delete comment | Pass | |
| Edit Resource Page | | | | |
| | Click the change image button | Change/upload new resource image file | Pass | |
| | Click cancel button | Redirection to previous page | Pass | |
| | Click Update button with all information filled out except description | Redirection to resource page for the resource just created | Pass | |
| | Empty Image input or non image file uploaded | The submitted data was not a file. Check the encoding type on the form alert appears | Pass | |
| | Empty Title input | This field may not be blank alert appears | Pass | |
| | Empty URL input | This field may not be blank alert appears | Pass | |
| | Resource with same URL as previously created resource | resource with this resource url already exists alert appears | Pass | |
| | No Dialect choosen in dropdown | Please select an item in the list alert appears | Pass | |
| | No Level choosen in dropdown | Please select an item in the list alert appears | Pass | |
| | No Resource Type choosen in dropdown | Please select an item in the list alert appears | Pass | |
| Profile Page | | | | |
| | Click on Three Dots icon on Profile Page | Opens edit profile dropdown | Pass | |
| | Click on Edit Profile | Redirect to edit profile page | Pass | |
| | Click on Change Username | Redirect edit username page | Pass | |
| | Click on Change Password | Redirect edit password page  | Pass | |
| | Click on a Resource | Redirection the resource page for that resource  | Pass | |
| | Click on a Popular Resource Icon | Redirection the resource page for that resource  | Pass | |
| | Click on Heart icon under resource if not yet favourited by used  | Adds resource to user's favourites page | Pass | |
| | Click on Heart icon under resource if already favourited by used  | Removes resource from user's favourites page | Pass | |
| | Click on Heart icon under resource if not logged in | Sign in to add to favourites! alert appears | Pass | |
| Edit Profile Page | | | | |
| | Click the change image button | Add/Change/upload new profile image file | Pass | |
| | Click the cancel button | Undo changes and redirect to profile page | Pass | |
| | Click the save button | Save changes and redirect to profile page | Pass | |
| Change Username Page | | | | |
| | Click the cancel button | Undo changes and redirect to profile page | Pass | |
| | Click the save button with empty input | This field may not be blank alert appears | Pass | |
| | Click the save button | Save changes and redirect to profile page | Pass | |
| Change Password Page | | | | |
| | Click the cancel button | Undo changes and redirect to profile page | Pass | |
| | Click the save button with empty input | This field may not be blank alert appears | Pass | |
| | Click the save button | Save changes and redirect to profile page | Pass | |
| Contact Form Page | | | | |
| | Submit with all inputs empty except subject | This field may not be blank alert appears | Pass | |
| | Submit with subject over 50 characters | Ensure this field has no more than 50 characters alert appears | Pass | |
| | Submit with all information inputed correctly | Redirect to confirmation page | Pass | |
| | User must enter a valid email address| Please enter an email address alert appears | Pass | |
| Confirmation Page | | | | |
| | Automatically redirect to Home page | Automatically redirect to Home page after 10 seconds | Pass | |
| Bad URL Page | | | | |
| | Click Return to resources page button | Redirection to resources page | Pass | |
| Authenticated Users | | | | |
| | Authenticated Users Tries to access Sign in Page | Redirected to Home page | Pass | |
| | Authenticated Users Tries to access Sign up Page | Redirected to Home page | Pass | |
| | Authenticated Users Tries to access non existent URL | Redirect The page you're looking for doesn't exist | Pass | |
| Unauthenticated Users | | | | |
| | Unauthenticated Users Tries to access Add Resource Page | Redirected to Home page | Pass | |
| | Unauthenticated Users Tries to access favourites Page | Redirected to Resources page | Pass | |
| | Unauthenticated Users Tries to access Profiles Page | Redirect The page you're looking for doesn't exist | Pass | |
| | Unauthenticated Users Tries to access Profiles Edit Specfic User Profile Page | Redirect The page you're looking for doesn't exist | Pass | |
| | Unauthenticated Users Tries to access Profiles Edit Page | Redirect The page you're looking for doesn't exist | Fail | Redirects to an endless loading profile page |
| | Unauthenticated Users Tries to access non existent URL | Redirect The page you're looking for doesn't exist | Pass | |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature01.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature02.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature03.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature04.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature05.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature06.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature07.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature08.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature09.png) |
| repeat for all remaining user stories | x |

## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

## Bugs

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/ogc1231/comprehensible-spanish-frontend/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/ogc1231/comprehensible-spanish-frontend/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/5) | Open |

## Unfixed Bugs


- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

There are no remaining bugs that I am aware of.
