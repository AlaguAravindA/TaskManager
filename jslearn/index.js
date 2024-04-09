
const data = [
        {
            "category": "Work",
            "subcategory": "project",
            "duration": "03:20:15",
            "task": "Design and Develop a new mobile"
        },
        {
            "category": "Leisure",
            "subcategory": "hobby",
            "duration": "01:50:30",
            "task": "Painting landscapes"
        },
        {
            "category": "Study",
            "subcategory": "course",
            "duration": "04:10:50",
            "task": "Learn Python programming"
        },
        {
            "category": "Work",
            "subcategory": "project",
            "duration": "02:15:45",
            "task": "Write documentation"
        },
        {
            "category": "Home",
            "subcategory": "maintenance",
            "duration": "00:30:20",
            "task": "Fix leaking faucet"
        },
        {
            "category": "Work",
            "subcategory": "meeting",
            "duration": "01:40:25",
            "task": "Discuss project strategy"
        },
        {
            "category": "Exercise",
            "subcategory": "workout",
            "duration": "00:55:10",
            "task": "Cardio session"
        },
        {
            "category": "Leisure",
            "subcategory": "reading",
            "duration": "02:25:35",
            "task": "Read fiction novel"
        },
        {
            "category": "Study",
            "subcategory": "research",
            "duration": "03:05:20",
            "task": "Conduct market analysis"
        },
        {
            "category": "Work",
            "subcategory": "project",
            "duration": "04:40:55",
            "task": "Debug software issues"
        },
        {
            "category": "Home",
            "subcategory": "cleaning",
            "duration": "01:15:30",
            "task": "Vacuuming and dusting"
        },
        {
            "category": "Work",
            "subcategory": "training",
            "duration": "02:55:45",
            "task": "Attend webinar on UX design"
        },
        {
            "category": "Leisure",
            "subcategory": "gaming",
            "duration": "03:30:10",
            "task": "Play video games"
        },
        {
            "category": "Exercise",
            "subcategory": "yoga",
            "duration": "01:10:25",
            "task": "Morning yoga routine"
        },
        {
            "category": "Study",
            "subcategory": "reading",
            "duration": "02:45:40",
            "task": "Read research papers"
        }
    ]

    const tbody = document.querySelector('#datadisplay tbody');

var index =null;
var indexdel = null ;
//update value;
    function updatevalue(item){
    const cat = document.querySelector("#cat");
    const sub = document.querySelector("#sub");
    const duar = document.querySelector("#time");
    const task = document.querySelector("#task");
     index=  data.indexOf(item);

    cat.value = item.category;
    sub.value = item.subcategory;
    duar.innerText = item.duration;
    task.value = item.task; 
    document.querySelector("#push").style= "display:none";
  

};

//delete 
function deletevalue(item){
    indexdel = data.indexOf(item);
    data.splice(indexdel,1);
    tbody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        const cell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = "update"
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.style.borderRadius = "5px";
        button.style.padding = "5px";
        button.style.marginLeft ="20px"
        cell.textContent=button;
        button.id="update";
        button.addEventListener("click",()=> updatevalue(item))
        const delbutton = document.createElement('button');
        delbutton.textContent ="delete";
        delbutton.style.backgroundColor = "red";
        delbutton.style.color = "white";
        delbutton.style.borderRadius = "5px";
        delbutton.style.padding = "5px";
        delbutton.style.marginLeft ="20px"
        delbutton.addEventListener("click",()=>{
            deletevalue(item)
        })
    
        
        row.appendChild(button)
        row.appendChild(delbutton)  ;
        
        tbody.appendChild(row);
    });

}

data.forEach(item => {
    const row = document.createElement('tr');
    for (const key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
    }
    const cell = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = "update"
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.style.borderRadius = "5px";
    button.style.padding = "5px";
    button.style.marginLeft ="20px"
    cell.textContent=button;
    button.id="update";
    button.addEventListener("click",()=> updatevalue(item))
    const delbutton = document.createElement('button');
    delbutton.textContent ="delete";
    delbutton.style.backgroundColor = "red";
    delbutton.style.color = "white";
    delbutton.style.borderRadius = "5px";
    delbutton.style.padding = "5px";
    delbutton.style.marginLeft ="20px"
    delbutton.addEventListener("click",()=>{
        deletevalue(item)
    })

    
    row.appendChild(button)
    row.appendChild(delbutton)  ;
    
    tbody.appendChild(row);
});


// filtering the data
document.querySelector("#dropvalue").addEventListener("change",function(){
    const tbody = document.querySelector('#datadisplay tbody');
    tbody.textContent ="";
    const value = document.querySelector("#dropvalue").value;
    data.filter((dat)=>{
        return dat.category === value
    }).forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
            
           
            
        }
        const button = document.createElement('button');
        button.textContent = "update"
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.style.borderRadius = "5px";
        button.style.padding = "5px";
        // cell.textContent=button;
        button.id="update";
        button.addEventListener("click",()=> updatevalue(item))

        row.appendChild(button)
        const delbutton = document.createElement('button');
        delbutton.textContent ="delete";
        delbutton.style.backgroundColor = "red";
        delbutton.style.color = "white";
        delbutton.style.borderRadius = "5px";
        delbutton.style.padding = "5px";
        delbutton.style.marginLeft ="20px"
        delbutton.addEventListener("click",()=>{
            deletevalue(item)
        })
        row.appendChild(delbutton);
    
        
        
        tbody.appendChild(row);
    })
   
    
})


// adding new data
document.querySelector("#push").addEventListener("click",function(e){
    e.preventDefault();
    const cat = document.querySelector("#cat").value;
    const sub = document.querySelector("#sub").value;
    const duar = document.querySelector("#time");
    const task = document.querySelector("#task").value;

    data.push({category:cat,subcategory:sub,duration:duar.textContent,task:task});
   
    const tbody = document.querySelector('#datadisplay tbody');
    tbody.textContent ="";

data.forEach(item => {
    const row = document.createElement('tr');
    for (const key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
    }
    const button = document.createElement('button');
    button.textContent = "update"
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.style.borderRadius = "5px";
    button.style.padding = "5px";
    button.id="update";
    button.addEventListener("click",()=> updatevalue(item))

    row.appendChild(button)
    const delbutton = document.createElement('button');
delbutton.textContent ="delete";
delbutton.style.backgroundColor = "red";
delbutton.style.color = "white";
delbutton.style.borderRadius = "5px";
delbutton.style.padding = "5px";
delbutton.style.marginLeft ="20px"
delbutton.addEventListener("click",()=>{
    deletevalue(item)
})
row.appendChild(delbutton);
    tbody.appendChild(row);
});

})
const up = document.querySelector("#update1");
// update the table
up.addEventListener("click",(e)=>{
    const cat = document.querySelector("#cat");
    const sub = document.querySelector("#sub");
    const duar = document.querySelector("#time");
    const task = document.querySelector("#task");
    e.preventDefault();
    if(index==null){
        console.log("do nothing");
    }
    else{
        data[index]= {category:cat.value,subcategory:sub.value,duration:duar.innerText,task:task.value};
        const tbody = document.querySelector('tbody');
        tbody.innerText = '';
 
 
        data.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            const cell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = "update"
            button.style.backgroundColor = "green";
            button.style.color = "white";
            button.style.borderRadius = "5px";
            button.style.padding = "5px";
            cell.textContent=button;
            button.id="update";
            button.addEventListener("click",()=> updatevalue(item))
        
            row.appendChild(button)
            const delbutton = document.createElement('button');
        delbutton.textContent ="delete";
        delbutton.style.backgroundColor = "red";
        delbutton.style.color = "white";
        delbutton.style.borderRadius = "5px";
        delbutton.style.padding = "5px";
        delbutton.style.marginLeft ="20px"
        delbutton.addEventListener("click",()=>{
            deletevalue(item)
        })
        row.appendChild(delbutton);
            
            tbody.appendChild(row);
        });

    }
    cat.value="";
    sub.value="";
    // cat.value="";
    duar.innerText = "00:00:00";

    task.value="";
    document.querySelector("#push").style.display="block";
    document.querySelector("#push").style.maxHeight="50px";
})

var seconds = 0;
var minutes = 0;
var hours = 0;
let intervalId; // Declare a variable to hold the interval ID globally
var isRunning = false;


const timer = () => {
    if (isRunning == false) {
        intervalId = setInterval(() => {
            seconds++;
           
            // document.querySelector("#time").textContent = seconds;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes == 60) {
                hours++;
                minutes = 0;
            }
            document.querySelector("#time").textContent = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
        }, 1000);
        isRunning = true; // Update isRunning to true when the timer starts
        document.querySelector("#start").textContent = "Pause"; // Change the button text to "Pause"
    } else {
        clearInterval(intervalId);
        isRunning = false; // Update isRunning to false when the timer is paused
        document.querySelector("#start").textContent = "Start"; // Change the button text to "Start"
    }
}



document.querySelector("#start").addEventListener("click", timer);

document.querySelector("#reset").addEventListener("click", () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(intervalId); // Clear the interval using the stored interval ID
    document.querySelector("#time").textContent = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
});























