// let counter = 0

// setInterval(function(){
//     counter = counter +1
//     console.log(counter)

//  if(counter === 7){
//    clearInterval(unique)
//  }
//  },2000)

// let id = setTimeout(() => {
//     counter = counter +6
//     console.log(counter)

// },2000);


const getPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getPosts();