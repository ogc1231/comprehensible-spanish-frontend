# COMPREHENSIBLE SPANISH RESOURCES - FRONTEND

This is the website for Comprehensible Spanish Resources, a user curated directory of Spanish Language resources to suit your needs whatever your level. The aim of this website to is provide a place where Spanish learners can find Comprehensible Spanish content that suits their needs whatever their level with resources ranging from those specifically designed for beginners to Advanced Native content all in one place. The advantage of this website is that users can upload resources which they have found useful and share them with other learners. The resources can also be filtered by dialect so users can hear the different accents of 20 different Spanish speaking countries, Puerto Rico & The Canary Islands.

The objective of this website was to create an Interactive Front-End application with REACT.js that consumes API data. 

[Live link to website](https://comp-spanish-frontend-811d88a7f64a.herokuapp.com/)

[Backend API repository ](https://github.com/ogc1231/comprensible-spanish-api)

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/mockup.PNG)

## UX
### Colour Scheme
- `#F08080` used for main background colour.
- `#212529` used for main text colour.
- `#2142B2` used for main button colour.
- `#FFFFFF` used for navbar background colour.
- `#cfced3` used for main icon colour.
- `#F8F8F8` used for resource background colour.
- `#E9E9ED` used dropdown filter background colour.
- `#000000` used for country/dialect filter tag colour.
- `#90EE90` used for youtube resource type tag colour.
- `#87CEFA` used for podcast resource type tag colour.
- `#0ED4D4` used for begginner level tag colour.
- `#FF7F3C` used for intermediate level tag colour.
- `#FF2E65` used for advanced level tag colour.
- `#CA37CA` used for easy native level tag colour.
- `#24DB36` used for advanced native level tag colour.

I used [coolors.co](https://coolors.co/ffffff-f8f8f8-e9e9ed-cfced3-212529-000000-f08080) to generate my colour palette.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/coolors1.png)
![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/coolors2.png)

### Typography
- [Readex Pro](https://fonts.google.com/specimen/Readex+Pro) was used for all text with a sans-serif backup font.
- [fontawesome](https://fontawesome.com/) was used for all icons excluding difficulty level icons.
- [canva](https://www.canva.com/) was used to create the difficulty level icons.

## User Stories
### General Site Users
- As a general site user I can view a navbar from every page, so that I can navigate easily between pages. `(MUST HAVE)`
- As a general site user I can navigate through pages quickly, so that I can view content seamlessly without page refresh. `(MUST HAVE)`
- As a general site user I can view the details of an individual resource, so that I can learn more about it. `(MUST HAVE)`
- As a general site user I can view all resources that have been created by all users, so that I can discover new resources or accents and learn more about them. `(MUST HAVE)`
- As a general site user I can open the resource's URL, so that I can view/listen to the content. `(MUST HAVE)`
- As a general site user I can view most the popular resources ordered by most favourited/popular first, so that I can see what is the most popular content and learn more about them. `(SHOULD HAVE)`
- As a general site user I can search for resources with keywords, so that I can find the resources I am most interested in. `(SHOULD HAVE)`
- As a general site user I can keep scrolling through the resources on the site which are loaded for me automatically, so that I don't have to click on "next page" for a smoother user experience. `(SHOULD HAVE)`
- As a general site user  if the keywords I am searching for don't exist I will be told that no results were found, so i can adjust my search keyword. `(SHOULD HAVE)`
- As a general site user I can view a homepage, so that can easily understand the purpose of the website. `(SHOULD HAVE)`
- As a general site user I can see how long ago a resource was created, so I know when it was created/updated. `(SHOULD HAVE)`
- As a general user I can see the profile of who created a resource, so I can view their profile and the other resources they have created. `(COULD HAVE)`
- As a general site user I can filter the resources by dialect, so I see the resources that suit my needs. `(COULD HAVE)`
- As a general site user I can filter the resources by difficulty level, so I see the resources that suit my needs. `(COULD HAVE)`
- As a general site user I can filter the resources by media type, so I see the resources that suit my needs. `(COULD HAVE)`
- As a general site user I can filter the resources by dialect, so I see the resources that suit my needs. `(COULD HAVE)`
- As a general site user I can filter the resources by difficulty level, so I see the resources that suit my needs. `(COULD HAVE)`
- As a general site user I can filter the resources by media type, so I see the resources that suit my needs. `(COULD HAVE)`
- As a general site user I can see what dialect the resource is easily, so that I have the content that suits my needs. `(COULD HAVE)`
- As a general site user I can see what level the resource is easily, so that I have the content that suits my needs. `(COULD HAVE)`
- As a general site user I can see what Media Type the resource is easily, so that I have the content that suits my needs. `(COULD HAVE)`
- As a general sit user I can switch on dark mode, so choose which colour layout I prefer. `(WON'T HAVE)`


### New Site Users
- As a new site user I can create a new account, so that I can access all the features for authenticated users. `(MUST HAVE)`
- As a new site user I can see sign in and sign up options, so that I can sign in/sign up when I want. `(MUST HAVE)`

### Authenticated Site Users
- As a authenticated site user I can sign into the website, so that I can access the full functionality for authenticated users. `(MUST HAVE)`
- As a authenticated site user I can tell if I am logged in or not, so that I can log in if I need to. `(MUST HAVE)`
- As a authenticated site user I can maintain my logged-in status until I choose to log out, so that my user experience is not compromised. `(MUST HAVE)`
- As a authenticated site user I can log out of my account, so that my data is safe. `(MUST HAVE)`
- As a authenticated site user I can view my own and others user's avatars, so that I can easily identify users of the application. `(MUST HAVE)`
- As a authenticated site user I can create resources, so that I can share them with other Spanish Learners. `(MUST HAVE)`
-  As a authenticated site user I can edit my resource image, title, description, URL, type, dialect & difficulty so that I can make corrections or update my resource after it was created. `(MUST HAVE)`
- As a authenticated site user I can delete my own resource if it doesn't belong in the list of resources i.e not in Spanish. `(MUST HAVE)`
- As a authenticated site user I can edit my profile so that I can change my profile picture, username and password. `(MUST HAVE)`
- As a authenticated site user I can favourite a resource, so that it is added to my list of favourites for easy access in the future. `(SHOULD HAVE)`
- As a authenticated site user I can unfavourite a resource, so that it is removed from my list of favourites. `(SHOULD HAVE)`
- As a authenticated site user I view resources I have added, so can access theme easily to edit or delete or add comments. `(SHOULD HAVE)`
- As a authenticated site user I can confirm deletion of a comment or resource, so that I don't accidentally delete something. `(SHOULD HAVE)`
- As a authenticated site user I can confirm my log out, so that I don't log out accidentally. `(SHOULD HAVE)`
- As a authenticated site user I can submit a contact form, so I request or provide information to the site admins. `(COULD HAVE)`
- As a authenticated site user I receive confirmation my contact form has been submitted, so I know my query has been sent. `(COULD HAVE)`
- As a authenticated site user I can reset my password, so I can log into my account if I forget the password. `(WON'T HAVE)`
- As a authenticated site user I can delete my account, so that my account can not be accessed anymore. `(WON'T HAVE)`
- As a authenticated site user I can add books and other types of resources, so I can share these useful resources with other users. `(WON'T HAVE)`
- As a authenticated site user I can see confirmation messages on submission of a form, so that I know the action has successfully worked. `(WON'T HAVE)`

## Wireframes
To follow best practice, wireframes were developed for mobile and desktop sizes to act as a design guide for the website.

I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Home Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/homepage_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/homepage_wireframe.png) |

### Resources/Favourites Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/resources_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/resources_wireframe.png) |

### Resource Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/resource_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/resource_wireframe.png) |

### Signin Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/signin_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/signin_wireframe.png) |

### Signup Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/signout_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/signup_wireframe.png) |

### Profile Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/profile_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/profile_wireframe.png) |

### Contact Page Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/contact_mobile_wireframe.png) |
| Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/contact_wireframe.png) |

### Modal Wireframes
| Size | Screenshot |
| --- | --- |
| Mobile/Desktop | ![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/wireframes/modal_wireframe.png) |

## Features
### Existing Features

- **Favicon/Logo**

    - Used for website logo and favicon.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/logo-favicon.png)

- **Home Page Logged Out**

    - This is where the user will be brought to when first entering the website. The users eyes will be drawn to the hero section and the explore resources call to action, from the homepage a new user has access to the pages that don't require authentication such as resources, sign in and sign up pages.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/home_signed_out.png)

- **Home Page Logged In**

    - From the homepage a authenticated user has access to the pages that require authentication such as add resource, favourites, contact, log out and profile pages.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/home_signed_in.png)

- **Navbar Logged Out**

    - Show links to pages available for non-authenticated users

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/navbar_logged_out.png)

- **Navbar Logged In**

    - Show links to pages available for authenticated users

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/navbar_logged_in.png)

- **Navbar Mobile**

    - Nav bar collapse into a dropdown burger menu on mobile devices

![screenshot]()

- **Add Resource Page**

    - Authenticated user can create a new resource

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/add_resource_page.png)

- **Resources Page**

    - Users can see all resources added by all users, filter resources by keywords or use the dropdown filters for specfic search and view most popular resources (resources that have been favourited the most times). Authenticated users can favourite and unfavourite resources.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/resources_page.png)

- **Resource Page**

    - User can view the full details of a resource including the resource URL and description. Authenticated user can post, delete and edit their own comments and view other user's comments. If the user is the resource owner they edit the resource.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/resource_page.png)

- **Edit Resource Page**

    - If user if the resources owner they can edit/update the resource if any information is incorrect.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/edit_resource_page.png)

- **Favourites Page**

    - Authenticated users can favourite specific resources for easy access in the future. Functionality is the same as the resources page

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/favourites_page.png)

- **Contact Page**

    - Authenticated users can contact the website admin with any queries they may have. 

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/contact_page.png)

- **Confirmation Page**

    - Confirms the user that submitted the contact form that their message has successfully been submitted.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/confirmation_page.png)

- **Profile Page**

    - Give more details on a specfic user and the resources they have created. Profile owner can edit their profile by pressing the three dot dropdown menu.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/profile_page.png)

- **Sign Up Page**

    - Users without an account can sign up to access the full functionality of the website.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/signup_page.png)

- **Sign In  Page**

    - Returning users can sign into their account.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/signin_page.png)

- **Edit Profile Picture  Page**

    - User can update their own profile picture.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/edit_profile_image_page.png)

- **Change Profile Username  Page**

    - User can update their own profile username.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/edit_profile_username_page.png)

- **Change Profile Password  Page**

    - User can update their own profile password.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/edit_profile_password_page.png)

- **Log Out Modal**

    - Confirms user wants to log out of account incase of accidental press.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/logout_modal.png)

- **Delete Resource Modal**

    - Confirms user wants to delete their resource incase of accidental press.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/delete_resource_modal.png)

- **Delete Comment Modal**

    - Confirms user wants to delete their comment incase of accidental press.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/delete_comment_modal.png)

- **Profile Dropdown**

    - Details about this particular feature, including the value to the site, and benefit for the user. Be as detailed as possible!

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/profile_dropdown.png)

- **Comment Dropdown**

    - Comment owner can edit or delete their comment.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/resource_dropdown.png)

- **Resource Dropdown**

    - Resource owner can edit or delete their resource.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/resource_dropdown.png)

- **Comment**

    - Authenicated user can comment under a resource.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/comment.png)

- **Edit Comment**

    - Comment owner can edit & update their comment.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/comment_edit.png)

- **Popular Resources**

    - List of top ten most favourited resources for easy access.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/popular_resources.png)

- **Favourite Button Logged Out**

    - Non-authenicated users can't favourite resources.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/add_to_favourites_logged_out.PNG)

- **Favourite Button Add to Favourites**

    - Authenicated users can favourite resources which add them to the favourites page.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/add_to_favourites_logged_in.PNG)

- **Favourite Button Remove from Favourites**

    - Authenicated users can unfavourite  prevoisly favourited resources which removes them from the favourites page.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/remove_from_favourites.PNG)

- **Resource Search Bar**

    - Users can search by keyword for specfic resource. 

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/search_bar.png)

- **Resource Dropdown Filters**

    - Users can search by dialect, level & Media type for resources suited to their needs.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/dropdown_filters.png)

- **Resource Dropdown Dialect Filter**

    - Users can search by specfic dialect suited to their needs.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/dialect_dropdown.PNG)

- **Resource Dropdown Level Filter**

    - Users can search by specfic level suited to their needs.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/levels_dropdown.PNG)

- **Resource Dropdown Media Type Filter**

    - Users can search by specfic media type suited to their needs.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/type_dropdown.PNG)

- **Country Tag**

    - States what dialect/accent the resource has.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/country_tag.png)

- **YouTube Tag**

    - States the resource is a YouTube channel.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/youtube_tag.png)

- **Podcast Tag**

    - States the resource is a podcast.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/podcast_tag.png)

- **Beginner Tag**

    - States the resource is Beginner level.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/beg_tag.png)

- **Intermediate Tag**

    - States the resource is Intermediate level.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/inter_tag.png)

- **Advanced Tag**

    - States the resource is Advanced level.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/adv_tag.png)

- **Easy Native Tag**

    - States the resource is Easy Native level.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/easy_native_tag(1).png)

- **Advanced Native Tag**

    - States the resource is Advanced Native level.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/adv_native_tag.png)

- **Add Resource Button**

    - Bring authenicated user to page where they can add a resource.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/add_resource_button.PNG)

- **Explore Resources Button**

    - Bring user to resources page.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/explore.PNG)

### Future Features
- Reset Password by Email
    - User can reset their password by emaill if they can't login
- Delete Account 
    - User can delete their own account if needed.
- Dark Mode
    - User can switch between normal and dark colour schemes based on preference.
- Other Resource Types
    - User can add other resources such as books


## Re-useable components and helpers
### `NavBar.js`
The `NavBar` component is a reuseable component outside of the switch used on all pages the website to display the main page links to users, the links shown in the `NavBar` are dependent on wether the user is logged in or out. 

### `Asset.js (spinner)`
The `Asset` component is a reuseable component to display a spinner, an image, or a message based on the props passed to it. 

- If the `spinner` prop is provided and set to `true`, a spinner from the "react-bootstrap" library will be displayed.

The `Asset` component uses some further styling, which is defined in the `Asset.module.css` file. This component has been used widely in the application to display the loading spinner, while fetching more data from the API.

### `Avatar.js`
The `Avatar` component provides a reuseable component, mainly used in the app for the user profiles.

- The component accepts a `src` prop which stands for the image source URL for the avatar.
- It has a default height of `45` pixels for the image which can be overridden with the `height` prop. In the app, it gets overwritten on a few places.
- The width of the image is set to be the same as its height, ensuring the image maintains a square shape.
- An optional `text` prop can be passed to display a label or description alongside the avatar image.

The styling comes from the `Avatar.module.css` file.

### `ModalDelete.js`

The `ModalDelete` component is used in three places of the application, when deleting a resource, comemnts or wheh logging out.
It uses the following elements

- **Hidden or Visible**: It uses the `show` prop to determine if the modal should be displayed or hidden.
  
- **Confirmation Prompt**: The modal displays the question to the user – "Are you sure you want to delete this comment/resource?" or "Are you sure you want to log out?" – ensuring the user is aware of the consequenses when deleting a comment/resource or logging out. It also help to prevent accidently deletion or log out.

- **User Actions**:
  - **Cancel**: A "Cancel" button allows the user to dismiss the modal without performing any action. This triggers the `handleClose` callback when clicked and the user will stay on the detail element (match or gun object), where he came from.
  - **Delete/Log out**: The "Delete/Log out" button confirms the users intention to delete/logout. Clicking this button triggers the `onConfirm` callback and will delete the object or log out the user. `onConfirm` is handleSignOut log out and handleDelete for resources and comments.

### `MoreDropdown.js`

The `MoreDropdown` component, provides a dropdown menu represented by three vertical dots visible on any content, only to the owner of a resource, comment or profile , can edit it. On the profile the users can use the dropdown to access edit profile, change username and change password. On a resource created by the user the dropdown provides access to edit resource and delete resource. On a comment made by the user the dropdown has the options of edit or delete comment.

- **ThreeDots**: This is a custom toggle for the dropdown menu. The use of `React.forwardRef` ensures that the dropdown gets access to the DOM for positioning.
  
- **Dropdown Toggle**: It uses the `ThreeDots` component as the toggle button for the dropdown.
  
- **Dropdown Menu Resource**: This contains two items
  1. Edit: Represented by a pencil icon, when clicked, it redirects to edit resource page.
  2. Delete: Represented by a trash can icon, when clicked, it triggers the `handleDelete` function.

  - **Dropdown Menu Comment**: This contains two items
  1. Edit: Represented by a pencil icon, when clicked, it triggers the `handleEdit` function.
  2. Delete: Represented by a trash can icon, when clicked, it triggers the `handleDelete` function.

  - **Dropdown Menu Profile**: This contains three items:
  1. Edit profile: Represented by a pencil icon, when clicked, it redirects to chnage profile image page
  2. Change username: Represented by a bin icon, when clicked, it redirects to change usrename page
  2. Change password: Represented by a key icon, when clicked, it redirects to change password page

### `NotFound.js`

The `NotFound` component is used to inform users that the page they're trying to access doesn't exist or cannot be found when they are redirect to a wrong they search for a non existent url.

## Custom Hooks
The following custom hooks are used in this project

### `useClickOutsideToggle.js` 
The `useClickOutsideToggle` is a custom hook, which allows the collapsed navbar burger menu to expand and close on clicking outside the menu or on the selction of a link in the navbar.

```jsx
import { useEffect, useRef, useState } from "react";

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
```

### `useRedirect.js` 
The `useRedirect` is a custom hook, which redirects non-autherised users anyway from pages which are only meant to be avaiable to autherised users such as the edit profile page and edit resource page. It also redirects autherised users anyway from pages which are only meant to be avaiable to non-autherised users such sign up and sign in pages.

```jsx
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if user is logged in, the code below will run
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if user is not logged in, the code below will run
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};
```

## Agile Development Process
### GitHub Projects
[GitHub Projects](https://github.com/users/ogc1231/projects/6) served as an Agile tool for this project.

Through it, issues, and milestone tasks were planned and tracked using the basic Kanban board.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/projects.png)

### GitHub Issues
[GitHub Issues](https://github.com/ogc1231/comprehensible-spanish-frontend/issues) served as an another Agile tool.

There, I used my own **templates** to manage issues.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/issues.png)

### GitHub Milestones
[GitHub Milestones](https://github.com/ogc1231/comprehensible-spanish-frontend/milestones) served as an another Agile tool.

There, I used my own **milestones** to group issues.

![screenshot](https://github.com/ogc1231/comprehensible-spanish-frontend/blob/main/documentation/readme-assets/milestones.png)

### MoSCoW Prioritization
I decomposed my issues to help prioritise and implement them.
Using this approach, I was able to apply the MoSCow prioritization and labels to my user stories within the Issues tab.

- **Must Have**: guaranteed to be delivered
- **Should Have**: adds significant value, but not vital
- **Could Have**: has small impact if left out
- **Won't Have**: not a priority for this iteration

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

#### Heroku Deployment

This project uses [Heroku](https://www.heroku.com), a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

Deployment steps are as follows, after account setup:

- Select **New** in the top-right corner of your Heroku Dashboard, and select **Create new app** from the dropdown menu.
- Your app name must be unique, and then choose a region closest to you (EU or USA), and finally, select **Create App**.
- No environment variables are required

Heroku needs two additional files in order to deploy properly.
- package.json file
- Procfile

The **package.json** file gets automatically built, when you install a package via the `npm install` command

The **Procfile** must contain the following command:
- `web: serve -s build`

For Heroku deployment, follow these steps to connect your own GitHub repository to the newly created app:

Either:
- Select **Automatic Deployment** from the Heroku app.

Or:
- In the Terminal/CLI, connect to Heroku using this command: `heroku login -i`
- Set the remote for Heroku: `heroku git:remote -a app_name` (replace *app_name* with your app name)
- After performing the standard Git `add`, `commit`, and `push` to GitHub, you can now type:
	- `git push heroku main`

The project should now be connected and deployed to Heroku!

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system. Depending on your local setup, npm needs to be installed. Do also make sure, that all required packages as mentioned in the `package.json` file are installed on your local machine.

Depending on the node version you are using on the local environment, a workaround is needed to start the server via the `npm start` command.

Before starting the server, the following command `nvm install 16 && nvm use 16` has to be entered, which tells nvm (node version manager) which version to use.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/ogc1231/comprehensible-spanish-frontend) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/ogc1231/comprehensible-spanish-frontend`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rpf13/sportsshooting_react)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/ogc1231/comprehensible-spanish-frontend)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!


## Tools & Technologies Used
- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [React](https://react.dev/) used for user interaction with components on the site.
- [Python](https://www.python.org) used as the back-end programming language.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
- [React Bootstrap](https://react-bootstrap.netlify.app/) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [Django](https://www.djangoproject.com) used as the Python framework for the site.
- [Django REST Framework](https://www.django-rest-framework.org/) used build the backend api.
- [PostgreSQL](https://www.postgresql.org) used as the relational database management.
- [ElephantSQL](https://www.elephantsql.com) used as the Postgres database.
- [Heroku](https://www.heroku.com) used for hosting the deployed back-end site.
- [Cloudinary](https://cloudinary.com) used for online static file storage.

## Credits
### Content
| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://traveltimn.github.io/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [StackOverflow](https://stackoverflow.com/questions/63124924/how-to-redirect-to-after-x-seconds-using-react-router-dom) | confirmation page | redirect after countdown |
| [Pablo Embarach](https://github.com/PEmbarach/coffeeie/blob/main/src/pages/contact/ContactForm.js) | contact form | design |
| [Anthony Rocco Albanese](https://github.com/tony-albanese/nonnas-kitchen/blob/main/src/components/ModalAlert.jsx) | Delete/logout modal | design |
| [Code Institute](https://codeinstitute.net/ie/) | navbar & popular resources | design |
| [Ian Meigh](https://gist.github.com/ianmeigh/8e603b91a38d7829d959402bfcf29d3d) | all js | eslint validation |

### Media
| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [favicon.io](https://favicon.io/) | entire site | image | favicon & logo on all pages |
| [freepik](https://www.freepik.com) | home page | image | hero image home page |
| [YouTube](https://www.youtube.com/) | resources page | image, url & information | youtube resources|
| [Spotify](https://open.spotify.com/) | resources page | image, url & information | podcast resources|
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |
| [Vecteezy](https://www.vecteezy.com/vector-art/367249-search-vector-icon) | resources/favourites pages| image | resource search |
| [Vecteezy](https://www.vecteezy.com/vector-art/19551975-error-page-page-not-found-icon-in-line-style-design-isolated-on-white-background-editable-stroke) | page not found | image | page not found |
| [Vecteezy](https://www.vecteezy.com/vector-art/421494-upload-icon-vector-illustration) | add resource page | image | image upload |


### Acknowledgements
- I would like to thank my Code Institute mentors, [Aleksei (Alex) konovalov](https://github.com/lexach91) & [Jubril Akolade](https://github.com/Jubrillionaire) for their support throughout the development of this project.

