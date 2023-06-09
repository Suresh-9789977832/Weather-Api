

    const inputval=document.getElementById('inputval')
    const btn=document.getElementById('btn')

async function getweather(city){
    var res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7222bf6dbf9b0bd9f5df8b071b7e9f2&units=mertic`)
    var data= await res.json();
    // console.log(data)
    document.getElementById('result').value=data.main.temp+'°C' ; 
    document.getElementById('country').value=data.sys.country; 
    document.getElementById('wind1').value=data.wind.speed+'m/s';

}

    btn.addEventListener('click',()=>{
        getweather(inputval.value)
    })

getweather()