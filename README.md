# Map Quiz

Map Quiz is a multiple choice quiz where players are given an Irish county nickname and they have to select the correct county. There are four options on every question, with ten questions in total.

![Mock Up](docs/readme_images/responsive.JPG)

[Map Quiz](https://fintanmi.github.io/map-quiz/)

## Features

### Site Wide
* Logo in the header to allow players to return to the home page
* Favicon
   * A harp is featured on each page
   * This will provide a visual element for a player to easily identify the page if they have multiple tabs open
   ![Favicon](docs/readme_images/quiz-app-tab.JPG)
 
*Home Page*
- Game instructions button in the header to explain what the quiz is about
- Harp icon in the header that the user can click once the quiz has started that will bring them back to the home page
- A brief explanation of what the quiz is about
- Play button to initiate the quiz
- Sign up button that displays a modal, allowing players to sign up in order to get access to the full range of games
![Home Page Image](docs/readme_images/home-page.JPG)

*Sign Up Modal*
- A modal pops up with serveral input fields for a player to upload their name, email and password if they wish to join
![Sign Up Modal](docs/readme_images/sign-up-modal.JPG)

*Instructions*
- Tells players how to play the quiz
- Button links to the quiz page
![Instructions Page](docs/readme_images/instructions.JPG)

*Quiz Pages*
- Question counter with a progress bar to show how many questions have been answered
- Score counter to show how many questions the player has answered correctly
- Neon written effects on either side of the quiz container to give an arcade feel
- Quiz container with the question on top and the four possible answer below
- The answer will flash green (correct answer) or red (wrong answer) for half a second before changing to the next question
- The score begins at zero and each correct answer will add ten to their score, meaning the best score a player can acheive is one hundred
![Quiz Page Image](docs/readme_images/quiz-page.JPG)

*Finish Page*
- The player will see a play again button that will divert them back to the home page


## Wireframes

- Home Page
![home page wireframe](docs/readme_images/quiz-app-home.JPG)
![home page wireframe](docs/readme_images/quiz-app-home-mobile.JPG)

- Sign Up Modal
![home page wireframe](docs/readme_images/sign-up-modal-mockup.JPG)

- Instructions Page
![home page wireframe](docs/readme_images/instruction-mockup.JPG)

- Quiz Page
![home page wireframe](docs/readme_images/quiz-content-mockup.JPG)
![home page wireframe](docs/readme_images/quiz-content-mobile.JPG)

## Technologies

- HTML
  - The structure of the website was developed using HTML
- CSS
  - The Website was styled using custom CSS in external files
- JavaScript
  - The game play logic was created using JavaScript in external files
- GitHub
  - Source code is hosted on GitHub and delpoyed using Git Pages.
- Gitpod
  - Used to commit and push code during the development of the Website
- Favicon.io
  - favicon file was created at https://favicon.io/favicon-converter/
- balsamiq
  - wireframes were created using balsamiq from https://balsamiq.com/wireframes/desktop/

## Testing

### Responsiveness

All pages were tested to ensure the layout was correctly displaying the quiz all device sizes down to 280 pixels.

Steps to test:

1. Open browser and navigate to [Quiz App](https://fintanmi.github.io/map-quiz/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and set zoom to 50%
4. Go through each of the device types to ensure the layout is correct

Expected:

Website is responsive on all screen sizes
No horizontal scroll is present
No elements overlap

Actual:

Website behaved as expected.

### Accessibility

**Lighthouse Report**

Lighthouse report generated scores ranging from 92 to 100
![Lighthouse report](docs/readme_images/quiz-lighthouse.JPG)

**Validator Testing**

-HTML
  - Three errors relating to the same id name been used was highlighted when passed through [W3C validator](https://validator.w3.org)
  - Changes were implemented
 ![Home HTML Validator Result](docs/readme_images/quiz-html-check.JPG)
