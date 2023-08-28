var x = 6;
var y = 14;
var z = 4;

document.write((x+=y-x++*z)+"<br/>");

x = 6;
y = 14;
z = 4;
document.write((z=--x-y*5)+"<br/>");

x = 6;
y = 14;
z = 4;
document.write((y/=x+5%z)+"<br/>");
x = 6;
y = 14;
z = 4;
document.write((z-x++ +y*5)+"<br/>");
x = 6;
y = 14;
z = 4;
document.write(x=y-x++*z);