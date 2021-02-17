The calculations are not that hard but I find it easier to look at a simple table. This helps me visualise the change in font-size across different resolutions.

https://medium.com/sketch-app-sources/truly-fluid-typography-257a2b434105


Viewport units:	1vw	2vw	3vw	4vw	5vw

Viewport size	font-size in pixels

400px	  4px	  8px	    12px	16px	20px
500px	  5px	  10px  	15px	20px	25px
600px	  6px	  12px  	18px	24px	30px
700px	  7px	  14px  	21px	28px	35px
800px	  8px	  16px  	24px	32px	40px
900px	  9px	  18px  	27px	36px	45px
1000px	  10px    20px	    30px	40px	50px


## SASS Mixin

//- Mixin: Fluid Type
///
/// Magic calc + vh to allow text to be fluid between minimum
/// and maximum breakpoints.
///
/// @group typography
/// @param {variable} $min-font-size [12px] - Minimum font size 
/// @param {variable} $max-font-size [24px] - Maximum font size
/// @param {variable} $lower-range [420px] - Stop scaling font smaller at this screen resolution 
/// @param {variable} $upper-range [900px] - Stop scaling font larger at this screen resolution 
/// @example
///   h1 {
///     @include responsive-type(20px, 48px);
///   }
/// @site https://madebymike.com.au/writing/precise-control-responsive-typography/

@mixin fluid-type($min-font-size: 12px, $max-font-size: 21px, $lower-range: 420px, $upper-range: 900px) {

  font-size: calc(#{$min-font-size} + #{(($max-font-size / ($max-font-size * 0 + 1)) - ($min-font-size / ($min-font-size * 0 + 1)))} * ( (100vw - #{$lower-range}) / #{(($upper-range / ($upper-range * 0 + 1)) - ($lower-range / ($lower-range * 0 + 1)))}));
  
  @media screen and (max-width: $lower-range) {
    font-size: $min-font-size;
  }
  @media screen and (min-width: $upper-range){
    font-size: $max-font-size;
  }
}


## Usage

p {
  @include fluid-type(14px, 20px);
  font-weight: normal
}

h1 {
  @include fluid-type(28px, 90px);
  font-weight: 100;
}
