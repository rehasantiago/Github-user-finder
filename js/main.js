$(document).ready(function(){
	$('#searchUser').on('keyup',function(e){
		let username=e.target.value;
		$.ajax({
			url:'https://api.github.com/users/'+username,
			data:{
				client_id:'72144889397874c35045',
				client_secret:'dc4f4bcd901031080e840269ec85b1605e9013fa'
			}

		}).done(function(user){
			$('#profile').html(`${user.name}
				`);
		});
	});
});