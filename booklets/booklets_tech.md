# Booklet Tech

## Commit Export

`git log --reverse --no-merges --format="**%cd**  %n%s%n%n%b%n" --date=format:'%a, %d %b %Y %H:%M:%S' > commit_log.qmd`

Example of Commit message extracted with this line:  
**Tue, 7 Jan 2025 15:04:13**  
Journal: Starting point 

`git log --reverse --no-merges --format="**%cd - %an**  %n%s%n%n%b%n" --date=format:'%a, %d %b %Y %H:%M:%S' > commit_log.qmd`

Example of Commit message extracted with this line:  
**Fri, 04 Apr 2025 16:45:27 - csongorb**  
Some notes on Designer's Notebook.

### For Gource

`git log --pretty=format:user:%aN%n%ct --reverse --raw --encoding=UTF-8 --no-renames --no-show-signature > gitgource.log`

## Quarto - Tutorial

### General Setup

[Get Started](https://quarto.org/docs/get-started/hello/vscode.html) on the Quarto website is a really good place to start. VS Code seems to work really well.

### Writing / Editing

For writing / editing:  
Work with *Preview* to show the results as an HTML page.

But we can also use it to easily generate any format we might need for layout / printing.
