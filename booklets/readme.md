# Booklets

## Shared Content

### Commit Export

#### Booklet

`git log --reverse --no-merges --format="**%cd**  %n%s%n%n%b%n" --date=format:'%a, %d %b %Y %H:%M:%S' > commit_log.qmd`

Example of Commit message extracted with this line:
**Tue, 7 Jan 2025 15:04:13**  
Journal: Starting point 

#### Gource

`git log --pretty=format:user:%aN%n%ct --reverse --raw --encoding=UTF-8 --no-renames --no-show-signature > gitgource.log`

## Questions / Todos:

### General

- what to do with the links in the booklets? footnotes?
- the timeline of Todo.md is interesting, almost up to the commit messages, maybe even more... how to show them better?
- make better looking graphs for the commit overview
- make a better looking timeline for *It is as if...*
- displaying "done" todos in a more readable way?
- adding assets?
- adding code?
- general preface area needs to be reworked
	- infos & press infos can be much shorter

### Only Phone

- merging Why.md into Journal?

### Only Love

- (re-)formatting commit messages; Pipping has uses a lot of special characters in the commit messages, they are not looking good if just imported to markdown
- it it right to assume in this case the journal was written in parallel and only added later (2022)? why?
	- especially *to-do.md*, misses any commit history to it
- press & info needs to be added

### Only Work

- adding screenshot to booklet?
- finding missing images (blog posts)
- restructuring press?
- adding quotes from book & conference paper? or at least mentioning them in the intro? (or in the end?)
- adding social media (images) to press about?

## Quarto - Tutorial

### General Setup

[Get Started](https://quarto.org/docs/get-started/hello/vscode.html) on the Quarto website is a really good place to start. VS Code seems to work really well.

### Writing / Editing

For writing / editing:  
Work with *Preview* to show the results as an HTML page.

But we can also use it to easily generate any format we might need for layout / printing.

## Design / Layout

### Message to Jesse 2025-03-10

Dear Jesse,

(as always) sorry for the long gap, I needed a while to collect my thoughts. I'm just thrilled that you're willing (inspired?) to join us and help with the booklets, the style, the orga. Very much looking forward to this!

A kind of manifesto on everything booklet-related:

1) The more I think about it, the more I think in terms of a zine rather than a booklet. I am not at all sure if this is a proper distinction, but what I mean is that a zine is something more "unfinished", work in progress (as opposed to a booklet, which is very much finished). This needs / should be represented both in structure (some zines need to be open-ended and we need to be able to add to them during the exhibitions, new pages, drawings, etc.) and content (somehow I'm afraid of too much finishness, too much perfection, would prefer something where being rough is still ok).

2) The booklets / bundle of booklets needs to represent some kind of a merge of two ideas. Until now, Devolution was always a "Devolution of...", we have picked a game and observed / examined it. This time it feels more like a merge / cooperation / crossover of two ideas:

- https://pippinbarr.com/
	- his ideas in https://mitpress.mit.edu/9780262546119/the-stuff-games-are-made-of/
	- strong visual style, both his website, but also the book
- https://devolution.online/
	- unfortunately we changed our visuals / style a lot during the last iterations, with the branching logo (https://devolution.online/devolution7_lmd_2023/) being the last version, we have tried to understand the branches as something that can grow, even had stamps https://devolution.online/wp-content/uploads/2023/11/IMG_8102-e1737123756942.jpeg

...through the example of:

- *It is as if...* series
	- a series of games, all variations on similar topics, has evolved over time
	- consisting of 5 - 6 games, most of them aesthetically separable in two directions:
	- the games more recent *Phone* and the old *Chess*
		- https://github.com/pippinbarr/it-is-as-if-you-were-on-your-phone
		- https://github.com/pippinbarr/it-is-as-if-you-were-playing-chess/tree/main/info
	- *Work* and *Love* are heavily referencing by MS Windows
		- https://github.com/pippinbarr/itisasifyouweredoingwork/tree/master/info
		- https://github.com/pippinbarr/itisasifyouweremakinglove/tree/master/info

3) The idea is to have a booklet/zine for each game, plus an additional meta-booklet and maybe an empty notebook for reflecting practitioners.

4) The main content for most of the booklets will be the journal from the corresponding game (an example: https://github.com/pippinbarr/it-is-as-if-you-were-on-your-phone/blob/main/process/journal.md), but accompanied by some additional information / material (commit messages, source code, images). A collage, structured over time, with a strong main thread (the journals).

5) Since I suspect that the style of the booklets will be amazing and visually strong... I think it is safe to say that the whole visual style of the exhibition needs to be informed / inspired by it... how can we do this?

I think / hope thats it. 
Looking forward to discuss, not sure about half the things I wrote about.
