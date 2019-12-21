
function createAppend(string, parent, text) {
    var element = document.createElement(string);
    parent.appendChild(element);
    if (text != null)
        element.appendChild(document.createTextNode(text));
    return element;
}
function appendText(string, element) {
    element.appendChild(document.createTextNode(string));
}
var header = createAppend('header', document.body);
var h1 = createAppend('h1', header, 'CSS1K');
var nav = createAppend('nav', header);
var h2 = createAppend('h2', nav, 'Select a design');
var ul = createAppend('ul', nav);

var variants = [["./", "Default"],
["#stripes", "Stripes"],
["#notepad", "Notepad"],
["#gardenof3den", "Garden of CSS-3Den"],
["#bbubles", "Bbubles"],
["#swiss", "Swiss"],
["#turnaround", "Turn around"],
["#whirl", "Whirl"],
["#bundler_inspired", "BundlerInspired"],
["#oldie", "Oldie"],
["#typhon", "Typhon"],
["#cube", "Cube"],
["#northern-lights", "Northern Lights"],
["#skewed", "Skewed"],
["#moonlight", "Moonlight"],
["#typewriter", "Typewriter"],
["#oldschool", "Old School"],
["#butchery", "Butchery"],
["#m6tt", "m6tt"],
["#1024-bytes", "1024-bytes"],
["#molokai", "Molokai"],
["#android", "Android"],
["#bookshelf", "Bookshelf"],
["#geocities", "GeoCities"],
["#imbatman", "I'm Batman"],
["#ebhoren", "Ebhoren"],
["#facetime", "Facetime"],
["#", "..."],
["#", "I hope"]];
var authors = [["http://twitter.com/jacobrask", "Jacob Rask"],
["http://vasilis.nl", "Vasilis van Gemert"],
["http://twitter.com/eworm_", "Wout Mager"],
["http://designfestival.com", "Alex Walker"],
["http://cssing.org.ua", "akella &amp; Genn"],
["http://chrsl.net", "Chris Lee"],
["http://www.basvandorst.nl", "Bas van Dorst"],
["https://twitter.com/iamvdo", "Vincent De Oliveira"],
["https://github.com/PhilG", "PhilG"],
["http://pointlessone.org", "Alexander Mankuta"],
["http://eswat.ca", "ESWAT"],
["http://be.net/iurevych", "Sergii Iurevych"],
["http://potapoff.org", "Igor «SkAZi» Potapov"],
["http://twitter.com/sntxrrr", "Paul Steffens"],
["http://twitter.com/derSchepp", 'Christian "Schepp" Schaefer'],
["http://thisbythem.com", "Lance Alton Troxel"],
["http://romanliutikov.com", "Roman Liutikov"],
["http://vibby.fr", "Vibby"],
["http://m6tt.com", "Matt Woodfield"],
["http://github.com/faisalman", "Faisalman"],
["http://designtomarkup.com", "Kien Nguyen"],
["http://agat.in", "Aleksej Romanovskij"],
["https://github.com/SelenIT", "SelenIT"],
["https://github.com/asavartsov/", "Alexey Savartsov"],
["#", "Paul Reid"],
["http://www.dominic-mercier.com", "Dominic Mercier"],
["http://twitter.com/bnijenhuis", "Bernard Nijenhuis"],
["#", "..."],
["#", "this will be enough"]];

for (let i = 0; i < variants.length; i++) {
    var li = createAppend('li', ul);
    var aVar = createAppend('a', li);
    aVar.href = variants[i][0];
    aVar.textContent = variants[i][1];
    var aAuthor = createAppend('a', li);
    aAuthor.href = authors[i][0];
    aAuthor.textContent = " - " + authors[i][1];
}

var article = createAppend('article', document.body);
article.setAttribute('role', 'main');

var header = createAppend('header', article);
h2 = createAppend('h2', header, 'The Beauty in ');
createAppend('abbr', h2, 'CSS');
appendText(' Design', h2);

var p = createAppend('p', header, 'A demonstration of what can be accomplished with only 1 ');
var abbr = createAppend('abbr', p, 'K');
abbr.title = 'Kibibyte';
appendText(' (', p);
var dfn = createAppend('dfn', p, 'Kibibyte');
dfn.title = '1024 bytes';
appendText(') of ', p);
abbr = createAppend('abbr', p, 'CSS');
appendText('. Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.', p);

var section = createAppend('section', article);
createAppend('h2', section, 'So What is This About?');
p = createAppend('p', section, "Back in 2003 (that's ");
var span = createAppend('span', p, 'a lot of');
span.id = 'zengarden-age';
appendText(' years ago!) ', p);
a = createAppend('a', p, 'Dave Shea');
a.href = 'http://mezzoblue.com';
appendText(' launched the ', p);
a = createAppend('a', p);
a.href = 'http://www.csszengarden.com';
var cite = createAppend('cite', a);
createAppend('abbr', cite, 'CSS');
appendText(' Zen Garden', cite);
appendText('. It showcased what was possible with ', p);
p.appendChild(abbr);
appendText('-based designs, leading to an explosion in the use of CSS on the web. Then, ', p);
a = createAppend('a', p, 'Peter van der Zee');
a.href = 'http://qfox.nl';
appendText(' created ', p);
a = createAppend('a', p, 'JS1k');
a.href = 'http://js1k.com';
appendText(' in 2010, a competition to build cool applications with no more than 1 ', p);
createAppend('abbr', p, 'K');
appendText(' of JavaScript.', p);
p = createAppend('p', section, 'A lot has happened since the Zen Garden days, and today you can do almost anything with only ');
createAppend('abbr', p, 'CSS');
appendText('. As ', p);
p.appendChild(abbr);
appendText(' use is growing, so is the average ', p);
p.appendChild(abbr);
appendText(' file size. Popular sites have in average ', p);
a = createAppend('a', p, '75 ');
a.href = 'http://httparchive.org/interesting.php#bytesperpage';
createAppend('abbr', a, 'K');
appendText(' of ', a);
abbr = createAppend('abbr', a, 'CSS');
appendText(', but some use up to a megabyte of style sheets!', p);
p = createAppend('p', section, 'Do we need that much? ');
createAppend('b', p, 'CSS1K');
appendText(' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.', p);

section = createAppend('section', article);
createAppend('h2', section, 'Participation');
var ol = createAppend('ol', section);
var li = createAppend('li', ol, 'Submissions must consist of only ');
createAppend('abbr', li, 'CSS');
li = createAppend('li', ol, 'Submissions may be up to 1 ');
abbr = createAppend('abbr', li, 'K');
abbr.title = 'Kibibyte';
appendText(' (1024 bytes) minified', li);
li = createAppend('li', ol, 'Vendor prefixes are ');
var em = createAppend('em', li, 'not');
appendText(' counted to the total number of bytes – submit your code unprefixed and ', li);
a = createAppend('a', li, 'PrefixFree');
a.href = 'https://leaverou.github.io/prefixfree/';
appendText(' will add necesssary prefixes', li);
li = createAppend('li', ol, 'Any external resources and images, including ');
createAppend('code', li, 'data');
createAppend('abbr', li, 'URI');
appendText("'s, ", li);
createAppend('code', li, '@font-face');
appendText(' and ', li);
createAppend('code', li, '@import');
appendText("'s, are forbidden", li);
li = createAppend('li', ol, 'The page ');
a = createAppend('a', li, 'does not');
a.href = 'http://dowebsitesneedtolookexactlythesameineverybrowser.com';
appendText(' have to look the same in every browser, but graceful degradation is encouraged', li);
li = createAppend('li', ol, 'The submitted code is licensed under the ');
a = createAppend('a', li, 'MIT License');
a.href = 'http://www.opensource.org/licenses/mit-license.php';

p = createAppend('p', section, 'To participate, fork ');
a = createAppend('a', p, 'CSS1K');
a.href = 'https://github.com/selfthinker/CSS1K/';
appendText(' at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage).', p);

var footer = createAppend('footer', document.body);
p = createAppend('p', footer, 'Licensed under the ');
a = createAppend('a', p, 'MIT license');
a.href = 'http://www.opensource.org/licenses/mit-license.php';
appendText('. Hosted and managed at ', p);
a = createAppend('a', p, 'GitHub');
a.href = 'https://github.com/selfthinker/CSS1K';
appendText('.', p);



