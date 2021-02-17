## Write your first SVG

# SVG Structure

- Viewport defines by svg tag and it's width and heigh is defined in px by default but can take other common units like %, em, cm, in etc.

- SVG elements/shapes like circle, square, path etc inside the SVG viewport can have it's own width and height.

SVG viewbox takes four values. X,Y position and Width and height.

<pre>

__SVG VIEW PORT___________
|                        |
|   _______________      |
|  |              |      |
|  |__svg element_|      |
|                        |
|________________________|

</pre>

- SVG can be inline or external file.

- SVG Co-ordinates system is different from the cartesian coordinates. The only visible area is +X, +Y the rest of it stay off the viewport.

<pre>
                 |
                 |
    -X, -Y       |     -Y, +X
                 |
                 |
_________________|___________________
                 |
                 |
    +Y, -X       |     +X, +Y (Visible area)
                 |
                 |
                 |

</pre>

Inside the SVG tag you can add any number of SVG elements such as a circle, rectanle, square etc.

example:

<pre>
<code>
<svg>
 <rect x="10" y="10" width="100" height="100" fill="gold">
</svg>
</code>
</pre>

<!-- GOFLIN130 -->

## Svg Shapes
- Rect
    - rx
    - ry

- circle
    - cx
    - cy
    - r

- line
    - x1
    - y1
    - x2
    - y2


## Styling an SVG element

Common SVG styles

- fill
- fill-rule
- Opacity
- stroke
- stroke-width
- animatetransform



- text

- image
    - xlink:href
    - x 
    - y
    - width
    - height

- links

- Path
    - d : Define a path
    - g : Group
    - M : Move
    - L : Line
    - Z : Close Path
    - Q : Quadratic Bezier Curve
    - C : Cubic Bezier Curve
    - A : Circular Arc

Last drawn svg element overlaps the one that was drawn earlier just like the last writting CSS styles is applied over the earlier style.

## SVG Co-ordinates explained.

<path d="M 30 40 L 70 40">

M x=30 y=30

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Path_commands

## SVG Cubic Bezier curve co-ordinates

https://www.youtube.com/watch?v=eQDD1DYxbvw



<https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Patterns>
<https://designmodo.com/svg-patterns/>
<https://tympanus.net/codrops/2017/10/17/dynamic-shape-overlays-with-svg/>

<https://tympanus.net/codrops/2017/09/19/organic-shape-morph-ideas/>

<https://tympanus.net/codrops/2015/06/18/card-expansion-effect-svg-clippath/>

<https://tympanus.net/codrops/2015/04/08/motion-blur-effect-svg/>




