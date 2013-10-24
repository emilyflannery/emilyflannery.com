###.scrollScreen()

scrollScreen is a very simple plugin for scrolling the screen relative to an html element.

By default, ```$('element').scrollScreen();``` will scroll the screen so that ```element``` is centered vertically and horizontally.

####Options

```javascript
    'speed'               : integer, 'slow', or 'fast' DEFAULT = 400
    'easing'              : string, DEFAULT = 'swing'
    'horizontal_position' : center, 'left', 'right', or 'none' DEFAULT = 'center'
    'left_padding'        : integer DEFAULT = 20
    'right_padding'       : integer DEFAULT = 20
    'vertical_position'   : 'middle', 'top', 'bottom', or 'none' DEFAULT = 'middle'
    'top_padding'         : integer DEFAULT = 20
    'bottom_padding'      : integer DEFAULT = 20
    'delay'               : integer DEFAULT = 500 //The delay between scrolling between each element if mmore than one element is provided
```

For example,

```javascript
    $('#my_div').scrollScreen( 
      {
        'speed' : 1000, 
        'horizontal_position' : 'left',
        'left_padding' : 100,
        'vertical_position' : 'none',
      } 
    );
```

will cause the screen to scroll only horizontally so that #my_div is positioned 100px from the left edge of the screen.

####Important

.scrollScreen() will not work unless your document has a proper doc type declaration such as <!DOCTYPE HTML>

####License

MIT - See license.txt file
