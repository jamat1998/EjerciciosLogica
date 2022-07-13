export default function textocortado(){
const d=document;
    d.addEventListener('submit',(e)=>{
        e.preventDefault();
        let t= d.querySelector('.textcut').value;
       let n= d.querySelector('.numbercut').value;
    d.querySelector('.addpalabra').innerHTML = `<p>Tu nueva frase / palabra es: ${t.slice(0,n)}</p>`
    })
}