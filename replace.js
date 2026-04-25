const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/Pearlson Health Care Clinic \| Trusted Care for Better Health/g, 'Jales And Associates Clinic for OT & Physiotherapy');
html = html.replace(/Pearlson Health Care Clinic/g, 'Jales And Associates Clinic');
html = html.replace(/Pearlson Health Care/g, 'Jales And Associates');
html = html.replace(/>Clinic</g, '>Clinic for OT &amp; Physiotherapy<');
html = html.replace(/084160 67545/g, '098634 04191');
html = html.replace(/\+918416067545/g, '+919863404191');
html = html.replace(/info@pearlsonclinic\.com/g, 'info@jalesclinic.com');
html = html.replace(/Dhaleswar Rd Number 6, opposite Prantik Club, Banamalipur, Indranagar, Agartala, Tripura 799007/g, 'Khakchang Residential Complex, near Axilium Girls School, Nandanagar, Indranagar, Agartala, Tripura 799006');
html = html.replace(/Dhaleswar\+Rd\+Number\+6,\+opposite\+Prantik\+Club,\+Banamalipur,\+Indranagar,\+Agartala,\+Tripura\+799007/g, 'Khakchang+Residential+Complex,+near+Axilium+Girls+School,+Nandanagar,+Indranagar,+Agartala,+Tripura+799006');
html = html.replace(/Dhaleswar Rd Number 6, Agartala, Tripura/g, 'Nandanagar, Indranagar, Agartala');
html = html.replace(/pearlsonclinic\.com/g, 'jalesclinic.com');

// Replace Reviews
html = html.replace(/"I had a great experience and excellent results\. The staff is wonderful and the facility is very clean and modern\."/, '"It is very excellent therapy on my heel pain. Highly recommended for anyone needing physiotherapy."');
html = html.replace(/<div class="author-avatar">R<\/div>\s*<div class="author-info">\s*<div class="author-name">Rahul D\.<\/div>/, '<div class="author-avatar">G</div>\n            <div class="author-info">\n              <div class="author-name">Geeta Hrangkhawl</div>');

html = html.replace(/"Very helpful treatment and professional care\. My recovery has been smooth and the doctors were always attentive\."/, '"A clinic where it makes the mind feel relax. The environment and the care provided are top notch."');
html = html.replace(/<div class="author-avatar">A<\/div>\s*<div class="author-info">\s*<div class="author-name">Anjali M\.<\/div>/, '<div class="author-avatar">P</div>\n            <div class="author-info">\n              <div class="author-name">Pritam Hrangkhawl</div>');

// Replace Map embed
html = html.replace(/src="https:\/\/www\.google\.com\/maps\/embed\?pb=[^"]+"/, 'src="https://maps.google.com/maps?q=Khakchang%20Residential%20Complex,%20Agartala&t=&z=15&ie=UTF8&iwloc=&output=embed"');

fs.writeFileSync('index.html', html);
console.log('Done!');
