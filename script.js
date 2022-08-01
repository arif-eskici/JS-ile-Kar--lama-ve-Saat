let UserName = prompt("Adınızı Nedir?")

let Name = document.querySelector("#name")

if(UserName){
    Name.innerHTML = `${UserName}`
} else {
    alert("Bir isim giriniz.")
    location.reload();
}


function showTime () {
    
    let date = new Date()
    let myClock = document.querySelector("#myClock")
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    
    myClock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}   ${days[date.getDay()]}`

    setTimeout(showTime, 1000)

}

showTime()


