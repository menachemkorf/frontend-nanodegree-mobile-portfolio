## Website Performance Optimization portfolio project

Here's a sample portfolio website optimized for fast load time and better user experience.

To open, download the repo to your machine, and open the index.html in your browser, for the pizza page click on the Cam's Pizzeria link.

The main page downloads quickly by minimizing the critical rendering path. I've tested it in pagespeedinsights from google (using ngrok) and got a score of 94 for desktop and 93 for mobile.(I included snapshots of the score in this repo).

When you scroll in the pizza page the pizzas will animate smoothly at a frame rate of 60 frames per second. When you change the pizza size it responds in less than 5 ms.

### Key optimizations for index.html

Optimized the CRP with the following optimizations:

* Minified and in lined style.css and phone-style.css.

* Minified and async perfmatters.js.

* Called the function for google analytics after everything else is downloaded with window.onload().

* Async google analytics third party script.

* Optimized profilepic.jpg from 14 KB to 1.64 KB.

* Resized pizzeria.jpg from 2048 by 1536 px (2.25 MB) to 100 by 75 px (22.8 KB).

I've used gulp for some of the above tasks.

(I included the original file as original.index.html, and the unminfied optimized file as pretty.index.html)

### Key optimizations for the pizza page

* In style.css, the mover class' backface-visibility is set to hidden, in order to promote the class to its own layer, so that when you scroll the browser doesn't paint the entire page.

* In main.js, in the changePizzaSizes function, var dx is taken out of the for loop, so that it only triggers layout once, thus reducing the time to change pizza size.

* In main.js, in the updatePositions function, the calculations to update the positions are taken out of the for loop, so that it only triggers layout once, thus allowing animation at 60 frames per second.

* In main.js, in the function that generates the sliding pizzas when the page loads, calculates the amount of pizzas needed based on the window size, so that it doesn't need to generate unnecessary pizzas.
