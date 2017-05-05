A very short intro to productivity tools for devs
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

## Who cares?

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

![](resources/bookmark.jpg)

---

## Mechanics: Launchers

> Search always trumps navigation.

___

### Launching programs

Windows alternate startmenu, Unix, Mac spotlight dinges

___

### Launching (menu) actions in programs

Mac: help search
Tools zoals SUBL: CMD+SHIFT+P

---

## Mechanics: History

> Those who don't rely on their history are doomed to type it again.

___

### Clipboard history

___

### Cmdline history

Windows: F8? 
Pijltjes drukken VS shortcut keys
Unix: "history", set -o vi, ESC + /

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

### Automate the web: selenium

WebDriver. Kan in C#, python, ... 

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

## The perfect Tool

Requirements:

* macro recording
* cmdline-able
* regexp search/replace
* +1 registers
* crossplatform
* your requirement here?

### The perfect Tool: an IDE

IntelliJ platform, Eclipse, VStudio

___

### The perfect Tool: an Editor

New gen: Sublime3, Atom, VSCode

Old gen: VI, Emacs
Still relevant!! 

___

### The perfect Tool: cmdline

Cygwin, voorbeeldjes, grep, sed, ...

http://www.brainbaking.com/wiki/unix/cmd/

set -o vi

___

### The perfect tool: which language to use when?

Use a "real" (script) language to automate chores.

Why? Unit testability, vs shell/Bash script. 
Why? Keep behaviour in (unit tested) code.

---

## Philosophy

Be a polyglot
