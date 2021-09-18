let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
let rainbow;

rainbow = hero.concat(native,destination);
rainbow.reverse();

// [ "In", "Poltava", "Of", "York", "Ivan" ]
// ['Richard','Of','York','Gave','Battle','In','Vain'];

rainbow.push("Gave");
rainbow.unshift("Richard");
rainbow.splice(2,1,"Battle");

console.log(rainbow);
console.log(`'Richard','Of','York','Gave','Battle','In','Vain'`)

if (rainbow[1] = 'In') {
    rainbow[1] = 'Of'
    rainbow[5] = 'In';
}
if(rainbow[2] = `Battle`) {
    rainbow[2] = 'York'
    rainbow[4] = 'Battle'
    rainbow[3] = 'Gave'
    rainbow[6] = 'Vain'
}

document.write(`
<table>
    <tr>
        <td class="circle"></td>
        <td>${rainbow[0]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${rainbow[1]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${rainbow[2]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${rainbow[3]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${rainbow[4]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${rainbow[5]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${rainbow[6]}</td>
    </tr>
</table>`)


console.log(rainbow);