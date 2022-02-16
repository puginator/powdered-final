### Powdered Toast Coding Challenge

This project was built as a coding challenge for [Hounder](www.hounder.co).

The requirements for this challenge were to build the site using just Vanilla JS HTML and CSS.

I decided to try and build this with the help of tailwind to help with the styling.
This was my first project using tailwind and I am very proud of it.

I had three days to work on this project but as with most things I would love extra time to keep fine tuning the details.


## What I Learned
Tailwind, and although I used this project for it I feel like I am just scratching the surface of what it can do. As someone who always dreads coming up with class names this is a great tool. 

## How to run
This project is hosted on [Github](https://github.com/puginator/powdered-final) 
A live demo can be found thanks to [Netlify](https://peaceful-montalcini-46e53f.netlify.app/)

I have yet to push this to production so I am not sure what the tailwind config is yet.
However I am running it on my local machine thanks to live server in VS Code. also ensuring to run the following command to make sure my changes are recognized by tailwind. 

`npx tailwindcss -i ./src/style.css -o ./dist/output.css --watch`

without this command changes made via tailwind classes will not be recognized.

## Some Problems I ran into

- I noticed pretty late in the project how the font/line sizes were different in tailwind then requested from hounder. 
- With more time I would have ensured to create all custom font sizes to start and would not have spacing problems like I had.
- It's been a wild since I built a site using just plain vanilla JS and I should have gave myself more time to refactor my functions. Sadly this was not done.
- I ran into a white space problem on the right side of my screens when screen is on small mobile devices. This seems to be tied to something with tailwind but I still have not figured out what. This was hard to send this project in without fixing that, haha.
- The eat it section was pretty tough and I ended up making two separate parts for it. Although I got the functionality to work it was a little sloppy and I would love to come up with a better way to do this. 

