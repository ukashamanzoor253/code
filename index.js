function generate(){

    let date = document.getElementById('date')
    

birthDate = new Date(date.value);

if(birthDate > new Date()){
    date.value = new Date()
    alert('Enter valid date till now')
    
}

 y1 = birthDate.getFullYear();
 m1 = birthDate.getMonth()+1;
 d1 = birthDate.getDate();

newDate = new Date();


y2 = newDate.getFullYear();
m2 = newDate.getMonth();
d2 = newDate.getDate();

y3 = y2-y1 ;
if (m2>m1){
   m3 = m2-m1; 
}
else{
    y2--;
    m3 = m2+12 - m1
}
if(d2>d1){
    d3 = d2-d1
}
else{

}


 console.log(d3, m3, y3);





}
