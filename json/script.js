fetch('https://jsonplaceholder.typicode.com/posts/1') 
	.then(res =>  {
		return res.json();
	})
	.then(post=>{
		console.log(post)
	})
	.catch (err=>{
		console.log('Failed')
	})

