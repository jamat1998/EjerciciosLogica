export default function contar(){
    const d=document;
    const $input= d.querySelector('.count');
    
    d.addEventListener('submit', (e)=>{
        e.preventDefault();
        d.querySelector('.contar').innerHTML = `<p>Tu palabra contiene ${$input.value.length} Caracteres</p>`
    })
}