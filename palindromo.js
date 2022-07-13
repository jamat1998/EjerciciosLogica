export default function palindromo(){
    const d=document;
    d.addEventListener('submit',(e)=>{
        e.preventDefault();
        let t =d.querySelector('.textpalindromo').value;
        t=t.toLowerCase();
        if(t===t.split('').reverse().join('')){
          d.querySelector('.addpalindromo').innerHTML =`<p>${t} es Palindromo</p>`;
        }else
        d.querySelector('.addpalindromo').innerHTML =`<p>${t} no es palindromo</p>`;
    })
    }