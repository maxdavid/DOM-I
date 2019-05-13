const siteContent = {
  "nav": {
    "nav-item-0": "Services",
    "nav-item-1": "Product",
    "nav-item-2": "Vision",
    "nav-item-3": "Features",
    "nav-item-4": "About",
    "nav-item-5": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let nav = document.getElementsByTagName("nav")[0];
let navLinks = nav.querySelectorAll('a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent['nav'][`nav-item-${i}`];
}

const navLinkHello = document.createElement('a');
navLinkHello.textContent = 'Say Hello';
nav.append(navLinkHello);
const navLinkLogin = document.createElement('a');
navLinkLogin.textContent = 'Login';
nav.append(navLinkLogin);

navLinks = nav.querySelectorAll('a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = 'green';
}

let cta = document.getElementsByClassName('cta')[0];
cta.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
cta.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];

const sectionNames = ['features', 'about', 'services', 'product', 'vision'];
let mainTextContent = document.getElementsByClassName('text-content');
for (let i = 0; i < sectionNames.length; i++) {
  mainTextContent[i].getElementsByTagName('h4')[0].textContent = siteContent['main-content'][`${sectionNames[i]}-h4`];
  mainTextContent[i].getElementsByTagName('p')[0].textContent = siteContent['main-content'][`${sectionNames[i]}-content`];
}

let contact = document.getElementsByClassName('contact')[0];
let contactFields = Object.keys(siteContent['contact']);
for (let i = 0; i < contact.children.length; i++) {
  contact.children[i].textContent = siteContent['contact'][contactFields[i]];
}

let footer = document.getElementsByTagName('footer')[0];
footer.getElementsByTagName('p')[0].textContent = siteContent['footer']['copyright'];