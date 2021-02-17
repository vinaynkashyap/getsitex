$browser-context: 16; // Default

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}


Example Usage:

h1 {
  font-size: em(32);
}

p {
  font-size: em(14);
}


https://css-tricks.com/snippets/sass/px-to-em-functions/