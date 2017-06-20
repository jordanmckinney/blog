# Vim, Zsh, Tmux

I used Sublime Text exclusively for quite a while and was pretty happy with it... That is, until I saw a truly skilled Vim user in action. I've been using Vim and Tmux for a few weeks now and have been gradually learning shortcuts and adding new customizations.

Zsh, Vim and Tmux each have a 'dotfile' where various settings can be changed/added: `.zshrc`, `.vimrc`, and `.tmux.conf` respectively. To implement any of the features below, add the specified command to the programs dotfile. Note: These files should be in your home directory. The dot at the start of the filename indicates that the file is hidden (in Ubuntu `Ctrl+h` will show hidden files). My dotfiles can be found [here](www.github.com/jordanmckinney/DotFiles).

General look of my current setup:

<img src="/src/images/vimtmux.png" alt="Drawing" style="max-width: 100%;"/>

------------------------------

## Zsh

Zsh is a shell very similar to bash, but with a ton of customization options and some really cool extra features. My Zsh settings are still stock, but below are some nice standard features.

Notice below how only the current directory name is shown on the prompt, rather than the whole path. So much more space! Also the colors and font are much nicer in my opinion over stock bash. 

<img src="/src/images/zsh1.png" alt="Drawing" style="max-width: 100%;"/>


The feature below alone has made the switch worth it for me. After typing `cd` you can just hit `TAB` and Zsh will list out the subdirectories. You can then `TAB` through the options and hit `ENTER` to select one. Amazing!

Another handy thing, if I want to `cd` into `Dropbox` I can type `cd dropbox`, hit `TAB` and Zsh will fix my lower case spelling to the proper upper case `cd Dropbox`.

<img src="/src/images/zsh2.png" alt="Drawing" style="max-width: 100%;"/>

------------------------------

## Vim

Vim is a command-line based text editor that comes pre-installed with many \*nix systems. The learning curve is fairly steep, but after a while you can be much faster and more efficient with Vim than with a 'regular' text editor like Sublime.  

There are plenty of detailed guides for getting started with Vim. Here I'll just mention a couple things I've done (most ideas were taken from [this post](https://dougblack.io/words/a-good-vimrc.html)). 

display the line numbers of the file.

```
set number 
```

highlight the line number that the cursor is currently on.

```
set cursorline
```

The two changes listed above can be seen in the image below. The colour scheme is [VICE](https://github.com/bcicen/vim-vice).

<img src="/src/images/vim1.png" alt="Drawing" style="max-width: 100%;"/>

Map `jk` to `ESC` so you can leave `insert` mode without moving your hands from the home row!

```
inoremap jk <esc> 
```

The following two commands set `B` to move the cursor to the start of the line, and `E` to move the cursor to the end of the line respectively. Note: these overwrite existing commands! `B` and `E` are typically used to move backward and forward by words, but I find `w`, `e` and  `b` to be sufficient.

```
nnoremap B ^
nnoremap E $
```

Normally `j` and `k` will move the cursor up/down line by line, which means any wrapped lines will be jumped over. This change prevents the cursor from jumping over wrapped lines, which is much more convenient in my opinion. 

```
nnoremap j gj
nnoremap k gk
```
UPDATE: The following additions were taken from [this](https://youtu.be/aHm36-na4-4) great video.

When you're in normal mode, you use `:` all the time, but doing so requires `shift+;`. Not anymore!

```
nnoremap ; :
nnoremap : ;
```

Apparently it is good practice to keep your code to 80 columns in width. This addition will highlight the character in the 81st row, if you happen to have a line run long.

<img src="/src/images/vim2.png" alt="Drawing" style="max-width: 100%;"/>

```
highlight ColorColumn ctermbg=magenta
call matchadd('ColorColumn', '\%81v', 100)
```

------------------------------

## Tmux

Tmux is a 'terminal-multiplexer'. Basically it allows for multiple tabs inside the terminal (like tabs in a browser) and for each tab to be split into multiple 'panes'. Most changes were taken from [here](http://www.hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/).

The image below shows 3 tabs labelled `1 zsh` `2 zsh` and `3 zsh` where the current tab is highlighted. The current tab is split into 4 panes.

<img src="/src/images/tmux1.png" alt="Drawing" style="max-width: 100%;"/>

Enable mouse mode (tmux 2.1 and above). This allows you to switch to a different pane or tab by clicking on it. It's probably better to use the keyboard shortcuts, but it's nice to have. 

```
set -g mouse on
```

Change the Tmux prefix key from Ctrl+b to Ctrl-a. Much easier to reach. 

```
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix
```

Reassign the keys used to split a window vertically and horizontally. I find `\` to be a pretty natural symbol for splitting with a vertical line, while `-` makes sense for a horizontal split. 

```
bind \ split-window -h
unbind '"'
bind - split-window -v
unbind %
```
