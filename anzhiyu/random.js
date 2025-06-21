var posts=["2025/06/22/hello-world/","2025/06/22/这是一片新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };