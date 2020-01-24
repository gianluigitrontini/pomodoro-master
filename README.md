# Pomodoro Master
### Do more. Do better.
A pomodoro technique based web application.
## ABOUT
The Pomodoro Technique is a widely used “productivity hack” that consists in breaking down major challenges into smaller tasks that can be completed in around 25 minutes, followed by 5 / 10 minutes of rest.
That provide an effective work/rest balance that increases productivity and the overall quality of work.

## App Functionalities
• Timer with Play/Pause & Reset buttons  

• Customizable Sessions length  

• Customizable Break length  

• It rings after time’s up   

• Login to track past completed tasks

## Website Functionalities
• Custom Logo

• Hamburger menu with Settings,
Portfolio, InfoJobs profile.

• Settings Page

• Copyright & Cookies disclaimer

## 1. Initialization
I started the project with a simple layout which included:

• Custom logo

• Collapsable navbar

• Timer

• 2 buttons for adjusting the session/break time

• Footer and a cookie bar.

The elements position is very intuitive and there are common and easy-to-use patterns recognizable by a user.

## 2. Layout
For the home page I set the main tomato element (that I previously created) in the center of the page and put the time selectors distributed in 8 columns under the “pomodoro” with the Play/Pause & Reset buttons hidden appearing when the “Start” button, placed in the middle of the tomato, is pressed.

## 3. Responsive Design
While screen resizes, the elements flow without drastic changes in the UI - the menu becomes an hamburger menu and the buttons stack on columns.
The simplicity of mobile view reminds of an application where the main functions are in plain sight on the home page.

## 4. Technologies
Following the requirements of the project, I was looking for a CSS framework that was lightweight to keep the page loading time fast and customisable to adapt it to my needs.

I ended up with Bootstrap for the sake of time and the extensive support available on their doc page and communities like StackOverflow.

To quickly prototype the page I used jQuery that came included with Bootstrap and it was necessary for its dropdown menu feature to work.
I also used jQuery to manipulate the DOM - for sure it made the process a little faster but it’s not completely necessary to build any UI/Web App.
