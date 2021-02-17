## Build A JavaScript Pre Loader with a percentage counter.

Adding a Preloader t your site is easy and it is highly recommended for a good user experience.

A preloader let's the user view a fully loaded and functional site similar to any car you get to see that is just out of a showroom. Without a page preloader it would be similar to seeing each part of the car getting fixed in foront of your eyes.

So, Let's add a preloader.

First link your HTML page to CSS and JS files and add the below code snippets.

## How it works?

1. First display the loader with a fixed position on top of all other page content.
2. Add a javascript load event
3. attach a hide class to the load event to hide the preloader when the content is loaded.

## Code Snippet

- JS Code

```
window.addEventListener("load", function () {
  const loader = document.querySelector(".preloader");
  loader.className += " hide";
});
```

- HTML Code

```
<div class="preloader"> </div>
```

- CSS Code

```

.preloader-style-circle-gradient {
  user-select: none;
  border-radius: 50%;
  box-shadow: #b8d721 0px 1px 1px, #6fbd23 0.5px 0.866px 1px, #44a559 0.866px 0.5px 1px, #3d76b7 1px 0px 1px, #9f57ef 0.866px -0.5px 1px, #fb69c8 0.5px -0.866px 1px, #ff90c7 0px -1px 1px, #ffa481 -0.5px -0.866px 1px, #ff9c5b -0.866px -0.5px 1px, #ffcc6c -1px 0px 1px, #f6cb26 -0.866px 0.5px 1px, #fff019 -0.5px 0.866px 1px;
  filter: saturate(400%) contrast(0.9);
}

```
