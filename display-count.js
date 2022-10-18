<html>
<script> 
	fetch('https://h1h2h31100000.execute-api.us-east-1.amazonaws.com/BETA')
    	.then(response => response.json())
        .then((data) => {document.getElementById('visits').innerText = data.body})

</script>

<p>
	Visitors:
	<span id='visits' />
</p>
</html>
