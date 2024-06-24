const canvas = document.getElementById('gradient-canvas');
const ctx = canvas.getContext('2d');
const card = document.querySelector('.card');
const gradientAngle = 0; // Initial gradient angle

canvas.width = card.offsetWidth;
canvas.height = card.offsetHeight;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate gradient radius
  const radius = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2;

  // Calculate gradient center position
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Convert gradient angle to radians
  const angleRad = (gradientAngle * Math.PI) / 180;

  // Define gradient properties
  const gradient = ctx.createConicGradient(centerX, centerY, angleRad);
  gradient.addColorStop(0, 'hsl(7, 100%, 68%)');
  gradient.addColorStop(0.25, 'rgb(33, 93, 110)');
  gradient.addColorStop(0.5, '#b7702d');
  gradient.addColorStop(0.75, 'hsl(254, 20%, 44%)');
  gradient.addColorStop(1, 'hsl(258, 100%, 95%)');

  // Apply gradient fill to the canvas
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Update the gradient angle
  gradientAngle += 1;

  // Loop the animation
  requestAnimationFrame(draw);
}

draw();


