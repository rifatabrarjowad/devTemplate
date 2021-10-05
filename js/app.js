
// this is for home button
const homebtn = document.getElementById('home');
homebtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "block";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "none";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "none";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "none";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "none";
})

// this is for about button
const aboutbtn = document.getElementById('about');
aboutbtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "none";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "block";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "none";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "none";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "none";
})

// this is for about button on home page
const aboutmebtn = document.getElementById('about-me');
aboutmebtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "none";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "block";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "none";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "none";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "none";
})

// this is for skill button
const skillbtn = document.getElementById('skill');
skillbtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "none";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "none";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "block";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "none";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "none";
})
// this is for skill button on about page
const skillmebtn = document.getElementById('skill-me');
skillmebtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "none";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "none";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "block";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "none";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "none";
})
// this is for contact button
const contactbtn = document.getElementById('contact');
contactbtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "none";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "none";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "none";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "block";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "none";
})
// this is for portfolio button
const portfoliobtn = document.getElementById('portfolio');
portfoliobtn.addEventListener('click', function () {
    const homeArea = document.getElementById("homeAr");
    homeArea.style.display = "none";
    const aboutArea = document.getElementById("aboutAr");
    aboutArea.style.display = "none";
    const skillArea = document.getElementById("skillAr");
    skillArea.style.display = "none";
    const contactAr = document.getElementById("contactAr");
    contactAr.style.display = "none";
    const portfolioAr = document.getElementById("portfolioAr");
    portfolioAr.style.display = "block";
})


// skill tab
// its for other tab
const otherbtn = document.getElementById('other');
otherbtn.addEventListener('click', function () {
    const webTab = document.getElementById("webTab");
    webTab.style.display = "none";
    const otherTab = document.getElementById("otherTab");
    otherTab.style.display = "block";
    const progTab = document.getElementById("progTab");
    progTab.style.display = "none";
    const toolTab = document.getElementById("toolTab");
    toolTab.style.display = "none";
    // color
    const otherr = document.getElementById("other");
    otherr.style.background = "#ff8206";
    const webb = document.getElementById("web");
    webb.style.background = "#1d293a";
    const toolss = document.getElementById("tools");
    toolss.style.background = "#1d293a";
    const programingg = document.getElementById("programing");
    programingg.style.background = "#1d293a";

})
// its for web tab
const webbtn = document.getElementById('web');
webbtn.addEventListener('click', function () {
    const webTab = document.getElementById("webTab");
    webTab.style.display = "block";
    const otherTab = document.getElementById("otherTab");
    otherTab.style.display = "none";
    const progTab = document.getElementById("progTab");
    progTab.style.display = "none";
    const toolTab = document.getElementById("toolTab");
    toolTab.style.display = "none";
    // color
    const otherr = document.getElementById("other");
    otherr.style.background = "#1d293a";
    const webb = document.getElementById("web");
    webb.style.background = "#ff8206";
    const toolss = document.getElementById("tools");
    toolss.style.background = "#1d293a";
    const programingg = document.getElementById("programing");
    programingg.style.background = "#1d293a";

})
// its for tools tab
const toolsbtn = document.getElementById('tools');
toolsbtn.addEventListener('click', function () {
    const webTab = document.getElementById("webTab");
    webTab.style.display = "none";
    const otherTab = document.getElementById("otherTab");
    otherTab.style.display = "none";
    const progTab = document.getElementById("progTab");
    progTab.style.display = "none";
    const toolTab = document.getElementById("toolTab");
    toolTab.style.display = "block";
    // color
    const otherr = document.getElementById("other");
    otherr.style.background = "#1d293a";
    const webb = document.getElementById("web");
    webb.style.background = "#1d293a";
    const toolss = document.getElementById("tools");
    toolss.style.background = "#ff8206";
    const programingg = document.getElementById("programing");
    programingg.style.background = "#1d293a";

})
// its for programing tab
const programingbtn = document.getElementById('programing');
programingbtn.addEventListener('click', function () {
    const webTab = document.getElementById("webTab");
    webTab.style.display = "none";
    const otherTab = document.getElementById("otherTab");
    otherTab.style.display = "none";
    const progTab = document.getElementById("progTab");
    progTab.style.display = "block";
    const toolTab = document.getElementById("toolTab");
    toolTab.style.display = "none";
    // color
    const otherr = document.getElementById("other");
    otherr.style.background = "#1d293a";
    const webb = document.getElementById("web");
    webb.style.background = "#1d293a";
    const toolss = document.getElementById("tools");
    toolss.style.background = "#1d293a";
    const programingg = document.getElementById("programing");
    programingg.style.background = "#ff8206";

})
