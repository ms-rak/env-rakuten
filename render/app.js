var template = twig({
    id: "posts",
    href: "../templates/posts.twig",
    // for this example we'll block until the template is loaded
    async: false

    // The default is to load asynchronously, and call the load function 
    //   when the template is loaded.

    // load: function(template) { }
});