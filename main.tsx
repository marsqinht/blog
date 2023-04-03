/** @jsx h */

import blog, { ga, redirects, h } from "https://deno.land/x/blog/blog.tsx";

blog({
  title: "Mars' Blog",
  description: "tech and life",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://yun.dui88.com/mars/avatar/WechatIMG14.jpeg",
  avatarClass: "rounded-full",
  author: "Mars",
  theme: "light",
  favicon: "https://yun.dui88.com/mars/avatar/5b6f98b6-b38a-43b8-b080-0e7f0360e6bf.png",
  links: [
    { title: "Email", url: "mailto:qinhaitaojob@gmail.com", target: "_blank" },
    { title: "GitHub", url: "https://github.com/marsqinht", target: "_blank"  },
    // { title: "Zhihu", url: "https://www.zhihu.com/people/qin-hai-tao", target: "_blank", icon: <div>11</div>  },
  ],
  // middlewares: [

  //   // If you want to set up Google Analytics, paste your GA key here.
  //   // ga("UA-XXXXXXXX-X"),

  //   // If you want to provide some redirections, you can specify them here,
  //   // pathname specified in a key will redirect to pathname in the value.
  //   // redirects({
  //   //  "/hello_world.html": "/hello_world",
  //   // }),

  // ]
});
