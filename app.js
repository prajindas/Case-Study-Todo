const alert_n =document.querySelector('.alert-name');
const alert_p =document.querySelector('.alert-password');





function validate(){
    const names =document.getElementById('name').value;
    const password =document.getElementById('password').value;;
    console.log(names);
    console.log(password);

    // if(names==="admin"){
      
    // }else{
    //     alert_n.innerHTML= "wrong user name";
    //     alert_n.classList.add('alert-danger');
        
    // };

    // if(password==="12345"){
    //     return true
    // }
    // else{
    //     alert_p.innerHTML="wrong password"
    //     alert_p.classList.add('alert-danger')
    //     return false;
    // }

    if(names==="admin" && password==="12345"){
      
      return true;
    }else{
        alert_n.innerHTML= "Invalid username or password";
        alert_n.classList.add('alert-danger');
        setTimeout(()=>{
            alert_n.innerHTML= "";
            alert_n.classList.remove('alert-danger');
            
        },2000)
        return false;
        
    }   
    

}

// function go(){
//     window.location.href="todo.html"
// }


//http request for todo liat
const list =document.querySelector('.list')
onload =function ajax(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
           
               
            var output ="";
            var id ="";
            var len="";
            for(var i=0; i<response.length; i++){
                
                output =response[i].title ;
                id =response[i].id ;

                var li =document.createElement("li");
                li.classList="list-group-item bg-list";
                
                var div1=document.createElement('div');
                div1.classList="lists";

                var div=document.createElement('div');
                div.classList="custom-control custom-checkbox"
    
                var input= document.createElement('input');
                input.classList="custom-control-input hello";
                input.type="checkbox";
                input.id=`${id}`;
                input.setAttribute("onclick","checkCheckbox()");
            
        
    
                var label=document.createElement("label");
                label.classList="custom-control-label";
                label.setAttribute("for", id); 
                label.innerHTML=output;
                

                div.appendChild(input);
                div.appendChild(label);
                div1.appendChild(div);
                li.appendChild(div1);
                list.appendChild(li)

                len=response.length;

                
    

            }
       
           console.log(output);
           console.log(len);
           for(let i=1; i<=len;i ++){
                 
            document.getElementById(i).onclick =function(){
                let c= 0;
                var markedCheckbox = document.getElementsByClassName('hello');
                for (var checkbox of markedCheckbox) {
                if (checkbox.checked ==true){
                    // console.count(i)
                    // console.log(i)
                     c ++;
                }
            
              }
              //alert using promise
              console.log(c);
              var promise = new Promise(function(resolve,reject){
                if(c==5){
                    resolve(" Congrats. 5 Tasks have been Successfully Completed ")
                  
                }else{
                    reject("not completed")
                }
            });
            promise.then(function(s){
                    alert(s)
            }).catch(function(e){
                console.log(e)
            })   
           
             
            }
                 
               }
      
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}
 

function redirect(){
    location.replace("index.html")
}

//header datas

const wish =document.getElementById('wishes')
const time =document.getElementById('time');
const date =document.getElementById('date');
const hour =document.getElementById('h');
const minute =document.getElementById('m');
const second =document.getElementById('s');
const weather=document.querySelector('#weather');




setInterval(my_date,1000)

function my_date(){

const d= new Date();
const h=d.getHours();
const m=d.getMinutes();
const M=d.getMonth() + 1;
const s=d.getSeconds();
const D=d.getDate()
const y=d.getFullYear();
// time.innerHTML=`${h} : ${m} : ${s}`;
hour.innerHTML= h;
minute.innerHTML =m;
second.innerHTML =s;
date.innerHTML= `${D} - ${M} -  ${y}`;

if(h < 12 ){
    wish.innerHTML="GOOD MORNING";
}else if(h < 17){
    wish.innerHTML="GOOD AFTERNOON";
}else if(h < 21){
    wish.innerHTML="GOOD EVENING";
}else if(h <= 24 ){
    wish.innerHTML="GOOD NIGHT";
}

if(h > 5 && h <19){
    weather.classList.add("fa")
    weather.classList.add("fa-cloud-sun")
}else if(h >= 19 || h < 4){
    weather.classList.add("fas")
    weather.classList.add("fa-cloud-moon")
}

}
my_date();
