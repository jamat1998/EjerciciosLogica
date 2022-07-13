export default function num_random(){
    const d=document;
    d.addEventListener('submit',(e)=>{
        e.preventDefault();
        let n=(Math.round(Math.random() * 100 + 500))
        d.querySelector('.numrandom').innerHTML =`<p>Tu numero aleatorio es: ${n}</p>`;
    })
    }