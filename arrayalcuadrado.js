export default function arrayalcuadrado(){
    const d=document;
    d.addEventListener('submit',(e)=>{
        e.preventDefault();
        const c = d.querySelector('.alcuadra2').value;
         d.querySelector('.newcuadra2').innerHTML=`<p>Tu numero elevado al cuadrado es: ${c*c}</p>`;
    })
}