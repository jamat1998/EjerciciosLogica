export default function newdegrees() {
    const d = document;

    d.addEventListener('submit', (e) => {
        e.preventDefault();

        const value = d.getElementById("select").value
        const g = d.getElementById("inputdegree").value;

        if (value === "F to C") {
            let gc = (g - 32) / 1.8;
            d.querySelector('.newdegree').innerHTML = `<p>Tus grados fahrenheit equivalen a ${gc}° Celcius</p>`
        } else if (value === "C to F") {
            let gf = (g * 1.8) + 32;
            
            d.querySelector('.newdegree').innerHTML = `<p>Tus grados Celcius equivalen a ${gf}° Fahrenheit</p>`
        }
    })
}

newdegrees();