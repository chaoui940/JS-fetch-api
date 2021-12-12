fetch('https://jsonplaceholder.typicode.com/posts/1') 
	.then(res =>  {
		console.log(res.ok , res.status);
	})
	.catch (err=>{
		console.log('Failed')
	})


fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(res=> {
		console.log('Success')
	})

	.catch(err=> {
		console.log('Failed')
	})