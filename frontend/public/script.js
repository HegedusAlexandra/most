console.log (year);

const monthSectionComponent = function (inner, id){
    return `
    
        <section id="${id}">${inner}</section>`
}


const dayCardComponent = function (year,month,day){
    return `
        <div class="card" >
            <time datetime="${year}">${year}</time>
            <time datetime="${month}">${month}</time>
            <time datetime="${day}">${day}</time>
        </div>
    `
}


   

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    
    for (let month of year) {
        
        let sectionInner = ""
        
        for (let index = 1; index <= month.days; index++) {
            sectionInner += dayCardComponent(2022,month.month,index)
        }      

        rootElement.insertAdjacentHTML("beforeend","<button id=\"name"+month.id+"\">Close the months</button>")
        rootElement.insertAdjacentHTML("beforeend",monthSectionComponent(sectionInner,month.id))
         
        document.getElementById("name"+month.id).onclick = function January () {
        document.getElementById("name"+month.id).style.display = "none";
        document.getElementById(month.id).style.display = "none";
        }

        /*
            
        
            document.getElementById("name").onclick = function February () {
            document.getElementById("name").style.display = "none";
            document.getElementById("febr").style.display = "none";
            }
    
            document.getElementById("name").onclick = function March () {
            document.getElementById("name").style.display = "none";
            document.getElementById("marc").style.display = "none";
            }
    
            document.getElementById("name").onclick = function April () {
            document.getElementById("name").style.display = "none";
            document.getElementById("apr").style.display = "none";
            }
    
            document.getElementById("name").onclick = function May () {
            document.getElementById("name").style.display = "none";
            document.getElementById("may").style.display = "none";
            }
    
            document.getElementById("name").onclick = function June () {
            document.getElementById("name").style.display = "none";
            document.getElementById("june").style.display = "none";
            }
    
            document.getElementById("name").onclick = function July () {
            document.getElementById("name").style.display = "none";
            document.getElementById("july").style.display = "none";
            }
    
            document.getElementById("name").onclick = function August () {
            document.getElementById("name").style.display = "none";
            document.getElementById("aug").style.display = "none";
            }
    
            document.getElementById("name").onclick = function September () {
            document.getElementById("name").style.display = "none";
            document.getElementById("sept").style.display = "none";
            }
    
            document.getElementById("name").onclick = function January () {
            document.getElementById("name").style.display = "none";
            document.getElementById("oct").style.display = "none";
            }
    
            document.getElementById("name").onclick = function November () {
            document.getElementById("name").style.display = "none";
            document.getElementById("nov").style.display = "none";
            }
    
            document.getElementById("name").onclick = function December () {
            document.getElementById("name").style.display = "none";
            document.getElementById("dec").style.display = "none";
            }*/
    }
}


         




window.addEventListener("load", loadEvent)
