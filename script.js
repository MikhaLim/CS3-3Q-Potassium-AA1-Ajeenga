const I = 3.14; 
document.write("Value of π: " + I);
document.write('<br><br>');

let radius = 6.378e6; 
document.write("Radius of the sphere: " + radius);
document.write('<br><br>');

let C = 2 * I * radius;
document.write("Circumference: " + C);
document.write('<br><br>');

let A = 4 * I * (radius ** 2);
document.write("Surface Area: " + A);
document.write('<br><br>');


let V = (4 / 3) * I * (radius ** 3);
document.write("Volume: " + V);
document.write('<br><br>');
