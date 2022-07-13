export default function repetir(){
const d=document;
d.addEventListener('submit',(e)=>{
    e.preventDefault();
    let t =d.querySelector('.textrepeat').value;
    let n =d.querySelector('.textonveces').value;
    d.querySelector('.addcantidad').innerHTML =`<p>Tu nueva palabra o texto es:${t.repeat(n)}</p>`;
})
}