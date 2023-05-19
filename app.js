const data = [
    {
        id:1,
        person: 'John Tarkpor ',
        img:'images/image-john.jpg',
        role: 'Junior Front-end Developer',
        description:'“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    },
    {
        id:2,
        person: 'Tanya Sinclair ',
        img:'images/image-tanya.jpg',
        role: 'UX Engineerr',
        description:'“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    
]

const desc  = document.querySelector('.inside p');
const person_title = document.querySelector('.name');
const person_img = document.querySelector('.person');
const person_role = document.querySelector('.role')
const btn = document.querySelectorAll('button')

let counter = 0;

btn.forEach(element => {
    element.addEventListener('click',e=>{
        if (element.classList.contains('left')) {
            counter > 0 ?  counter --  : counter = data.length -1 ;
        }
        if (element.classList.contains('right')) {
            counter < data.length -1 ? counter++  : counter = 0;
        }
        
        showPerson(data);
    })
});

console.log(person_role);
const showPerson = arr=>{
    person_title.textContent = arr[counter].person
    desc.textContent = arr[counter].description
    person_img.src = arr[counter].img;
    person_role.textContent = arr[counter].role
}