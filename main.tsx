/** @jsx h */

import blog, { ga, redirects, h } from "https://deno.land/x/blog/blog.tsx";

blog({
  title: "Mars' Blog",
  description: "This is my tech and life blog.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://tva1.sinaimg.cn/large/008vxvgGly1h800yyqprej30qn0qnwgf.jpg",
  avatarClass: "rounded-full",
  author: "Mars",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
