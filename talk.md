A (very) short intro to productivity tools for devs
=============================

---

![](resources/logo.svg)

<ul style="list-style: none;">
	<li><i class="fa fa-github" aria-hidden="true"></i>&nbsp;&nbsp;[Wouter Groeneveld](https://github.com/wgroeneveld/)</li>
	<li><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;09/05/2017 </li>
</ul>

___

## Agenda

* What is productivity?
* Who cares?
* (Lots of) mechanics
* (Lots of) examples
* Philosophy
* External resources

---

## What is productivity?

> Productivity describes various measures of the efficiency of production

Developers are getting less efficient, not more!

___

### Plowing the field (V. Van Gogh, 1882)

![](resources/plower.jpg)

___

### Plowing the field (2000+)

![](resources/plower2.jpg)

___

## Who cares?
<!-- .slide: data-background="#85ba62" -->
Good for the company your work for...

But also and most importantly: good for yourself! 

![](resources/happy.png)

___

How long would you want to be this person?

![](resources/sad.jpg)

___

## If it's that obvious...

Then **why aren't we doing it**?

* It's too difficult
* It's something you're not aware of (not anymore!)
* time <i class="fa fa-clock-o" aria-hidden="true"></i> pressure: takes too long to learn/master
* I'm too lazy

The right lazy people **are** productive and use the tools.

___
<!-- .slide: data-background="resources/fountainpen.jpg" -->

Know your tools!

---

## Mechanics

> We are struck with technology when what we really want is just stuff that works.

Concentrate on **essence**, not on **ceremony**. 

___

![](resources/startmenu.gif)

How often do you click in this thing to get something started?

___

![](resources/spotlight.png)

___

## Concentrate on **essence**, not on **ceremony**. 

Ceremony: bootstrapping. To get where you want to be.

Essence: You're there now. Do what you want to do. 

___

<!-- .slide: data-background="resources/bookmark.jpg" -->

---

## Mechanics: Launchers

> Search always trumps navigation.

![](resources/google.png)

___

### Launching programs

![](resources/win10.png)

* http://windowsreport.com/desktop-app-launchers-windows-10/ 
* Unix
* Mac spotlight + alternatives

___

### Launching (menu) actions in programs

![](resources/subl.png)

CMD+SHIFT+P
<br/>
Mac: help search

---

## Mechanics: History

> Those who don't rely on their history are doomed to type it again.

___

### Clipboard history

![](resources/clipboard.png)

___

### Cmdline history

![](resources/cmdhistory.png)

* Windows: `F7`, `F8` (Within one session) > Arrow up/down
* Unix: "history", `set -o vi`, ESC + /

http://mridgers.github.io/clink/

---

## Mechanics: focus

___

### Distraction-free mode

F11, overal in tools beschikbaar tegenwoordig
Turn off notifications!
Don't live in your mailbox!
Throw out your cellphone! 

quiet time

___

### Monitors++

(and keyboards/mice, pair programming)

---

## Mechanics: automatisation

___

### Write scripts to do the work for you

file manipluation on regular basis, ...
Python & Ruby are excellent choices here

___

### Whatever you do: don't reinvent the wheel!

+1mil. Libraries of all languages available.

Nuget, Rubygems, Composer, node, ... packages

___

### Automate repetetive commands: F5 F5 F5 F5 ...

Build tool plugins:

![](resources/gulp.png)

Livereload - https://www.npmjs.com/package/gulp-livereload


___

### Automate the web: selenium

WebDriver. Kan in C#, python, ... 

___

### Automate between APIs: IFTTT

https://ifttt.com/

![](resources/ifttt-banner_wp.jpg)

___

### Use commandline variants of programs

SVN ipv tortoise, wget ipv browsing, ...
Integrate them somewhere

___

### Automate clicks in your OS

Automator example in OSX

___

### Don't exaggerate: YAGNI

http://thehumbleprogrammer.com/mastering-yagni/

![](resources/yagni.jpg)

---

## Mechanics: eliminate duplication

___

### Use version control!

___

### Use dropbox/GDrive/...

___

### Canonical build PCs

Bob's PC === Jeff's PC
Automate with Vagrant/puppet/...

___

### Symlinks

> ln -s 

Windows: junction

___

### Keep your documentation in one place

Mogelijkheden? Wiki, Github pages + Static web engines

Automatisatie integratie github etc

Boekske? Analoog vs digitaal

Genereer documentatie wanneer afhankelijk van code (bvb class diagrams etc)

---

## Lot's of examples! 

___

### TDD

Automate tests, be productive, run stuff faster, get notices faster, ...

Build tools, etc etc

___

### Statistics generation

teamcity build grafiekske, code coverage automated, ... 

___

### Getting work done using reflection

simpel voorbeeldje met reflectie sneller oplosbaar
(welke taal?)

---

## Again: Know your Tools

![](resources/tool.jpg)

Requirements:

macro recording, cmdline-able, regexp search/replace, +1 registers, crossplatform, your requirement here?

___ 

### The perfect Tool: an IDE

![](resources/intellij.png)

* IntelliJ platform
* Eclipse
* Visual Studio
* ... 

Daily (heavyweight) work done here.<br/>
So why not be productive with it?


___

### The perfect Tool: an Editor - the new gen.

![](resources/vscode.png)

**Get to know them** - put in the extra time!

___

### The perfect Tool: an Editor - the old gen.

VI, Emacs - Yes, they are still **very relevant**!

![](resources/gvim.png)

Vi shortcuts in cmdline: `set -o vi` (incl insert mode)

___

### Vi and recording

![](resources/vim-macros.gif)

https://nathanleclaire.com/blog/2013/10/27/5-cool-unix-hacks-for-fun-and-productivity/

___

### The perfect Tool: cmdline

Cygwin, grep, sed, ...

http://www.brainbaking.com/wiki/unix/cmd/

```cmd
find . -name "*.csproj" -exec grep -H 2 "utilities" {} \;
sed 's/<br/>(.*<br/>)/regel:<br/>1/g' log.tmp >> $logfile
cat file | sed -e 's/replace/by/g' -e 's/other/new/g' 
echo 'holy shit I am seriously impressed'
```

___

### The perfect tool: which language to use when?

Use a "real" (script) language to automate chores.<br/><br/>

Why? Unit **testability**, vs shell/Bash script. <br/>
Why? **Keep behaviour in (unit tested) code**.

---

## Philosophy of a productive person

> Productivity beyond coding: '(life) hacking'

![](resources/hacker.jpg)


___ 

### Be a polyglot

![](resources/polyglot.jpg)

___

### Getting Thigns Done (GTD)

> Having a system that works and gets the work done. 

![](resources/gtd.jpg)

___

### John Locke's system

Trying to be productive is older than you might think... 

![](resources/bullet_journaling.jpg)

---
<!-- .slide: data-background="#85ba62" -->
## Resources

* The Productive Programmer: http://nealford.com/books/productiveprogrammer
* Leo Babauta's Focus manifesto: http://focusmanifesto.s3.amazonaws.com/FocusFree.pdf
* ReSharper Documentation: https://www.jetbrains.com/resharper/documentation/documentation.html
* Download Cygwin: https://cygwin.com/install.html
* Life Hacker: http://lifehacker.com/
* Learning the Vi and Vim Editors: http://shop.oreilly.com/product/9780596529833.do

