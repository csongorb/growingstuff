# Thoughts on Design / Layout / Editing

## Message to Jesse 2025-03-10

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

## Message to Jesse 2025-04-19

Dear Jesse,

again, thank sooooo much, [this](./tests/LoveTest_250418.pdf) is such an awesome version already. Interesting to see of your changes, your point of view adds so much.

We just had a longer discussion and here are our observations, starting with simple ones:

- most images do / will NOT have a caption, I think it's easier to not work with that
- I / we have a similar feeling with the upper right/left corners "It is as if you were making love"
	- on the one hand I feel it's just not so much needed, and it's also killing a lot of space
	- but I also don't fully "get" the logic when its there and when not, maybe I just misunderstand?
- Table of Contents
	- thats just not easy... generally, I feel it looks gooood, BUT:
	- the idea was to use a Pippin-style TOC, resembling his readme-structure
	- which would be the first bullet-point list of the redame section (incl. the brief descriptions) AND the page-nr. next to them... maybe I can / should visualise it?
- With or without ".md"
	- hm, I get your reasoning behind excluding them... need to think about it more, but yes, maybe we can just leave them out, the idea behind them is... very nerdy and not too clear
- Restructuring / merging Info & Press Kit
	- hmm, thats again not easy, as I tried to aim for a nice balance between "preserving" and "not-repeating"
	- for example, I kept the "Who is this Pippin Barr guy?" because he has a new version of it for each booklet, so there is a "progress" and for us exploring such progress is... essential?
- Imprint & such
	- yesss, you are already very much more on point than I ever could! thanks!
	- small changes in production team, will let you know when we have it

We made a new version [again](./2018_love/_book/), except the todo-chapter: done.

Such things. Lot of details. Let's talk? Looking forward for sure!

## Jesse > Csongor 2025-04-20

Hi Csongor,  
Thanks for the feedback … and, of course, I'm glad to hear you're generally happy with the way things are going. I think most of what you wrote in your message can be distilled to a single question: to what degree do we want to preserve the structure and apparatus of the original digital form, and to what extent should we adapt it to the restrictions of a physical book.
 
As you know, my own background is in classical (i.e. physical) book design, which has its own rules and conventions that I have (somewhat unthinkingly) applied to the booklet design; I confess that I am wholly unfamiliar with the format in which you are working, although I am aware that your field – as with all specialist fields – has its own vocabulary and its series of conventions that make sense to initiates but that seem utterly foreign to outsiders. All of which is to say that the current design is my attempt to find a common ground between your text and my own design approach, but that it has necessarily skewed in the direction of traditional book design.
 
So, for example, the running headers follow a very traditional scheme: they appear on all pages except important recto pages (in this case title, contents and chapter heads) … and in my own view they are not killing space so much as giving the pages room to breathe. The ToC follows the conventions of a traditional book – i.e. as a simple index – rather than the conventions of a "readme" which, although I don't really know what it is, seems designed more for an environment in which you can click on the word "chapter 2" and be transported there instantly. (Also, full disclosure: I was absolutely confused by the purpose of that page … I kept it because it was part of the text, but you'll notice that I shunted it off to a verso page because I wasn't entirely sure what to do with it).
 
In short, your original text has its own structural mechanisms that allow the reader to "navigate" the text, while the printed booklet necessarily has a different set of mechanisms that serve the same function. Our joint goal is to figure out the best way to translate the text from one medium to the other … I suppose this is something we should have discussed ages ago, but I am confident we will be able to figure something out. Ultimately you know the audience for which these books are intended, and I want to make sure they reflect your vision.
 
I suppose the larger existential question is: if all of this information is freely available to read on the internet, why are we bothering to turn it into a book? The answer (for me, at least) is self-evident: the physical artefact is a tangible luxury in an age when texts exist primarily as zeroes and ones. But the value of these documents consists not merely in the fact that they are printed, but in the fact that they are edited and organised, sculpted into something permanent. I know that this goes somewhat against the ethos of the digital age in which everything is logged in real time and even errors become an important part of the process, but that, of course, is what makes the project interesting: like the letterpress-printed QR code that I showed you the other day, there is value in attempting to translate between media.
 
I include all of the above comments primarily in order that they may guide our remaining work. There is, of course, no right or wrong way to translate from the original format to the printed booklet … the only guideline is "does it work?" And if we are all in agreement, then it probably works.
 
In practical terms, I am happy to prepare a new version of the booklet with the size of the running headers reduced — this will, of course, have the side-effect of buying us a bit more space and thus making the booklet smaller. I am also happy to play around with the ToC, perhaps to find a hybrid approach (now I know that the "readme" was intended as a ToC this will make my work easier).
 
Regarding the "Who is this Pippin Barr guy" I really like this, which is why I removed it to the back where the "about the author" would traditionally be located, and there is certainly no problem if it changes from booklet to booklet. If you would prefer it near the front – perhaps on the verso opposite the press kit – I am happy to do this, but I would recommend keeping it separate. However I really liked the idea of having it as the last page of every booklet, and I was thinking you might also add a few sentences of your own under the header "…and what exactly is Devolution?"
 
I also have a request: the thing that took me the longest when designing the text in InDesign was standardising the format of dates (I had to retype them all myself); would it be possible for you to do this easily in the original files? I recommend the following: "Day, Date Month Year [forced line return] Time" … so: Sunday, 20 April 2025 13:48. However any format is fine so long as it is consistent (in the draft I set it switched midway through).
 
One final thing: the text, as it stands, is full of minor typos and errors, many of which cannot be caught by a spell-checker because they are, in fact, proper words (just not the right one). I have not been correcting these as a I typeset because I am aware that this is not the final draft … but if you can let me know when I have the final draft, I will start combing for typos as I set. Once I start this process, we will no longer be able to edit the original text, but must make all changes directly in the InDesign document.
 
I think that's it for now. Hope you're having a relaxing Easter weekend – it looks like a nice day out there – and I will try to send a new draft today or tomorrow incorporating some of the things we've discussed.
 
See you soon,  
J

## Jesse > Csongor 2025-04-21

Hello again.
 
Further to my last message (which, I realise, was rather long … I think it was Pascal who said that he wrote a long letter because he didn't have time to write a short one) here is a new version of the Love booklet. I reset the whole thing from scratch, mostly to see how long it would take.
 
I also made a [few modifications](./tests/LoveTest_250421.pdf) based on your feedback:

— The ToC reflects your text more closely while still remaining within a traditional book structure
— I've slightly amended the second half of the readme text and included it as "a note on the text" on the verso. I wasn't sure who wrote this, but generally speaking when the text includes a "I" it should have the name of the author or editor underneath.
— I've pushed the running headers to the top of the page and made the page numbers a bit smaller. This has allowed me to make the columns a bit wider. As such, the total extent of the booklet is now 64pp. Not bad.
 
There are still lots of minor design errors that will be ironed out in the final version, but I wanted to send this so that you could get a sense of how things are evolving.
 
See you soon,  
J

## Csongor > Jesse

Dear Jesse,  
this is just... just so awesome!  
Don't really know what to say, that besides a few last more typo-like things this is all almost finished.

- the "a note on the text" has a quote in the original (maybe it got lost on the way?), can you keep that? we'll have a few more quotes in the meta-booklet, maybe you need a style for that?
- about the dates... have tried to change them, but couldn't manage. today my focus was on something else, but I can try tomorrow again

Also: most booklets are done now, feel free to start / continue with *Love* (fully finished!) and *Chess* and *Work*. Give me one more day to finish the others.

Aaaah, and also a few words about your awesome [Cover Tests](./dessauerPress/cover/CoverTests_250419.pdf):

![](./dessauerPress/cover/CoverTests_250419%203.png)

![](./dessauerPress/cover/CoverTests_250419%201.png)

![](./dessauerPress/cover/CoverTests_250419%202.png)

- my initial impulse was that the colors are one step too pale, but the more I look at it the more I like it
	- have the feeling I would like to see another one, just for options, but its just my ego
	- the last / brown one is... brown I suppose? 
- text-wise I would like to add "It is as if you were..." to it and also "A MAZE. / Berlin 2025" to it, just for completion
- the line is... just awesome!
- missing one one one playful element on those, 
	- not the emojis, but one graphical element per game?
	- or some pieces of the Devolution leaf?
	- something like this?

So happy, see you tomorrow!

## Jesse 2025-05-02

Hello again.  
Ignore the previous attachments. Attached below is a more-or-less complete set of booklets (minus Growing and Designing). I say more-or-less because Love is still not in a pre-Final state (see below). Everything else, I believe, is looking good.
 
Some things I have done:

— Since the last versions I added the Devolution bio to the last page of each booklet. I have also edited it a bit, for which I hope you will forgive me; not only was it a bit too long, but there were also a few sentences that needed reworking.
— For the shorter booklets, I have added "content" from the web-page of the game itself. I also added a full sheet of paperwork to the that booklet. I think everything is looking good now.
— I added small versions of the main icons to the File Structure section (in addition to the files).
 
Some things I have not done:

— I realise I still haven't added the most current Pippin bio to the later booklets. We will need to go through and make sure that the correct bio appears in the correct booklet.
— I also haven't gone back and double checked the Notes on the Text. However I think everything is correct except for Phone and Love.
 
Why is Love not pre-Final?

— I need to re-import the file structure.
— I think the current booklet is not based on the most recent version of the word file … if I recall correctly, however, the changes were limited to very specific parts of the text (they did not, for example concern the journal, which is the main part of the text). Csongor: do you remember which parts of the the Love text you changed after my initial draft?
 
If you could have a look through the booklets over the weekend that would be amazing. A few things to look for specifically:

— Do the chapters correspond to the page numbers provided in the ToC?
— Are the running headers consistent? (They should not appear on any of the first six pages or the last page, nor should they appear on any page with a chapter header)
— Are there any widows and orphans?
— Is there anything that looks odd, design-wise (text in the wrong size, wrong font, etc.) There shouldn't be, but one never knows.
— Are there typos? Yes, there are … so if you spot any, do please mark them down.
 
I think that's it for now. I'll get the materials for the exhibition over to you as soon as possible, then I'll concentrate on finishing the last two booklets.
 
At the moment, however, I believe it is martini o'clock.
 
See you soon,  
J