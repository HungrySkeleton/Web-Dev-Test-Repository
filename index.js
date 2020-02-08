var app = new Vue({
	el: '#app', //Where we want out element to be rendered equivalent to ID tag in vanilla JS
	data: { //Data that is displayed 
		message: 'Hello Vue!'
	}
});

app.message = "I have changed the data";
