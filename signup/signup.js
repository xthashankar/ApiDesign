var info={}
function change(name,value)
{
    // console.log('data',info)
    info={
        ...info,
        [name]:value
    }
}

//for button
let submit=document.getElementById('subbtn');
submit.addEventListener('click',function(e)
{
    e.preventDefault();
    // console.log('submit');
    fetch('https://conduit.productionready.io/api/users',{
method:"POST",
headers:{"Content-Type":"application/json","Accept":"application/json"},
body: JSON.stringify({user:info})
})
.then(response => response.json())
.then(data => console.log(data) )
})
