# tab lab

[View live](https://tab-lab.vercel.app)

<br />

![A screenshot of the tab lab website](public/images/tablabpreviewimage.png)

<br />

## Description

Tab Lab is a tool for creating guitar tab templates.
<br />
<br />
Users can see a preview of the template, make adjustments, and download/print the page.
<br />
<br />
<br />

## Table of Contents

- [FAQ](#faq)
- [How to use](#how-to-use)
- [Links](#links)
- [Contact](#contact)

<br />
<br />

## FAQ

### What is a guitar tab template?

Guitar tablature is a visual representation of a guitar neck with lines representing the strings and numbers representing the frets. It is used as a shorthand way to notate guitar music and make it easier to read and play.
<br />
<br />
These templates serve as a canvas for musicians to write their own notation on.
<br />
<br />
<br />

### Why did I make this tool?

As a musician, I use tablature often. Whether I'm transcribing a song I want to learn, taking quick notes at band practice, or bringing a catalog of songs to a performance, I use tablature as a quick and easy way to write and read music.
<br />
<br />
Many musicians use tablature in a similar way, but finding a template can be surprisingly frustrating.
<br />
<br />
In the past, whenever I needed a blank sheet of tab paper, I would search the internet. Sometimes I found something that would work, but I often couldn't. Attempts to create my own templates with programs like Photoshop took a lot of time to create and were difficult to quickly adjust.
<br />
<br />
The issues most commonly found when searching for tab paper templates include:

- difficult to navigate websites
- deceptive file download buttons
- bombarded with advertisements
- watermarks or other unwanted text
- no easy way to make adjustments
- limited options for less common instruments like 5-string bass or 7-string guitar

<br />
I built this project to address those issues. This is a simple tool that allows musicians to quickly create the perfect template for their needs.
<br />
<br />
<br />

### What challenges are there in building this project?

The biggest challenge for me personally was finding the right balance between making improvements and getting something complete. In the past I've found myself taking a long time, or never even finishing a project, all in the pursuit of perfection or "one more thing."
<br />
<br />
So instead for this project, I made an effort to just get everything working before a self-imposed deadline, then focus on making improvements over time.
<br />
<br />
<br />
<b>Challenges specific to this project:</b>
<br>
<br>
<b>CSS-in-JS + SSR = FOUC</b>
<br>
Working with Styled Components and Next.JS is causing a flash of unstyled content. This is due to the CSS-in-JS being loaded after the initial page load. I either need to figure out how to get SSG (Static Site Generation) working with Next.JS so I can have the Styled Components converted to vanilla CSS at build time and served at initial load, or refactor the Styled Components to a different method of using CSS.
<br />
<br />
<b>CSS on different devices</b>
<br />
A few of the CSS rules I used for sizing were behaving differently on different browsers. For example, using `aspect-ratio` worked as I needed it to in Safari, but not in Chrome. Using the `vh` unit affected the printed page in Safari, but not in Chrome.
<br />
<br />
<b>Printing from different devices</b>
<br />
During testing I found that different devices and browsers completely changed what would be printed. My solution was to re-write the CSS in a way that was more stable across devices, as well as provide extra controls for users to make adjustments to compensate for any sizing issues.
<br />
<br />
<br />

### What's next / to do?

<b>Bugs & Improvements</b>

- Fix flash of unstyled content issue
- Refactor CSS to something other than Styled Components
- Improve adjustment controls
- Improve printing accuracy on Safari

<br />

<b>Features</b>

- Create themes for light and dark mode
- Create options to add bpm, key, etc. labels to header
- Implement presets
- Implement user accounts and saved presets

<br />
<br />

## How to use

<b>Print Safari\*</b>
<br />
Use this button to print from Safari browser
<br />
\*printing from Safari or on an iPhone seems to add extra margin that I haven't figured out how to remove yet. This print option reduces the template size to avoid printing an empty 2nd page
<br />
<br />
<b>Print Chrome\*\*</b>
<br />
Use this button to print from Safari browsers
<br />
\*\*printing from Chrome browser on a desktop produces a more accurate preview and print page
<br />
<br />
<b>Number of Strings</b>
<br />
Set number of strings between 4 and 12
<br />
<br />
<b>Frets / Measures</b>
<br />
Set number of vertical lines on each tab row. Set to <b>none</b> for plain tabs, or add lines for measures or frets to create scale charts
<br />
<br />
<b>Number of Rows</b>
<br />
Set number of tab rows
<br />
<br />
<b>Adjust Horizontal Scale</b>
<br />
Adjust width of all tab rows
<br />
<br />
<b>Adjust Vertical Scale</b>
<br />
Adjust height of all tab rows
<br />
<br />
<b>Adjust Horizontal Offset</b>
<br />
Adjust all tab rows left or right. Useful to make room for 3-hole punch
<br />
<br />
<b>Adjust Space Between Rows</b>
<br />
Adjust space between all tab rows
<br />
<br />
<b>Page Header</b>
<br />
Show or hide header at top of page
<br />
<br />
<b>Page Header Height</b>
<br />
Adjust height of page header
<br />
<br />
<b>Adjust Line Size</b>
<br />
Adjust thickness of all tab lines
<br />
<br />
<br />

## Links

- [View live](https://tab-lab.vercel.app)

<br>

## Contact

- [Portfolio - andrewdent.dev](https://andrew@andrewdent.dev)
- [Email - andrew@andrewdent.dev](mailto:andrew@andrewdent.dev)
- [GitHub - @andentx](https://github.com/andentx)
- [LinkedIn - Andrew Dent](https://www.linkedin.com/in/andrewdentdev/)
- [Twitter - @andentx](https://twitter.com/andentx)

test
