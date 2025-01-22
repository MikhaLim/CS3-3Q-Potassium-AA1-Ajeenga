const I = 3.14; 

let radius = 6.378e6; 
document.write("Radius: " + radius);
document.write('<br><br>');
let C = 2 * I * radius;
document.write("The circumference is: " + C);
document.write('<br><br>');
let A = 4 * I * (radius ** 2);
document.write("The surface area is: " + A);
document.write('<br><br>');
let V = (4 / 3) * I * (radius ** 3);
document.write("The Volume is: " + V);
document.write('<br><br>');
