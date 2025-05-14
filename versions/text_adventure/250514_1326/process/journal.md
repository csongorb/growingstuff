# Journal

## The Basics -- Sunday 8 September 2024

I've made a genuine start at this point, two sessions to try to get a basic skeleton of how the basic input-output flow would be able to work.

I've also had a brief conversation with Michael B about kind of piggy-backing on/reacting to a short story of his that I really loved, so that's still in my mind as something to do.

Having made it this far though the next step is really to understand how I should be generating/choosing the sequence of commands for the user to input. In an earlier version of this I'd imagined something more or less like *It is as if you were playing chess* where I'd just have a fixed sequence the user would type it.

And that still makes sense - a lot of sense in some ways because it mirrors the essentially linear nature of stories. That is, there would be a fixed, implicit story being told that the user is perceiving only through the commands they type in as well as any suggested reactions they should have to it.

But I also feel a weird kind of pressure in that scenario where I actually need to understand what is happening moment to moment - there's a need for a real story to exist in that scenario I think. And... well, I suppose that's what I wanted, a chance to secretly write a story that nobody would actually read?

As I approach it, though, I've also found my brain going the more generative track. What would it take to perhaps generate commands instead, so that different people would have different experiences and we'd be talking more about how you build up an understanding of a world by probing it with commands? Which is *also* interesting.

In that case I've started thinking in terms of a data structure that would represent the *world* in much the same way an Inform story does (rooms, objects, special/relevant commands). And then having a system that would track: where the user is, what they're holding, maybe other status effects if I want to go nutso?

And that is appealing... I gotta say, because there could be some pretty fun serendipty around it? And it's this weird idea of designing some of a game but not all of it? (It would frankly even leave room for freakier stuff like actually letting story bleed in some places, though that sounds a bit much.)

Anyway, that's where we are with this right now. I think I will at least try out the weird structural idea if only because it just seems technically challenging and funny as an idea. A secret structure of a game that only exists to generate relevant commands is pretty great.

Oh also, I suppose some kind of statistical likelihood thing may make sense? Because you obviously do "look" a lot more than other things and so on?

And some way of creating some more specific "reaction" suggestions for the user? So that they seem a bit more relevant? Shocks versus boredom etc.? Annoyance?

And can you win? It would be really funny if you could technically win?

## Further thoughts -- Sunday 8 September 2024

I spent some more time with this this evening and it's now crossed some kind of threshold where it both seems real (I have two locations, a few commands available) but where it also starts to seem like the contortions involved in a more "simulation" approach may not be all that fun and nor all that important?

There is tension - probably interesting, probably worth reflecting on - between creating something more procedural (leaning more into the "truth" of parser-based IF I guess?) and something more (or totally) linear (leaning more into the nature of story telling).

When I actually "play" what I have so far I think the thing that gives me the best little thrill is, well, just any command input, but especially changing locations (and seeing the location acknowledged in the menu bar) and picking something up... because those are moments where you really feel like you act on the world (unlike looking etc.).

I feel like getting a "realistic" representation of the command sequence in the simulation version might just be too hard and it might seem too weird without it? Like how do you reproduce the idea that if you enter a room you almost always "look", but not all the time. Or how when you pick something up you might look at it. Or how you often try using all your items on a specific situation.

And it's not even totally about realism there, but also about the narrative potential of those things too? Or of just being able to communicate a state of play... the story of playing sitting on top of the story itself...

So I'm perhaps just talking myself into a version where:

- It's linear... you will just be typing in a set of instructions (which, I mean, who is ever going to replay this!)
- But it includes triggers around location, points, and anything else that could make sense to sort of reflect action through the UI

I briefly thought I'd need an inventory, but I suppose not actually. I'd need to keep track of it personally though.

Hmmm. Yeah well I think I just plow on with the linear version as my next thing, maybe just string together 10-20 commands including a location change to get a sense of what that would feel like? Maybe look at some walkthroughs of *good* IF to see how many commands etc. it might make sense to have? Start stockpiling forms that might be in there ("ask X about Y" for example).

## Reminding myself of where I am -- Monday 16 September 2024

Yes, it has been eight days. Sosumi. It would be nice to round the corner into an understanding of what the screen itself needs so that I can "just" write the thing. If it's linear is the point to also pre-write all the "reaction" stuff, or should that be drawn from a pool? Or... really, why do that? Might as well use the reactions as a way to further communicate about what might be happening.

The biggest question to me ultimately become: how much do *I* need to know about what is "really happening" both in the sense of the overarching story being told and the structuring of the parser-based IF that's telling it?

I do like that this is yet another different take on the use of "It is as if" though. Speculative fiction, looking smart on the metro, ... narrative vehicle...

Well but how do I write this then? I suppose first approximation is that each beat needs data, the same data... which would amount to what?

- Input (what they should type)
- Reaction (how they should "act", including instructions on how much to read? Or text padding that lets them read "the right amount"? A shape...)
- Location (to display)
- Points (to add)

Plausibly something else? But also I suppose I should take a look at some walk throughs and some actual IF as some point soon. Maybe that's tonight's little job? Or is it just to put together a teeny draft of the above so I can see what that looks like? Or both, let's see.

## Time passes -- Monday 14 April 2025

Yes it does yes it does. This project was reactivated in my mind because:

- I'm doing this *The Designer Is Present* thing with AMAZE this year and I "need" an *It is as if* game to be working on while I'm there
- Csonger specifically inquired about this project because it's kind of a rare "abandoned" one? But it was only sleeping...
- I'm also (pleasantly) "on the hook" to make a "game poem" for a publication thing that Jordan Magnuson is doing and it occurred to me that Text Adventure is a good option for that, especially in combination with Michael B's *Cornerstone*

All this came together when I was sitting down thinking about the "what next". So in Things I wrote:

```
It is as if you were playing a text adventure
As poetry 
Read Michael B
Write a lot of poems
Maybe in that world (or jumping from there)
Arrange them to imply a trajectory through a game
The idea of could have been otherwise
Talismanic objects
Obtuse npcs
Implied puzzles
Repetitions, typos, human elements
Can the act of playing and typing also fit into the frame?
Don’t forget to put this in the docs 
```

So there are some design leads there too as I try to spin up.

Not on this list but underway is a conversation with Michael B about his feelings about me doing this and especially about me doing this publically. Right now he's just "Michael B"ing his way around in this docs, but if I got serious I'd want to include the notes I'm taking on *Cornerstone* etc.

## Guides for these territories -- Tuesday, 22 April 2025

### Michael B

Spent some time just now finishing up the notes I've been taking on ▒▒▒▒▒▒▒▒▒▒▒, Michael B's novella. Importantly I've also been going back and forth with Michael about how and whether to work with the world of his story in this game. We're both keen on it, I think, but also both a bit trepidatious about the implications - for him whether I'll break or otherwise embarrass the loveliness of what he has; for me... well the same thing, but also the concern of having my hands tied in ways that might make it really hard to progress. It remains a good challenge though.

One thing we kind of both agreed might help was to have as my protagonist someone peripheral who is not in the novella.

I'm thinking about a Janitor. I've been writing poems about janitors for the last few days.

### Samuel A

I had a great coffee meeting with Samuel A last week (I think?) where I was trying to get his perspective on the challenge of adapting a novella/world to a text adventure that is actions-only. A strange situation. It was helpful. We settled on a couple of thing I think are good (I have an index card somewhere, I should pop it in here):

- The idea of this game as a kind of *mime* act. Specifically relative to the idea that you *can* tell a story through actions and not through the visibility/legibility of results (except through further actions - well I suppose *reactions* too, but those are somewhat a luxury we don't have in a text adventure? Or do we?)
- The idea of *playing the story to write it* as a way to approach the intimidating writing challenge. That is, to sit down and type a first command and then reflect on what the game would respond, what would happen, what is the result. And writing notes about all this. But at the end only the commands would remain. Because you do, fundamentally, need to *know the story* to tell it; there needs to be a story under there. The mime needs to know how high the invisible wall is to climb it.

So those are two quite practical elements. So practical that one could imagine just beginning. On the other hand it's tough because until Michael puts out his story it's not clear that I can do any of this stuff "in repo" because it would necessarily involve writing out my thoughts about what I'm doing relative to the story. 

### Now what?

Well the obvious thing is to start trying to play myself in. I have a bunch of notes about the novella from a new reading. I have a glimpse of a setting and even of a key dramatic moment in the story (an evacuation), but not much more. I could try to imagine some fundamental beats and how they'd fit into a text adventure, maybe I need at least the three "acts" in order to comprehend things a little better?

Yeah. And I guess... I just do that "secretly" with a folder in the .gitignore for now.

(With the release of Cornerstone I've moved the "secret" journal back to public.)

## 2025-04-22

Alright. Well, let's journal where we can actually talk about what we really want to do, think about plots think about beats think about writing my way into a paper bag

### Janitor

I'm halfway serious about a Janitor character. It's maybe a bit too close to Control? But someone who works at the House of Peacocks and who isn't mentioned. A staffmember in essence.

I've written a number of poems about the Janitor over the last while, e.g.

```
We’ve got

More time

To fall in love

Before the janitor

Comes by

And rushes us down the hall

On the top of his mop
```

Which is not to say they're directly helpful but I'm just trying to conjure up some ideas about janitors for now.

### House of Peacocks

Feels like a useful setting for me. It's where the Warehouse *is* (in the basement). But it's not inside the warehouse (I don't think???). It's not overly described in the book so I'd think there's more leeway to move around in and outside the manor doing text adventure stuff.

### Text adventure stuff

What do you actually do in a text adventure? Largely you solve puzzles in order to progress through space (and time?). Not much more than that. Largely you solve the puzzles by moving between spaces, finding and using items. Sometimes in specific sequences. At it's most basic you find a key in room C than unlocks a door in room B and gets you to room A or whatever.

And as well as that there's a world and maybe a "story" involved.

### Peacock

There's a white peacock that's important. The janitor could look for it or help it out. There's a weird vague sense I had on the last reading (from the chapter title) that somehow the peacock contained the warehouse. But surely not. But. Anyway it's a nicely iconic and striking element that isn't developed and yet is central.

### Overdoing it

How deep down this hole of a thing do I want to really really go? It's pointless to imagine making something Great or even Good, but how much effort do I want to put into it? Enough to at least have a sense of how practical/real it is to tell a story through actions and items right? And not more. It could fail miserably but if there's the ghost of an image of this being a plausible storytelling technique then I'd say job well done?

### The port

There's a port. Another potential location.

### The basement

There's a basement with The Warehouse inside it. I can't imagine my janitor/person getting access to it. Feels like it would be very controlled. In the novella someone lays their hands on the wall and it opens. The janitor *could* be intrigued and go and look at the wall. The wall could be accessible, but not openable. 

### Rooms in a house

A manor has many rooms. Many places for something to happen.

### Driving the actions

Well so what is the janitor/J trying to do? A story has motivations and so on doesn't it? How do stories work again? Does that really matter, old school film school driving action? Or can-should it be a more experimental story in the first place, less clearly driven, more exploratory? That would be fine.

Blue Prince kind of provides some potentially interesting glimpses of ideas. As does Gormenghast. As do other references.

### Out of Control?

In keeping with the book's approach should a Janitor in the game be more of a symbollic character, less of a real person? As in, a Janitor is somebody who cleans up, behind the scenes, patient. Potentially very powerful if we think of these things cosmically (as in Control).

It does not have to be a janitor. But it could be. But maybe the Control thing gives me some pause. Too close? Just close enough?

### Text adventure stuff 2

Thinking about text adventure affordances by taking the basic categories from the Inform 7 manual.

#### Rooms

I should draw a map of interconnected spaces - maybe set that early and not worry about it further

#### Items/things

I should make a list of relevant objects or kinds of objects, position them in the rooms? Or not really, but there'...

Well maybe I should really have a set of prompts as I "play into" the game. Where, what(items), who, how, etc... and use that to get specific (in the right way) about what's going on.

#### Actions

> With no extra effort on your part, the player will be able to move from place to place, examine objects, pick them up, take inventory, drop objects that are being carried, put objects on top of supporters or in containers, open and close doors, wear and remove clothing, unlock or lock things that are locked, and so on.
[Inform 7 Manual](https://inform-7-handbook.readthedocs.io/en/latest/chapter_4_actions/built-in_actions/#:~:text=With%20no%20extra%20effort%20on,are%20locked%2C%20and%20so%20on.)

So there are all the defaults, and maybe even keeping within them is not the world's worth idea. Or maybe a few very specialized ones.

#### Characters

Could our person meet or at least see people from the novella? Maybe just in passing and they disappear (such as down the stairs to the basement). The peacocks. The white peacock.

#### Puzzles

Inform manual literally has a list of [possible puzzle scenarios](https://inform-7-handbook.readthedocs.io/en/latest/chapter_6_puzzles/puzzles/). 

#### Time

#### Hint system

#### Dying

#### Saving, loading, restarting

#### Mistakes

That you reload from. Typoes that go unrecognized.

#### 🤔

You know, writing "from" the Inform 7 manual isn't the worstest idea. Or using it to create a weird ontology of the world and then going from there.

Reading a simple guide on how to create a text adventure would not be dumb.

### Arc

Come on, come up with a silly arc right now. Just to try it. Doesn't need to be dramatically interesting.

1. Basic job requirements; the project

We carry out standard janitorial (or other services). We learn about the house and its maintenance, but also about the potential strangeness in the basement. 

Puzzles around getting your job done, but perhaps also noticing things for later (when you want to learn more about the house and the basement and the project)

2. The basement / the peacocks / the white peacock.

Rising action begins when people go down to the basement and we witness that somehow. A feeling. We are curious but cannot find out what was in there, the wall is close. Driving a desire to know what's happening, searching the house for clues and scraps (using janitorial status to access places)

Puzzles around trying (and failing) to get into the basement? Revisiting locations and puzzles to get at more detailed stuff (a kind of spy game)

3. Evacuation.

Climax being the need to evacuate, time limited tasks?, things to get done for safety.

Puzzles around gathering the peacocks together (there are 8) and not finding the white peacock.

4. Port Sunday.

A kind of post-script element in Port Sunday with a specific cast of characters around that you perhaps talk to "ask X about Y"; with an eye to understanding what's going on at the manor. A boat, some remnant of people from the book.

Puzzles around knowing what to ask of who, the boat?

5. Death.

Maybe a final act return to the manor and some kind of very ambiguous death/dissolution?

--

This is actually something. Beginning by understanding our character through a series/list of tasks they're carrying out. With some indication in overhearing, reading, stuff that suggests tension and strangeness in the House.

## 2025-04-28

### Housekeeping

I'm back. God I'm moving slowly on this, but that's fine. I sent the above stuff to Michael and he was generally interested in some of the ideas being put into place there, though pointed out the Janitor is not the world's most "manor-y" idea. He suggested Custodian as an alternative which is quite good.

On the [Great House](https://en.wikipedia.org/wiki/Great_house) wikipedia page there's a good list of occupations. I was initially drawn to the "[Useful Man](https://en.wikipedia.org/wiki/Useful_man)", but he's kind of nondescript in a bad way. I like the utilitarian nature of such a person, but I found myself thinking about what kind of access he'd have to the manor and grounds and being concerned it might not be extensive. Though even that's potentially interesting in the context of puzzles around getting access to areas you shouldn't be in etc.? (And of course so weird and absurd to be diving this deeply into a story that won't really be there in the final thing? Or will be there in such an odd way.)

The role that's been catching my imagination for real is the [Housekeeper](https://en.wikipedia.org/wiki/Housekeeper_(domestic_worker)). A much more powerful figure, so able to get around and do stuff, but still very much a behind the scenes person which I like. I'll need to read more about the role to understand how this person would interface with a manor, and then especially with a weird contemporary manor with a science experiment running in the basement. I like the symbolism of the name too the *house* *keeper*, one who keeps the house... it has a protective vibe, a power vibe, all kinds of vibes. So without being totally sure I'm for now pretty wedded to this role and my poetry and adjusted accordingly, e.g.:

```
It was a gift
Shared in the garden
With the housekeeper’s silhouette
Frowning from the six windows
Across the face of the manor
```

Again, these poems aren't me trying to write my way into this story, just making friends with the word "housekeeper" and seeing what's in there for me.

### Structures and Acts

Writing those acts in the previous entry was surprisingly (but shouldn't have been surprisingly) powerful in terms of making a story start to groggily rise to its feet? Who knew that the established narrative practices of hundreds of years would be relevant. Also don't *need* that level of structure, but I think it maybe helps make decisions as I go, knowing where I'm at in the story etc.

I need to demark a moment where I don't just keep prepping and never write. At some point the core activity of "writing into the game" has to happen and be fun to do. How much do I need to know? I need to know the basic structure of the story, key beats, the basic stuff about how a manor and its grounds work and look, a map, and then I'm mostly good to go.

Some kind of sense of how the experiment in the basement actually relates to this story, if at all? It doesn't *have* to even be relevant -- in a way I like the idea it wouldn't, this story would then be helpfully about the ways in which life happens around core "dramatic" narratives? Or that you can have more than one story happening co-located that aren't even related? It feels like there's something nice about it.

What about a watchword. What about Shklovsky and making the stone stony? How would my story make the stone stony? Which stone? I mean there's a meta-stone I'm making stony around language and text adventure mechanics and story. But what about the stone inside the meta-stone?

### Housekeeper

Here are some notes and quotes from my deep research on the [Wikipedia page for Housekeeper](https://en.wikipedia.org/wiki/Housekeeper_(domestic_worker)).

> A housekeeper (also called necessary woman)

A necessary woman. Come *on* that's great. I mean in my context.

> responsible for the supervision of a house's cleaning staff

So clearing is a focus here. Coordination mostly for this role but potentially also (fancy?) cleaning roles as well. Cleaning can take you places and cleaning can get you noticing things. Coordinating cleaning can also have you talking to NPCs if that's useful. But I can also imagine in a lower-staffed house (such as this one might be) the Housekeeper takes on more of the actual cleaning stuff.

> The housekeeper is generally hired by and reports to the lady of the house

So a special relationship there, which is to a key character in the book. A chance to at least mention her.

> ... a list of notable housekeepers on tv

Well that's random and not all that helpful. So there's not a *ton* here but there's enough to build up a slightly less non-sense of what the Housekeeper would be doing at the house on your average day, what kinds of problems they might have (going they here mostly as a kind of Entity/Role thing, though obviously a Housekeeper has historically almost always been a woman).

> Responsible for the house and its appearance; in charge of all female servants, but can sometimes be the lead servant in a household. The housekeeper is always addressed as "Mrs", regardless of her marital status

That's the basic capsule of it from the Manor page.

### Manor/Great House

Here are some notes from the [Wikipedia page for Great House](https://en.wikipedia.org/wiki/Great_house).

> There is no precise definition of "great house"

It's another pretty useful power phrase/term? "Great House". It's still making me think about Control in a certain way? Asserting the idea of a powerful entity in/behind/of the architecture; the idea of roles and manifestations of power within those institutions.

I dunno, I think it holds together. It's totally related to how Michael has set things up as well (and I guess he's doing that precisely because it has all these sorts of effects from metaphor and yakka yakka).

> sometimes referred to as "the big house"

I mean. Pretty sweet connections to the Warehouse n'est-ce pas?

> In Jamaica, "great house" is the standard term for the house at the centre of plantation life

> ["manor"] from Latin manere ‘remain’.

Remain is a powerful word.

### Staff

This is from the Manor page as well. These are all people the Housekeeper could potentially interact with. Maybe best if they never interact with anyone else in the house... like just the staff?

> Butler
> Cook
> Housekeeper

> Valet

> Companion
> Lady's maid

> Governess
> Nanny
> Tutor

> Chauffeur

> Footman
> Hall boy
> Useful man (also called houseman)
> Boot boy
> Maid (see Types of maid)
> Between staff or Between maids (also called Hall girl, particularly in the US)
> Chambermaid
> Housemaid
> Kitchen maid
> Laundress
> Nursemaid
> Scullery maid
> Still room maid
> Page
> Seamstress

> Head gardener
> Stable master
> Gamekeeper

> Gardeners
> Groundskeepers
> Stablehands
> Handyman

### Devices

Just thinking in no orderly way now about what kinds of things could motivate action for the Housekeeper - in both the narrative and the actual text adventure senses.

> A to-do list

That's the kind of thing you could have at the beginning that would motivate things you need to do right from the get-go and that would lead you to appropriate places, events, items, puzzles.

But even in saying the word "appropriate" I'm thinking... well what is the *overall* point here. In my five act structure above I'm not clear that I know what the arc relates to or tells? What's the underlying thought of all of this within the game itself? It's not just solve some puzzles and get somewhere.

Could I turn to fairytale level motivates. Agential stuff? Greimas? Propp?

What is that stony stone?

### The acts again

At what point to I break this out into a new document?

Now.

### Things I really need:

- A map
- Relevant items
- Who might be in the game
- Classic housekeeper tasks

## 2025-05-14

Why did I decide to have `kick dog` be the sole instruction in the game? It has already come up since being at AMAZE and I just end up feeling pretty awkward about it. Why did I choose that? I think it's because it seemed dramatic and... well I might be post hoc justifying here, maybe it's that it's a bit like that thing of compelling bad behaviour in... no this is all post hoc. Why did I do it, WHY?

Hey, actually though there are more options than `kick dog` in the JSON so why aren't they showing up? Not that it matters, but it's annoying. Let me just delete it. You should not kick dogs. Even in text adventures that are retellings of novellas without any descriptive text.

Looks like it only displays the first command, and then won't interpret the input as being correct. Let me fix that separately rather than include it with this journal commit?

--

Anyway, my main thought this morning, just before AMAZE kicks off in earnest, is how *boring* it may look to see me working on this game? This game in particular but maybe any game? Because it's so sloooooow?

On the other hand I think this game is going to require a *ton* of thinking and writing, so maybe that's not so bad. But of course the thought of typing in public and writing my journal in public is weird... no so much that people would read it, but that it might become (even more?) performative than usual. Or self-conscious, etc.

But that's alright.

--

And the other thing is just... well what do I want to kind of get *done* while I'm here? Can I use it as an impetus to really make some stuff happen? The most obvious thing would be to play around with writing the actual script (after fixing it) so that the playable build does something more than be a placeholder. And I think that exploration, even if I ended up deleting the whole thing, would be worth it.

So I suppose that's my target. I have the Housekeeper role in my mind. I have my five act structure. I have a map of a manor. Let's explore and see what happens???

(Weirdly I could even *include* descriptive... no, that's me pandering. No pandering.)