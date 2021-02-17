### Debug CSS the easy way...

I was facing an issue with a grid gallery. No matter what I could not figure it out untill...

The code from the codepen works fine but as soon as you impliment it on your site there was a conflict and for the fuck of it I could not tell what the hell it was causing a conflict.

Finally I resolved it thsi way...

1. I Created a separate HTML and CSS file and added the CSS from Codepen which works fine.
2. Then i add the main site css file to the HTML
3. Now when I inspect I can disable the styles one by one in firefox only from main.css

This helped me find out that display-inline on the anchor tagw as causing the issue.

# Trouble shoot issues

1. Inline-block issue on ahrefs mess up CSS grid gallery.
2. Custom Scrollbars on Div element not visible on mobile.
