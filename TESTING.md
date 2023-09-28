# Testing
Return back to the [README.md](README.md) file.

## Automated Testing
I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

### ESLint Validation
I have used the recommended [JShint Validator](https://eslint.org/) to validate all of my JS files.

All JavaScript code was validated using the integrated ESLint JavaScript validator following this [Guide](https://gist.github.com/ianmeigh/8e603b91a38d7829d959402bfcf29d3d) to validate all of my JS files.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/eslint.PNG)

## Manual Testing
### CSS Validation
I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

The css was copied from name.module.css and pasted directly into the validator and shows no errors. However when the live site link was used the validator showed parse errors caused by Boostrap and Fontawesome.

| File | Screenshot | Notes |
| --- | --- | --- |
| App.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/App.module.png) | Pass: No Errors |
| Asset.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/Asset.module.png) | Pass: No Errors |
| Avatar.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/Avatar.module.png) | Pass: No Errors |
| Button.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/Button.module.png) | Pass: No Errors |
| Comment.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/Comment.module.png) | Pass: No Errors |
| CommentCreateEditForm.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/CommentCreateEditForm.module.png) | Pass: No Errors |
| ContactForm.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/ContactForm.module.png) | Pass: No Errors |
| ContactFormConfirmation.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/ContactFormConfirmation.module.png) | Pass: No Errors |
| FilterDropdown.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/FilterDropdown.module.png) | Pass: No Errors |
| HomePage.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/HomePage.module.png) | Pass: No Errors |
| ModalAlert.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/ModalAlert.module.png) | Pass: No Errors |
| MoreDropdown.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/MoreDropdown.module.png) | Pass: No Errors |
| NavBar.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/NavBar.module.png) | Pass: No Errors |
| NotFound.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/NotFound.module.png) | Pass: No Errors |
| PopularResource.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/PopularResource.module.png) | Pass: No Errors |
| PopularResources.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/PopularResources.module.png) | Pass: No Errors |
| ProfilePage.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/ProfilePage.module.png) | Pass: No Errors |
| Resource.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/Resource.module.png) | Pass: No Errors |
| ResourceCreateEditForm.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/ResourceCreateEditForm.module.png) | Pass: No Errors |
| ResourcesPage.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/ResourcesPage.module.png) | Pass: No Errors |
| SignInUpForm.module.css | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/SignInUpForm.module.png) | Pass: No Errors |

## Browser Compatibility
I've tested my deployed project on multiple browsers to check for compatibility issues. Development was carried out using Mozilla Firefox as web browser

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Firefox - Homepage | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/firefox.PNG) | Works as expected |
| Chrome - Homepage | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/chrome.PNG) | Hero section is larger then on Firefox |
| Edge - Homepage | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/edge.PNG) | Hero section is larger then on Firefox |
| Firefox - Resources Page | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/firefox_resources.PNG) | Works as expected |
| Chrome - Resources Page | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/chrome_resources.PNG) | Works as expected |
| Edge - Resources Page | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/edge_resources.PNG) | Works as expected |
| Firefox - Profile/modal | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/firefox_profile_modal.PNG) | Works as expected |
| Chrome - Profile/modal | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/chrome_profile_modal.PNG) | Works as expected |
| Edge - Profile/modal | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/edge_profile_modal.PNG) | Works as expected |

## Responsiveness
I've tested my deployed project on multiple devices to check for responsiveness issues.

| Page | Device | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/home_iphone11.PNG) | Works as expected |
| Home | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/home_ipadpro.PNG) | Too much bottom margin |
| Home | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/home_laptop.png) | Works as expected |
| Home | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/home_monitor.png) | Works as expected |
| Sign In | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signin_iphone11.PNG) | Works as expected |
| Sign In | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signin_ipadpro.PNG) | Too much top/bottom margin |
| Sign In | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signin_laptop.png) | Works as expected |
| Sign In | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signin_monitor.png) | Works as expected |
| Sign Up | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signup_iphone11.PNG) | Works as expected |
| Sign Up | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signup_ipadpro.PNG) | Too much top/bottom margin |
| Sign Up | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signup_laptop.png) | Works as expected |
| Sign Up | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/signup_monitor.png) | Works as expected |
| Add Resource | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_iphone11.PNG) | Works as expected |
| Add Resource | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_ipadpro.PNG) | Too much bottom margin |
| Add Resource | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_laptop.png) | Works as expected |
| Add Resource | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_monitor.png) | Works as expected |
| Resource | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/iresource_iphone11.PNG) | Works as expected |
| Resource | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/iresource_ipadpro.PNG) | Works as expected |
| Resource | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/iresource_laptop.png) | Works as expected |
| Resource | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/iresource_monitor.png) | Works as expected |
| Profile | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/profile_iphone11.PNG) | Works as expected |
| Profile | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/profile_ipadpro.PNG) | Works as expected |
| Profile | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/profile_laptop.png) | Works as expected |
| Profile | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/profile_monitor.png) | Works as expected |
| Contact Form | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/contact_iphone11.PNG) | Works as expected |
| Contact Form | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/contac_ipadpro.PNG) | Works as expected |
| Contact Form | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/contact_laptop.png) | Works as expected |
| Contact Form | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/contact_monitor.png) | Works as expected |
| Modal | iPhone 11 (DevTools) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/modal_iphone11.PNG) | Works as expected |
| Modal | Ipad Pro (DevTools - Portrait) | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/modal_ipadpro.PNG) | Works as expected |
| Modal | Razer Blade 15 | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/modal_laptop.png) | Works as expected |
| Modal | Standard Office Monitor | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/modal_monitor.png) | Works as expected |

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
| As a general site user I can view a navbar from every page, so that I can navigate easily between pages. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/navbar_logged_out.png) |
| As a general site user I can navigate through pages quickly, so that I can view content seamlessly without page refresh.| ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/navbar_logged_out.png) |
| As a new site user I can create a new account, so that I can access all the features for authenticated users. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/signup_page.png) |
| As a authenticated site I can sign into the website, so that I can access the full functionality for authenticated users. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/signin_page.png) |
| As a authenticated site user I can tell if I am logged in or not, so that I can log in if I need to. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/navbar_logged_in.png) |
| As a authenticated site I can maintain my logged-in status until I choose to log out, so that my user experience is not compromised. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/home_signed_in.png) |
| As a new site user I can see sign in and sign up options, so that I can sign in/sign up when I want. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/home_signed_out.png) |
| As a authenticated site I can view my own and others user's avatars, so that I can easily identify users of the application. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/avatar.png) |
| As a authenticated site user I can create resources, so that I can share them with other Spanish Learners. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/add_resource_laptop.png) |
| As a general site user I can view the details of an individual resource, so that I can learn more about it. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/iresource_laptop.png) |
| As a general site user I can view all resources that have been created by all users, so that I can discover new resources or accents and learn more about them. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/testing-assets/resources_out.png) |
| As a authenticated site user I can favourite a resource, so that it is added to my list of favourites for easy access in the future. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/favourites_page.png) |
|  | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/add_to_favourites_logged_in.PNG) |
| As a authenticated site user I can unfavourite a resource, so that it is removed from my list of favourites. | ![screenshot]() |
|  | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/remove_from_favourites.PNG) |
| As a general site user I can view most the popular resources ordered by most favourited/popular first, so that I can see what is the most popular content and learn more about them. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/popular_resources.png) |
| As a general site user I can search for resources with keywords, so that I can find the resources I am most interested in. | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/search_bar.png) | 

|  | ![screenshot]() | 
|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 

|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 
|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 
|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 
|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 

|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 
|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 

|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 
|  | ![screenshot]() |
|  | ![screenshot]() | 
|  | ![screenshot]() | 


### GitHub **Issues**
**Closed Issues**
| Issue | Status |
| --- | --- |
| [USER STORY 1: Navigation](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/1) | Closed |
| [USER STORY 2: Routing](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/2) | Closed |
| [USER STORY 3: Sign Up](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/3) | Closed |
| [USER STORY 4: Sign In](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/4) | Closed |
| [USER STORY 5: Logged in Status](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/5) | Closed |
| [USER STORY 6: Refreshing Access Tokens](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/6) | Closed |
| [USER STORY 7: Conditional Rendering](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/7) | Closed |
| [USER STORY 8: Avatar](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/8) | Closed |
| [USER STORY 9: Create Resource](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/9) | Closed |
| [USER STORY 10: View Indivdual Resources](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/10) | Closed |
| [USER STORY 11: View All Resources Created By All Users](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/11) | Closed |
| [USER STORY 12: Favourite A Resource](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/12) | Closed |
| [USER STORY 13: Unfavourite A Resource](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/13) | Closed |
| [USER STORY 14: Most Popular Resources](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/14) | Closed |
| [USER STORY 15: Search Resources](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/15) | Closed |
| [USER STORY 16: Infinite scroll](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/16) | Closed |
| [USER STORY 17: No Results Found](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/18) | Closed |
| [USER STORY 18: Edit Own Resource](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/19) | Closed |
| [USER STORY 19: Delete Own Resource](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/20) | Closed |
| [USER STORY 20: Resource Date](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/21) | Closed |
| [USER STORY 21: View Resource Owner](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/22) | Closed |
| [USER STORY 22: Edit Profile](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/23) | Closed |
| [USER STORY 27: View Own Resources](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/28) | Closed |
| [USER STORY 28: Dialect Dropdown Filter](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/29) | Closed |
| [USER STORY 29: Level Dropdown Filter](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/30) | Closed |
| [USER STORY 30: Media type Dropdown Filter](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/31) | Closed |
| [USER STORY 31: Contact Form](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/32) | Closed |
| [USER STORY 32: Confirmation Page](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/33) | Closed |
| [USER STORY 33: Log Out](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/34) | Closed |
| [USER STORY 34: Open Resource URL](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/35) | Closed |
| [USER STORY 35: Confirm Deletion](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/36) | Closed |
| [USER STORY 36: Confirm Log Out](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/37) | Closed |
| [USER STORY 37: View a Homepage](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/38) | Closed |
| [USER STORY 38: Dialect Tags](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/39) | Closed |
| [USER STORY 39: Level Tags](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/40) | Closed |
| [USER STORY 40: Media Type Tags](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/41) | Closed |


**Open Issues**
| Issue | Status |
| --- | --- |
| [USER STORY 41: Confirmation Toast Messages](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/42) | Open |
| [USER STORY 26: Add books and Other Resources](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/27) | Open |
| [USER STORY 25: Dark Mode](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/26) | Open |
| [USER STORY 24: Delete Account](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/25) | Open |
| [USER STORY 23: Reset Password by Email](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/24) | Open |

**Milestones**
Milestones were used to group issues.

| Milestone | Status |
| --- | --- |
| [MVP Release](https://github.com/ogc1231/comprensible-spanish-api/milestone/3) | Closed |
| [Second Iteration](https://github.com/ogc1231/comprehensible-spanish-frontend/milestone/4) | Closed |
| [Third Iteration](https://github.com/ogc1231/comprehensible-spanish-frontend/milestone/5) | Closed |
| [Bugs](https://github.com/ogc1231/comprehensible-spanish-frontend/milestone/6) | Open |
| [Setup & Deployment](https://github.com/ogc1231/comprensible-spanish-api/milestone/2) | Closed |
| [Documentation & Testing](https://github.com/ogc1231/comprensible-spanish-api/milestone/1) | Closed |

## Bugs
**Fixed Bugs**
All previously closed/fixed bugs can be tracked [here](https://github.com/ogc1231/comprehensible-spanish-frontend/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [BUG 2: Modal Not Closing On Confirmation (SOLVED)](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/44) | Solved |
| [BUG 4: Comment State Not Updating on Delete (SOLVED)](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/46) | Solved |
| [BUG 5: Add Resource Form Not Focusable in Chrome (SOLVED)](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/47) | Solved |
| [BUG 6: Log Out Modal Showing on Sign In (SOLVED)](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/48) | Solved |
| [BUG 7: Can't perform a React state update on an unmounted component (SOLVED)](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/54) | Solved |

## Unfixed Bugs
| Bug | Status |
| --- | --- |
| [BUG 1: Dropdowns Don't Show State in Resource Edit](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/43) | Open |
| [BUG 3: Favourites State Not Updating](https://github.com/ogc1231/comprehensible-spanish-frontend/issues/45) | Open |

