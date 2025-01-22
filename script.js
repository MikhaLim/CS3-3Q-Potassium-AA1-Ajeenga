const PI = 3.14; 
document.write("Value of PI: " + PI);
document.write('<br><br>');

let radius = 6.378e6; 
document.write("Radius of the sphere: " + radius);
document.write('<br><br>');

let C = 2 * PI * radius;
document.write("Circumference: " + C);
document.write('<br><br>');

let SA = 4 * PI * (radius ** 2);
document.write("surface area: " + SA);
document.write('<br><br>');


let L = (4 / 3) * PI * (radius ** 3);
document.write("Volume: " + L);
document.write('<br><br>');
