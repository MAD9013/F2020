(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{426:function(e,t,a){e.exports=a.p+"assets/img/manage-access.84d42397.png"},447:function(e,t,a){"use strict";a.r(t);var n=a(53),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"steps-to-follow-to-set-up-a-repo-for-an-assignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-follow-to-set-up-a-repo-for-an-assignment"}},[e._v("#")]),e._v(" Steps to Follow to set up a Repo for an Assignment")]),e._v(" "),n("p",[e._v("::: Note\nThese are generic instructions about getting started with new repos to use in your assignments.\n:::")]),e._v(" "),n("h2",{attrs:{id:"_1-always-start-with-your-own-repo-on-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-always-start-with-your-own-repo-on-github"}},[e._v("#")]),e._v(" 1. Always Start with Your Own Repo on GitHub")]),e._v(" "),n("ul",[n("li",[e._v("Create a "),n("strong",[e._v("Private")]),e._v(" GitHub Repo called "),n("code",[e._v("whatever the assignment asked you to create")]),e._v(" on your GitHub account, without a "),n("code",[e._v("README.md")]),e._v(" file.")]),e._v(" "),n("li",[e._v("On the GitHub settings for your repo, go to the "),n("code",[e._v("Manage Access")]),e._v(" link on the left side of the page and invite your instructor to the repo as a collaborator. For example, on GitHub, Steve's username is "),n("code",[e._v("prof3ssorst3v3")]),e._v(".")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(426),alt:"manage access"}})]),e._v(" "),n("h2",{attrs:{id:"_2a-using-a-copy-of-an-instructor-s-repo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2a-using-a-copy-of-an-instructor-s-repo"}},[e._v("#")]),e._v(" 2a. Using a Copy of an Instructor's Repo")]),e._v(" "),n("ul",[n("li",[e._v("Sometimes you will start with a repo provided by your instructor. If you do "),n("strong",[e._v("NOT")]),e._v(" have one of these then skip to "),n("strong",[e._v("step 3")]),e._v(".")]),e._v(" "),n("li",[e._v("Start in Terminal (MacOS) or Command Shell (Windows) by navigating to the folder where you want to create your own copy of the repo.")]),e._v(" "),n("li",[e._v("Next, clone their repo Eg: https://github.com/instructorsname/reponame on to your computer by typing the following in the Terminal:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/instructorsname/reponame.git reponame\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("Make sure you change the user name and repo names to the proper ones.")]),e._v(" "),n("li",[e._v("the second "),n("code",[e._v("reponame")]),e._v(" is the name of the folder you will be creating.")]),e._v(" "),n("li",[e._v("Next "),n("strong",[e._v("DELETE")]),e._v(" the "),n("code",[e._v(".git")]),e._v(" folder inside your "),n("code",[e._v("reponame")]),e._v(" folder with the following commands:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd reponame\nrm -rf .git\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ul",[n("li",[e._v("replace "),n("code",[e._v("reponame")]),e._v(" with your actual folder name.")]),e._v(" "),n("li",[e._v("Now we need to turn our folder into a Git repo on our computer and point it at the one that we created on GitHub.")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git init\ngit remote add origin https://github.com/[YOUR USERNAME]/reponame.git\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ul",[n("li",[n("Badge",{attrs:{text:"Warning"}})],1),e._v(" "),n("li",[n("strong",[e._v("IF")]),e._v(" you did create a repo with a "),n("code",[e._v("README.md")]),e._v(" file on GitHub or you changed the repo or added files through the GitHub interface then we need to download that file before adding our own. Type this to download all files from your own repo on GitHub:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git pull -u origin master\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("If there was nothing new to download then the "),n("code",[e._v("pull")]),e._v(" command will give a warning.")]),e._v(" "),n("h2",{attrs:{id:"_2b-starting-with-your-own-github-repo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2b-starting-with-your-own-github-repo"}},[e._v("#")]),e._v(" 2b. Starting with Your Own Github Repo")]),e._v(" "),n("ul",[n("li",[e._v("If you were not provided with a starter repo, and just created one of your own on GitHub then the steps are similar.")]),e._v(" "),n("li",[e._v("You will need to clone your own repo from GitHub to a local folder.")]),e._v(" "),n("li",[e._v("Start by navigating with Terminal (MacOS) or Command Shell (Windows) to the place where you want to create the repo.")]),e._v(" "),n("li",[e._v("Next clone your repo by typing the following:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/[YOUR USERNAME]/reponame.git reponame\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("replace the username and reponame with your own.")]),e._v(" "),n("li",[e._v("the second "),n("code",[e._v("reponame")]),e._v(" is the name of the folder you will be creating.")]),e._v(" "),n("li",[e._v("finally, navigate into your repo folder.")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd reponame\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("IF you already created a folder for your project and have file inside the folder then you can "),n("code",[e._v("cd")]),e._v(" inside the folder and run the "),n("code",[e._v("git clone")]),e._v(" command from inside the folder. Just replace the "),n("code",[e._v("reponame")]),e._v(" with a period, like this.")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/[YOUR USERNAME]/reponame.git .\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("Again, if you already have files inside your GitHub version then you should download those files first.")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git pull -u origin master\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h2",{attrs:{id:"_3-adding-starter-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-adding-starter-files"}},[e._v("#")]),e._v(" 3. Adding Starter Files")]),e._v(" "),n("ul",[n("li",[e._v("Sometimes you will have files that are provided for your assignment, like HTML or CSS or images in a Zip file on BSLMS. These need to be copied into the repo folder and then we need to tell Git to keep track of the files.")]),e._v(" "),n("li",[e._v("In your Terminal (MacOS) | Command Shell (Windows), you should be inside your "),n("code",[e._v("reponame")]),e._v(" folder and type the following:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('git add -A\ngit commit -m "first files"\ngit push -u origin master\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("h2",{attrs:{id:"_4-modifying-your-repo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-modifying-your-repo"}},[e._v("#")]),e._v(" 4. Modifying your Repo")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("EVERY")]),e._v(" time you want to save your changes locally and then upload, use these same commands:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('git status\ngit add -A\ngit commit -m "description of your changes"\ngit push -u origin master\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("Additional "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=EdEWigP6zxQ&list=PLyuRouwmQCjmYaG21ijCw0KrFiFEG0Oh9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git CLI Reference Playlist"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/assignments/"}},[e._v("Back to the Assignment List")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);