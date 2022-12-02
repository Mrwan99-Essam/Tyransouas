//for(let i=0;i<=3;i++)
//{
    //var a=prompt('Plz Enter the first name','Name');
    
    //x[i]=[a];
    
//}
//for(letx     n=0;i<=3;n++)
//{
    //console.log("The name" + x[n]);
    
//}
//var usrName;
//while(usrName==null || usrName=="")
//{
    //usrName=prompt('Enter yor name','Her');
//}
//alert("Thanks Mr" + usrName);
class Student{
    Id=[];
    Name=[];
    Res=[];
    
    showStudent() {
        var m =prompt('How Match student','write Her');
        console.log(" name : "  + " Id :" + " Res :" );  
        for( let i=0 ; i<=m ; i++){
            console.log( this.Name[i] + this.Id[i]  + this.Res[i]);   
        }   
    }
    saveStudent() {
        console.log(" Its saved ");
    }
}
var a =prompt('Enter The all student in shcool', 'her');
parseInt(a);

for( let i=0 ; i<=a ; i++)
{
    var St= new Student();
    St.Id[i]= prompt('Enter Id','Her');
    St.Name[i] = prompt('enter Name ' , 'Her');
    St.Res[i]= prompt('Enter Result','Her');
}
St.showStudent();
var wind1;
function OpenWindw(){
    wind1=window.open('https://cima4u.mom/' , '_Blank', 'width=200 , height=200');

};
function Scrool(){
    window.scrollBy(0,50);
}
var ST ;
function StartScroll(){
    ST=window.setInterval(Scrool,2000); 
};
function StopS(){
    window.clearInterval(ST);
};
function Dater(){
    var currnt= new Date();
    document.getElementById("MR").innerHTML=currnt.toLocaleTimeString().bold();
};
function eventDe(ev){
    if(ev.key=="M" || ev.key=="m" || ev.key=="g" || ev.key=="G")
    ev.preventDefault(); 
     

};
function eventDNe(em){
    if(em.key=="M" || em.key=="m" || em.key=="g" || em.key=="G")
    alert("Error");

};
var ThsEl
var ev
function emo(event){
    document.querySelectorAll("#LR").value=document.querySelectorAll("#MR").innerHTML;
    
};
var currentImge=0;
var imgeArry=[];
var TimerI;
imgeArry[0]="undraw_people_re_8spw.svg";
imgeArry[1]="JavaScript-Logo.png";
imgeArry[2]="linko.png";
imgeArry[3]="icons8-facebook-24.png";
function flipImg(){
    currentImge++;
    if(currentImge>3)
       currentImge=0;
    document.querySelector("#MMR").src=imgeArry[currentImge];
};
function NextH(){
    TimerI=setInterval(flipImg,500);
};
function Nmkk(){
    document.querySelector("#MMR").src="undraw_people_re_8spw.svg";
    clearInterval(TimerI);
}
