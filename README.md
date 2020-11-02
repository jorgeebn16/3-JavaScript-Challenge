# Password Generator
JavaScript Challenge

Using a base provided code (see Develop directory), add the needed JavaScript elements so that when the user clicks the "Generate Password" button they are met with a series of prompts to select the character length and character types for their password to be made of. 

The minium password length should be 8 characters and the max 128.

The character types should be: Uppercase, Lowercase, numbers, and special characters.

The password should be randomized each time using the user's input parameters and then displayed for the user.

## Mock-Up

![Mock-Up Image](./assets/images/03-javascript-homework-demo.png)

## Link to Deployed Application

https://jorgeebn16.github.io/3-JavaScript-Challenge/

## Accomplishment Process
To meet the above description of this application I did the following:
* Modified the organization of the repo to meet normal standards. This included adding a assets directory with the css and js directories each with their respective content. I also added an images directory to the assets directory for all repo images.
* Added issues to the repository to accomplish set objectives step by step.
* Organized the HTML and CSS code and added comments for organization and understanding of operation (this may have been more for my better understanding, but hey, I didn't write either of these so this helped me a ton!).
* Broke down password generation: 
    1. When button clicked, an 8 digit randomized alpha lowercase password is presented.
    2. When button clicked, user prompt to select character length (min of 8 max of 128). User verifies input. Randomized alpha lowercase password matching user input length is presented.
    3. When button clicked, AFTER character length prompt, user prompt to select character types: uppercase, lowercase, numbers, special characters. At lease on type must be selected. User verifies input. Randomized password matching both length and character types is presented. 
* Pseudo coded each objective of the JavaScript code during each step.
* Wrote JavaScript code to perform the application performance expectations. Added comments to walk through my thought process and expected behaviors.