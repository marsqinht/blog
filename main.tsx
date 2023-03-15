/** @jsx h */

import blog, { ga, redirects, h } from "https://deno.land/x/blog/blog.tsx";

blog({
  title: "Mars' Blog",
  description: "tech and life",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://yun.dui88.com/mars/avatar/WechatIMG15.jpeg",
  avatarClass: "rounded-full",
  author: "Mars",
  links: [
    { title: "Email", url: "mailto:qinhaitaojob@gmail.com" },
    { title: "GitHub", url: "https://github.com/marsqinht" },
    // { title: "Zhihu", url: "https://www.zhihu.com/people/qin-hai-tao" },
  ],
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
