const data =[
    {
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Jamia Miliya Islamia",
        gender:"Any",
        timing:"Morning",
        class:"1st",
       
        tutionid:"123456",
        subject:"All subjects"
    },
    {
        date:"16-Nov-22",
        tution:"wanted tution for online classes",
        location:"Gaffar manzil",
        gender:"Male",
        timing:"Evening",
        class:"2nd",
      
        tutionid:"123457",
        subject:"Math"
    },

    {  date:"17-Nov-22",
    tution:"wanted tution for home classes",
    location:"Guttaiya bagh",
    gender:"female",
    timing:"Morning",
    class:"5th",
  
    subject:"Science",
    tutionid:"123458"
    },
    {
        date:"17-Nov-22",
        tution:"wanted tution for online classes",
        location:"Quila english ganj",
        gender:"Any",
        timing:"Afternoon",
        class:"10th",
       
        tutionid:"123459",
        subject:"English",
    },
    {
        date:"18-Nov-22",
        tution:"wanted tution for home classes",
        location:"Kajiyara",
        gender:"Male",
        timing:"Evening",
        class:"12th",
       
        tutionid:"123460",
        subject:"All subjects"
    },
    {
        date:"11-Nov-22",
        tution:"wanted tution for home classes",
        location:"Okhla NSIC",
        gender:"female",
        timing:"Morning",
        class:"1st",
      
        tutionid:"123461",
        subject:"Science",
    },
    {
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Jamia Miliya Islamia",
        gender:"Any",
        timing:"Morning",
        class:"6th",
       
        tutionid:"123462",
        subject:"computer"
    },
    {
       
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Rajendra place",
        gender:"Any",
        timing:"Morning",
        class:"1st",
      
        tutionid:"123463",
        subject:"English"
    },
    {
       
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Khan Market",
        gender:"Any",
        timing:"Afternoon",
        class:"8th",
      
        tutionid:"123464",
        subject:"English"
    },
    ///////////////
    {
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Jamia Miliya Islamia",
        gender:"Any",
        timing:"Morning",
        class:"1st",
       
        tutionid:"123456",
        subject:"All subjects"
    },
    {
        date:"16-Nov-22",
        tution:"wanted tution for online classes",
        location:"Gaffar manzil",
        gender:"Male",
        timing:"Evening",
        class:"2nd",
      
        tutionid:"123457",
        subject:"Math"
    },

    {  date:"17-Nov-22",
    tution:"wanted tution for home classes",
    location:"Guttaiya bagh",
    gender:"female",
    timing:"Morning",
    class:"5th",
  
    subject:"Science",
    tutionid:"123458"
    },
    {
        date:"17-Nov-22",
        tution:"wanted tution for online classes",
        location:"Quila english ganj",
        gender:"Any",
        timing:"Afternoon",
        class:"10th",
       
        tutionid:"123459",
        subject:"English",
    },
    {
        date:"18-Nov-22",
        tution:"wanted tution for home classes",
        location:"Kajiyara",
        gender:"Male",
        timing:"Evening",
        class:"12th",
       
        tutionid:"123460",
        subject:"All subjects"
    },
    {
        date:"11-Nov-22",
        tution:"wanted tution for home classes",
        location:"Okhla NSIC",
        gender:"female",
        timing:"Morning",
        class:"1st",
      
        tutionid:"123461",
        subject:"Science",
    },
    {
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Jamia Miliya Islamia",
        gender:"Any",
        timing:"Morning",
        class:"6th",
       
        tutionid:"123462",
        subject:"computer"
    },
    {
       
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Rajendra place",
        gender:"Any",
        timing:"Morning",
        class:"1st",
      
        tutionid:"123463",
        subject:"English"
    },
    {
       
        date:"15-Nov-22",
        tution:"wanted tution for home classes",
        location:"Khan Market",
        gender:"Any",
        timing:"Afternoon",
        class:"8th",
      
        tutionid:"123464",
        subject:"English"
    },
    
    

]
const search =document.querySelector(".cityname")
const searchcity =document.querySelector(".four")

const getinfo =async(city)=>{
    const respone =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17de51b2b6fb8b98a05912ba0faf98e6`);
    const info=await respone.json();
    console.log(info)
}

searchcity.addEventListener("click",
function (event){
    
     getinfo(search.value);
     event.preventDefault();
})
const select =document.querySelectorAll(".city")
// console.log(select)
Array.from(select).forEach((city)=>{
    city.addEventListener("click",
function(event){
    getinfo(city.innerHTML);
    event.preventDefault();
    })
})


data.forEach((Element,index)=>{


const main =document.querySelector(".main")
// console.lo/g(main)
///
const card =document.createElement("div")
// console.log(card)

card.classList ="card";


const moviecard = `
<div class="card-body">

<i class="bi bi-calendar-event"></i>
<span style="font-size: 12px;">Posted on:${data[index].date}</span>

<div class="dofix">
    <i class="bi bi-person-fill"></i>
    <span style="font-size:15px;color: #7a9bf7;">Wanted Home Tutor For...</span>

</div>
<div>
    <i class="bi bi-geo-alt"></i>
    <span  data-toggle="tooltip" data-placement="top" title="Location" style="font-size:13px;">${data[index].location}</span>
</div>
<div>
    <span style="color: brown;font-size:12px;">Prefered :</span>
    <i class="bi bi-person-circle"></i><span data-toggle="tooltip" data-placement="top" title="Gender"  style="font-size:12px;"> ${data[index].gender}</span> <i class="bi bi-watch"></i><span data-toggle="tooltip" data-placement="top" title="Timing"style="font-size:12px;"> ${data[index].timing}</span>
    <hr>

</div>
<div  data-toggle="tooltip" data-placement="top" title="Course"  style="margin-top:0px;"><i class="bi bi-file-earmark-break"></i><span style="font-size:12px;">${data[index].class}class TuitionId:${data[index].tutionid}</span></div>
<hr>
<div style="margin-top:0px;">
    <pre><i class="bi bi-book"></i> :<span  data-toggle="tooltip" data-placement="top" title="Subject"  style="font-size:13px;">${data[index].subject}</span></pre>
</div>

<div data-toggle="tooltip" data-placement="top" title="Tution Discription" style="background-color :#7a9bf7;padding:12px;border-radius: 10px;margin-top:0px;font-size:15px;">Wanted home tutor for ${data[index].class}
    class, All</div>
    <div class="details"style="display:flex;justify-content:space-between">
<button style="margin-top:8px;background-color : #7a9bf7;;border:1px solid blue;border-radius:3px"> <span
        style="color:Black;font-size:13px;">View Details</span> </button>
        <button style="margin-top:8px;background-color : #7a9bf7;border:1px solid blue;border-radius:3px"> <span
        style="color: Black;font-size:13px;"> View Contact</span> </button>
        </div>

</div>

`



card.innerHTML += moviecard;
main.appendChild(card);

})



