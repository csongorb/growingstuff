# Booklets

## Overview

Direct links to the folders containing the PDFs & DOCXs to make life easier for everyone:

- [It is as if you were growing a game](00_growingstuff/_book/)
- [It is as if you were playing chess (2016)](2016_chess/_book/)
- [It is as if you were doing work (2017)](2017_work/_book/)
- [It is as if you were making love (2018)](2018_love/_book/)
- [It is as if you were doing paperwork (2022)](2022_paperwork/_book/)
- [It is as if you were playing a text adventure (2024)](2024_textadventure/_book/)
- [It is as if you were on your phone (2025)](2025_phone/_book/)
- [It is as if you were designing a game](00_blank/readme.md)

## Shared Content

### Commit Export

#### Booklet

`git log --reverse --no-merges --format="**%cd**  %n%s%n%n%b%n" --date=format:'%a, %d %b %Y %H:%M:%S' > commit_log.qmd`

Example of Commit message extracted with this line:  
**Tue, 7 Jan 2025 15:04:13**  
Journal: Starting point 

`git log --reverse --no-merges --format="**%cd - %an**  %n%s%n%n%b%n" --date=format:'%a, %d %b %Y %H:%M:%S' > commit_log.qmd`

Example of Commit message extracted with this line:  
**Fri, 04 Apr 2025 16:45:27 - csongorb**  
Some notes on Designer's Notebook.

#### Gource

`git log --pretty=format:user:%aN%n%ct --reverse --raw --encoding=UTF-8 --no-renames --no-show-signature > gitgource.log`

## Questions / Todos

See [here](todo.md).

## Quarto - Tutorial

### General Setup

[Get Started](https://quarto.org/docs/get-started/hello/vscode.html) on the Quarto website is a really good place to start. VS Code seems to work really well.

### Writing / Editing

For writing / editing:  
Work with *Preview* to show the results as an HTML page.

But we can also use it to easily generate any format we might need for layout / printing.

## Design / Layout / Editing

See [booklets_process.md](./booklets_process.md).