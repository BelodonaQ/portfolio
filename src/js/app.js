// Utility function for throttling
function throttle(func, delay) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func.apply(this, arguments);
  };
}






//     // Create the stars
// var stars = document.createElement("div");
// stars.classList.add("stars");
// document.querySelector(".skill__set--container").appendChild(stars);

// for (var i = 0; i < 100; i++) {
//   var star = document.createElement("div");
//   star.classList.add("star");
//   star.style.left = Math.random() * 100 + "%";
//   star.style.top = Math.random() * 100 + "%";
//   stars.appendChild(star);
// }

// // Move the stars with the mouse
// document.addEventListener("mousemove", function(event) {
//   var x = event.clientX / window.innerWidth;
//   var y = event.clientY / window.innerHeight;
//   stars.style.transform = "translate(" + x * 10 + "px, " + y * 10 + "px)";})


//   // Create the stars
// var stars = document.createElement("div");
// stars.classList.add("stars");
// document.querySelector(".skill__set--container").appendChild(stars);

// // Create the initial stars
// createStars(100);

// // Move the stars with the mouse
// document.addEventListener("mousemove", function(event) {
//   var x = event.clientX / window.innerWidth;
//   var y = event.clientY / window.innerHeight;
//   stars.style.transform = "translate(" + x * 10 + "px, " + y * 10 + "px)";
// });

// // Create new stars when the existing ones disappear
// var starHeight = window.innerHeight / 10;

// function createStars(numStars) {
//   for (var i = 0; i < numStars; i++) {
//     var star = document.createElement("div");
//     star.classList.add("star");
//     star.style.left = Math.random() * 100 + "%";
//     star.style.top = Math.random() * starHeight + "px";
//     stars.appendChild(star);
//   }
// }

// function regenerateStars() {
//   var visibleStars = document.querySelectorAll(".star:not(.hidden)");
//   if (visibleStars.length < 100) {
//     createStars(100 - visibleStars.length);
//   }
//   var hiddenStars = document.querySelectorAll(".hidden");
//   for (var i = 0; i < hiddenStars.length; i++) {
//     if (hiddenStars[i].getBoundingClientRect().top >= window.innerHeight) {
//       hiddenStars[i].remove();
//     }
//   }
//   window.requestAnimationFrame(regenerateStars);
// }

// regenerateStars();

var starObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) {
      entry.target.remove();
    }
  });
}, { rootMargin: "0px" });



// Create the stars
var stars = document.createElement("div");
stars.classList.add("stars");
document.querySelector(".skill__set--container").appendChild(stars);

function createStar() {
  var star = document.createElement("div");
  star.classList.add("star");
  
  // Set star size randomly between 1px and 5px
  var size = Math.floor(Math.random() * 5) + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  
  // Set animation duration randomly between 30s and 180s
  // var duration = Math.floor(Math.random() * 150) + 30;
  // star.style.animationDuration = duration + "s";
  var duration = 180 / size;
  star.style.animationDuration = duration + "s";
  
  // Set animation timing function randomly
  var timingFunction = ["linear", "ease-in", "ease-out", "ease-in-out"][Math.floor(Math.random() * 4)];
  star.style.animationTimingFunction = timingFunction;
  
  // Set star opacity randomly between 0.5 and 1
  var opacity = Math.random() * 0.5 + 0.5;
  star.style.opacity = opacity;
  
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  stars.appendChild(star);
  
  // Remove star when it reaches bottom of screen
  starObserver.observe(star);
}

// Create new stars continuously 
setInterval(createStar, 100);

document.addEventListener("mousemove", throttle(function(event) {
  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;
  stars.style.transform = "translate(" + x * 10 + "px, " + y * 10 + "px)";
  
  // Move stars away from words when mouse hovers over them
  var words = document.querySelectorAll(".skill__set p");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var wordRect = word.getBoundingClientRect();
    var starRects = document.querySelectorAll(".star");
    
    for (var j = 0; j < starRects.length; j++) {
      var starRect = starRects[j].getBoundingClientRect();
      
      if (starRect.top < wordRect.bottom && starRect.bottom > wordRect.top &&
          starRect.left < wordRect.right && starRect.right > wordRect.left) {
        var dx = (starRect.left + starRect.width / 2) - (wordRect.left + wordRect.width / 2);
        var dy = (starRect.top + starRect.height / 2) - (wordRect.top + wordRect.height / 2);
        var distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          var newX = starRect.left + dx / distance * 100;
          var newY = starRect.top + dy / distance * 100;
          starRects[j].style.left = newX + "px";
          starRects[j].style.top = newY + "px";
        }
      }
    }
  }
}, 20000)); // delay of 200ms

// Create an intersection observer to remove stars when they leave the viewport




// Only after the images have eased in
// JavaScript code to add class to skill__set section once images have loaded
const skillSet = document.querySelector('.skill__set');
const images = skillSet.querySelectorAll('img, svg');

let loadedCount = 0;

images.forEach((image) => {
  if (image.complete) {
    loadedCount++;
  } else {
    image.addEventListener('load', () => {
      loadedCount++;
      if (loadedCount === images.length) {
        skillSet.classList.add('loaded');
      }
    });
  }
});

//Lazy loading

const section = document.querySelector('.skill__set');





//Gradient Animation

// let angle = 0;
// setInterval(() => {
//   document.documentElement.style.setProperty('--gradient-angle', `${angle}deg`);
//   angle = (angle + 1) % 360;
// }, 1000 / 60);


let angle = 0;
let lastUpdateTime = 0;
const updateInterval = 1000 / 30; // Adjust this to change the update frequency

function updateGradient(timestamp) {
  if(timestamp - lastUpdateTime > updateInterval) {
    document.documentElement.style.setProperty('--gradient-angle', `${angle}deg`);
    angle = (angle + 1) % 360;
    lastUpdateTime = timestamp;
  }
  
  // Call updateGradient again on the next frame
  requestAnimationFrame(updateGradient);
}

// Kick off the animation
requestAnimationFrame(updateGradient);

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, { threshold: 0.1 });

var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  observer.observe(card);
});


// BLOG POSTS

// Fetch the JSON file
fetch('blogposts.json')
  .then(response => response.json()) // Parse it as JSON
  .then(posts => {
    // Now `posts` is an array of your blog posts
    const blogPostsContainer = document.querySelector('.blog-posts');

    // Clear any existing blog posts
    blogPostsContainer.innerHTML = '';

    // Add each blog post to the page
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'card';
      
      const postImg = document.createElement('img');
      postImg.className = 'blog-post-thumbnail';
      postImg.src = post.image;
      postImg.alt = "Blog post thumbnail";

      const postDate = document.createElement('p');
      postDate.className = 'post-date';
      postDate.textContent = `Posted: ${post.date}`;

      const postTitle = document.createElement('h3');
      postTitle.className = 'blog-post-title';
      postTitle.textContent = post.title;

      const postDescription = document.createElement('p');
      postDescription.className = 'blog-post-description';
      postDescription.textContent = post.description;

      const postButton = document.createElement('button');
      const postLink = document.createElement('a');
      postLink.className = 'underline';
      postLink.href = post.contentURL;
      postLink.textContent = 'Read More';

      postButton.appendChild(postLink);
      postDiv.appendChild(postImg);
      postDiv.appendChild(postDate);
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postDescription);
      postDiv.appendChild(postButton);
      
      blogPostsContainer.appendChild(postDiv);
    });
  })
  .catch(err => console.error('Error loading blog posts:', err));

 
//Contact Form

var form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
