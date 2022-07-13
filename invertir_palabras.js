export default function invertirpalabras(){
    const d=document;
    d.addEventListener('submit',(e)=>{
        e.preventDefault();
        let t = d.querySelector('.textturn').value;
    d.querySelector('.turn').innerHTML=`<p>Tu texto o palabra invertidos: ${t.split('').reverse().join('')}</p>`;
    })
}