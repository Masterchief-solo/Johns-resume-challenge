<html>
<script> 
	fetch('https://h2j0r15521.execute-api.us-east-2.amazonaws.com/DEV')
    	.then(response => response.json())
        .then((data) => {document.getElementById('visits').innerText = data.body})

</script>

<p>
	Visitors:
	<span id='visits' />
</p>
</html>
