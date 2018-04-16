### Christoffersonian is my personal portfolio website. While a single HTML file contains all the content for the entire site, the site *is* sort of broken into pages based on project, about me, etc.

### The structure of the underlying files and folders is as follows:

* The creation materials folder has several raw files that were used to generate assets. I've kept this folder intact in case I need to go back and re-recreate any content.
* The CSS folder has 4 files:
⋅⋅1 animate.css
⋅⋅⋅ This is mostly a relic at this point as animate.css code has been removed from the site. This will likely be deleted in the near future once I can be sure there's still nothing that needs it.
⋅⋅2 imageviewer.css
⋅⋅⋅ Also mostly a relic. This was from a time when the portfolio site used a lightbox to enlarge images. This has since been moved to Google Drive. This will also be removed in a near update once I can double check that it is no longer being used. Like animate, this isn't code of my own, but was rather imported into the site.
⋅⋅3 normalize.css
⋅⋅⋅ Used to strip some pre-formatting from browser differences. Not created by me, and included on most sites I create.
⋅⋅4 style.css
⋅⋅⋅ The single main CSS file used to format the entire site. This file is large and fairly cumbersome. I intend to go back to it and make several changes, namely splitting the file up into several parts. As it currently stands, though, this one file controls everything for styling.
* The Javascript folder has 7 files:
⋅⋅1 grow-shrink.js
⋅⋅⋅ This is a large script that contains all the code for growing, shrinking, and resizing content windows specific to case studies and the "about me" section. There's a lot of complex code here, but the code has been commented thoroughly.
⋅⋅2 imageviewer.js
⋅⋅3 imageviewer.min.js
⋅⋅⋅ Like the imageviewer css file, these two Javascript files are mostly obsolete and will be removed in a near future update.
⋅⋅4 initial-load.js
⋅⋅⋅ This file controls a lot of the animated elements on the homepage and also the animated title fade-ins on the case studies.
⋅⋅5 jquery-3.2.1.min.js
⋅⋅⋅ jQuery standard package.
⋅⋅6 map.js
⋅⋅⋅ Controls all the functionality for the "about me" page.
⋅⋅7 velocity.min.js
⋅⋅⋅ The imported code for the velocity.js package. Velocity.js is what animates nearly everything on the site.
* The images folder is exactly what it seems like. All the images for the site are stored here.
* Non folder items. This includes:
⋅⋅* Copies of my resume in both a normal and condensed-size format.
⋅⋅* The index.html page for the site.
⋅⋅* The video preview for the site available on the case study about the site itself.
⋅⋅* This file.
⋅⋅* The short demo video showing what I can do in Unity3D.
⋅⋅* A very minimal unity.html file meant to do nothing but house the Unity video.
