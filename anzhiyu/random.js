var posts=["2024/11/09/openfrp穿透教程/","2024/11/09/樱花穿透教程/","2024/11/09/zzcraft又复活了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };