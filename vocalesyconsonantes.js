export default function vocalesyconsonantes(){
    const d=document
    d.addEventListener('submit',(e)=>{
    e.preventDefault();
    let p = d.querySelector('.txtvyc').value;
    let vocal=/[aeiou]/ig
  let consonante=/[^aeiou]/ig
  d.querySelector('.vyc').innerHTML= `${p} tiene ${(p.match(vocal).length)} vocales y ${p.match(consonante).length} consonantes`;
})
    
}