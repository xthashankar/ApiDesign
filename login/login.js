var data={}
function change(name,value){
    console.log(data)
    data={
        ...data,
        [name]:value
    }
let lgnbtn=document.getElementById('btn')
lgnbtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(lgnbtn);
    fetch('https://conduit.productionready.io/api/users/login',{
    method:'POST',
    headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify({user:data})
    })
    .then(response=>response.json())
    .then(object=>{console.log(object)
    alert('look at the console for error or success')})   
})
}