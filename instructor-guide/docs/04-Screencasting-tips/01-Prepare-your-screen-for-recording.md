## Prepare your screen for recording

**Success on egghead comes down to mechanics**. This guide will help you nail the technical aspects of presentation and accessibility, so you can present lessons that are visually clear and accessible for all learners and devices.

Screencasting isn’t easy. It’s a difficult skill to nail—and on top of that, we’re very picky about the screencasts we publish on egghead.io. We can’t publish screencasts with small fonts, blurry text, and low-contrast color schemes that distract from learning. While egghead screencasts are diverse, they must also share a sameness of quality and presentation.

[Video: Remove distractions](https://egghead.io/lessons/tools-remove-distractions?play=true)

**Always remember accessibility.** A wide range of people will access your lessons on a variety of devices of varying quality. Maximizing the legibility of the code you present helps all learners absorb the information to the best of their abilities.

### Set your settings

Before you do anything else, adopt these settings:

- 1280x720 (720p)
- 16:9 aspect ratio
- Stereo audio ([you’ll set up your audio next](#set-up-your-audio))
- For best results, use HiDPI mode on your monitor

We deliver content at 720p (1280x720 in pixels). We want this to be a crisp and legible output for the viewer, whether they’re expanding lessons fullscreen on a 65" TV screen or watching them on the bus.

[This video](https://egghead.io/lessons/tools-prepare-to-record-screen-resolution-and-mic-check?play=true) shows you how to prepare the screen and mic to do just that

HiDPI mode—also known broadly as DPI scaling, or Retina display on Macs—doubles each pixel, allowing for highly readable text on very high-resolution screens. Use it if possible!

![Image courtesy of designmodo.com](https://lh3.googleusercontent.com/rMZ4R1qkndexRllRnPZxX1LwwlXyQ-pEd9FzJFqOLuyg-ly7ciad5X57pRjji2GhYL9CBaEpfocx3u0OQoC_2-tj1HqixMVmu3SGk0hKtp7ZCwn351_c9M4UXLXs7ECdzfLSb-K4)

### DPI scaling on Windows

On Windows, we've had success boosting the code fonts to max out the screen. Aspect ratio is key here, so set your screen to the highest 16x9 resolution and kick the fonts up.

Using DPI scaling features is helpful—you can scale the OS chrome and make UI more legible.

[This article](http://www.eizoglobal.com/support/compatibility/dpi_scaling_settings_windows/) can tell you more about pixel scaling on Windows.

### Access HiDPI mode on macOS

On Mac, you’ll get the best results if you record at **1280x720(HiDPI) mode**. This resolution is achievable on 27" monitors and Retina MBPs. It effectively gives you a visible resolution of 1280x720, but it’s extremely crisp and readable on phones and tablets.

This mode is "hidden" by default. You can achieve it on a Mac with a software tool that exposes the option, like the **RDM tool**. On Retina MacBooks, the option works automatically. For external monitors, or non-Retina Macs, follow these instructions to enable HiDPI mode:

![](https://lh5.googleusercontent.com/IzTyjUaF9aGg3L1yGjJQ_qMtL7SzlX-r_zJaF4A6iFMipGXhtFt_jJlpn16oDEj3QdTiOIOnmW6h2WIv1jO3PQrzfIxxYbloXcnncNjTFGpCre1ieaTTgMYKiRxAGFHJRH3Lst0r)

Another application that works well is [**SwitchRezX**](http://www.madrau.com/). It's shareware and requires a fee. If you can't use this mode, recording at normal **1280x720** or **2560x1440** are workable substitutes.

By constraining to this small window, you can fill the screen effectively for coding screencasts. The most import thing to get correct is the aspect ratio. We don't want to present with any black bars around the screen. We want to give the user maximum code visibility at all times.

### Screen and code layout

The code is the champion of an egghead.io screencast, so it must be comfortably readable for all learners.

- **Maximum space:** Give your code maximum horizontal space by using an 80- or 120-character "column" for the code and bumping the font size up to fit.
- **Padding:** Allow some padding for the top and bottom of the recording window, which could get cut off by Player Chrome. For instance, if you're recording the terminal, commands toward the bottom might not be visible. You don’t want to frustrate or distract your viewers.
- **3-column layout:** We will typically work in a 3-column layout, with the editor taking up 2/3s and a browser on the right side in the remaining 1/3 of the screen. You might prefer to flip back and forth between the browser and the editor—up to you!

![](https://lh5.googleusercontent.com/yFu1UkYEzFM_zbwuf6kxZU5WuUwc_zhkaJY6uDSwk32Tega5Mj6rNukMByPiNZseZVyQgxPcRVsB07yh5R6IkiBUHnkm4mtAB9XOGJ4wt3qX0ZYcKw1kTVp0VJ-qNb9wJyctddH4)

We prefer this 2:1 ratio of code:example. It will look something like:

![](https://lh5.googleusercontent.com/uKXJLKCjIN0VsNGGKt8TmUfm_wwUrtBIJcUMYWFMWxbyN2B-zc_NvvWetSZDZ8a3oSj9fby0mwXDt26a5FNz1eC3U8ad48JaO0oiwYB8rey9DB3yJBITT0O6Y-FFSIi9cwsZk1S5)

Notice that the code's font size has been increased to **maximize the space available.**

Place your **example on the right**, occupying 1/3rd of the screen. Consider that your example will need to fit in that space when you’re creating it. Choose a simple example with a minimally responsive layout, and you’ll be just fine.

In some cases, the example is replaced by a terminal, or a terminal window shares the right column with the example. In this latter case, the terminal window would be on the bottom-right section of your screen.

Remember that your lesson viewers are here to see the code. Make it the starring feature!

#### Visual Studio Code settings
If you are using VSCode, egghead instructor [Andy Van Slaars](https://twitter.com/avanslaars) has put together a [GitHub repo with a screencasting profile](https://github.com/avanslaars/code-profiles) that loads the settings he uses when recording screencasts.

Here are some more settings that help remove some of the distractions:
```
"editor.minimap.enabled": false,
"explorer.confirmDragAndDrop": false,
"editor.fontSize": 18,
"terminal.integrated.fontSize": 18,
"workbench.activityBar.visible": false,
"editor.quickSuggestions": false,
"editor.suggestOnTriggerCharacters": false,
"editor.wordBasedSuggestions": false,
"editor.quickSuggestionsDelay": 1000000,
"editor.parameterHints.enabled": false
```

### Command line prompt

If you will be showing your command line, we suggest using a minimal prompt to reduce distractions. This example prompt works well for screencasting:

![](https://lh3.googleusercontent.com/TouVkaQl8WDHTdHxr-u8PiALhO8MVjuOm1m05dtK6k8s2BPbcNDJe6pPH7Q0YXpVBUE0gH5ykLFbYq5VXGghJ---2FrdBhnRi5iGUQSA3Cdfxa2ohb-GfOXIGrTq0S1FKOVsD1wd)

You can use this one by updating your `~/.bashrc` or `~/.zshrc` with the following:

```bash
export PS1="\n\[\e[32m\]\W\n\[\e[m\]\[\e[34m\]\\$\[\e[m\]"
```

Note: If you’re on Mac and using Bash, you also need to add a `~/.bash_profile` with this:

`source $HOME/.bashrc`

This tells Mac to load your `~/.bashrc` when loading a terminal emulator.

Now that your screen is ready to record, sound up. Time to get your audio ready.
