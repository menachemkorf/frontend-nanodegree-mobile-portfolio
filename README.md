## Website Performance Optimization portfolio project

Here's a sample portfolio website optimized for fast load time and better user experience.

To open download the repo to your machine and open the index.html in your browser, for the pizza page click on the Cam's Pizzeria link.

The main page downloads quickly by minimizing the critical rendering path. I've tested it in pagespeedinsights from google (using ngrok) and got a score of 96 for desktop and 95 for mobile.

When you scroll in the pizza page the pizzas will animate smoothly at a frame rate 60 frames per second. When you change the pizza size it responds in less than 5 ms.

### Key optimizations for index.html

Optimized the CRP with the following optimizations:

* Minified and in lined style.css and phone-style.css.

* Minified and async perfmatters.js.

* Called the function for google analytics after everything else is downloaded with window.onload().

* Async google analytics third party script.

* Optimized profilepic.jpg from 14 KB to 1.64 KB.

(I've used gulp for some of the above tasks).

### Key optimizations for the pizza page

* In style.css the mover class' backface-visibility is set to hidden, in order to promote the class to its own layer, so that when you scroll the browser doesn't paint the entire page.

* In main.js in the changePizzaSizes function var dx is taken out of the for loop, so that it only triggers layout once, thus reducing the time to change pizza size.

* In main.js in the updatePositions function var phase is taken out of the for loop, so that it only triggers layout once, thus allowing animation at 60 frames per second.