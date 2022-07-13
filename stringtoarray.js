export default function stringtoarray(){
const d=document;
d.addEventListener('submit',(e)=>{
e.preventDefault();
    let t = d.querySelector('.textats').value;
d.querySelector('.newarray').innerHTML =`<p>Tu nuevo arreglo [${t.split(' ')}]</p>`;
})
}