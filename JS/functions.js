
const api = document.getElementById('apiName');
const btn = document.getElementById('btnBuscar');
const response = document.getElementById('dataResponse');
const id = document.getElementById('ID');
api.innerHTML = 'Fake API Platzi'
btn.addEventListener('click', async(event)=>{
    event.preventDefault();
    try{        

        const data = await fetch('https://api.escuelajs.co/api/v1/products');
        const dataResult = await data.json();
        let strNames = ''
        dataResult.forEach(element => {
            strNames += `
            <div id="card" class="card border-success mb-3" style="max-width: 44rem;">
                <div class="card-header bg-transparent border-success">Title : ${element.title}</div>
                <div class="card-body text-success">
                <img src='${element.images}' id="image">
                </div>
                <div class="card-footer bg-transparent border-success">Description : ${element.description}</div>
            </div><hr>`            
        });
        console.log(dataResult)
        response.innerHTML = strNames;
        
    }catch(error){
        console.log(error)
    }
})

