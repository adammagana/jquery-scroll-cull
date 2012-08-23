#Scroll Culling
*A jQuery Plugin*

##Description
**Author**: Adam Magaña &lt;holla@adammagana.com&gt;  
**Last Edit**: August 23, 2012  
**Version**: 0.0.1

Based on the concept of [back-face culling](http://en.wikipedia.org/wiki/Back-face_culling). Provides the ability to monitor a content area's `scrollTop` property and invoke a callback function for rendering new content when the scroll position is at or near the fold. This prevents content from being rendered that is not in the viewable scroll area.

##Usage

```html
<div id="scrolling_div">
  <!-- Visible content is rendered here by the reveal callback method -->
</div>

<script>
  $(document).ready(function () {
    $('#scrolling_div').cull({
      buffer: 0,
      chunks: 10,
      reveal: function (index) {
        return '<p>' + index + ': Rendered by the reveal callback method!';
      }
    });
  });
</script>
```

This usage is very simple and doesn't get much more complicated. Culling is instantiated on the `#scrolling_div` element which means a few things automatically happen: the height of `#scrolling_div` is calculated, the reveal function is called until the total content height of the inner HTML meets or exceeds the height of the div itself, and a scroll event listener is bound to determine when more content should be rendered for viewing. That's quite a mouthful but it's actually pretty simple.

Still confused? Check out the [live demo here](http://jsfiddle.net/adammagana/MKUDG/1/).

##Options

Not sure what the settings and options are? Not sure what they mean? This should clear things up:

<table>
  <tr>
    <td><strong>Name</strong></td>
    <td><strong>Type</strong></td>
    <td><strong>Parameters</strong></td>
    <td><strong>Default Value</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>buffer</td>
    <td>integer</td>
    <td>None</td>
    <td>0</td>
    <td>Number of pixels above the bottom of the scroll area to invoke the reveal callback method.</td>
  </tr>
  <tr>
    <td>chunks</td>
    <td>integer</td>
    <td>None</td>
    <td>5</td>
    <td>Number of times to invoke the reveal callback method when the scroll postion reaches the buffer.</td>
  </tr>
  <tr>
    <td>reveal</td>
    <td>function (returns a string)</td>
    <td>index</td>
    <td>$.noop</td>
    <td>Callback function that is invoked to render new content.</td>
  </tr>
</table>

##License

(The MIT License)

Copyright (c) 2012 Adam Magaña &lt;holla@adammagana.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.