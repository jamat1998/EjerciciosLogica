export default function parimpar(){
   const d=document;
d.addEventListener('submit',(e)=>{
    e.preventDefault();
    let number = d.querySelector('.txtnumb').value;
    if(number % 2 === 0){
        d.querySelector('.parimpar').innerHTML= `<p>${number} es Par`
    }else 
        d.querySelector('.parimpar').innerHTML= `<p>${number} es Impar`
    
})
}