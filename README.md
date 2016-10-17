# style2inline
This simple Node script implements your html-stylesheet into inline-styles. I really don't know how to describe it in a single sentence, so check out the example below instead:

##Example
```
<style>
    .foo{
        background: red;
        font-family: sans-serif;
    }
</style>
<div class="foo"></div>
```
This markup above turns into:
```
<div style="background:red;font-family:sans-serif"></div>
```

#####That's kinda neat.

So, what the script basically does is that it replaces `class="foo"` with the contents of `.foo` in the `<style>`-tag.

##Usage
- Make sure [node](https://nodejs.org/) is installed
- Place your markup and `<style>` in `input.html`
- run `node app.js`
- Your output is dumped into `output.html`.

###&lt;Disclaimer&gt;
I'm not saying that `inline` is better than `head`; I'm just making this tool to allow the smooth conversion from the one to the other.
This tool could prove useful if you're, for example, designing a Wiki on a domain that allows only common markup html-tags (`<p>` and such) and inline-styles.

###&lt;/Disclaimer&gt;
This node script doesn't have any dependencies at all. Nice!
