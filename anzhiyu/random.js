var posts=["2024/11/09/hello-world/","2024/11/09/zzcraft又复活了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };