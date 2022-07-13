export default function delet_words(){
    const d=document;
    d.addEventListener('submit',(e)=>{
        e.preventDefault();
        let t =d.querySelector('.textdelete').value;
        let expresion=/[0-9]/ig
        d.querySelector('.msgdelete').innerHTML =`<p>Tus numeros en el texto son: ${t.match(expresion)}</p>`;
    })
    }
    