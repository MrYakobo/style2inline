# style2inline
This simple Node script implements your html-stylesheet into inline-styles. I really don't know how to describe it, but it's like this:

##Example
```
<style>
    .foo{
        background: red;
    }
</style>
<div class="foo"></div>
```

After the script runs, `class="foo"` is going to be replaced with `style="background:red;"`. That's kinda neat for some purpose.

##Usage
- Make sure [node](https://nodejs.org/) is installed
- Place your markup and `<style>` in `input.html`
- run `node app.js`
- Your output is dumped into output.html.

This node script doesn't have any dependencies at all. Nice!
