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
        <th style='background: violet; border-radius: 100%; width: 50px; height: 50px;'> </th>
        <th style='background: orange; border-radius: 100%; width: 50px; height: 50px;'> </th>
        <th style='background: yellow; border-radius: 100%; width: 50px; height: 50px;'> </th>
        <th style='background: green; border-radius: 100%; width: 50px; height: 50px;'> </th>
        <th style='background: blue; border-radius: 100%; width: 50px; height: 50px;'> </th>
        <th style='background: darkblue; border-radius: 100%; width: 50px; height: 50px;'> </th>
        <th style='background: violet; border-radius: 100%; width: 50px; height: 50px;'> </th>
    </tr>
    <tr>
    <th>${rainbow[0]}</th>
    <th>${rainbow[1]}</th>
    <th>${rainbow[2]}</th>
    <th>${rainbow[3]}</th>
    <th>${rainbow[4]}</th>
    <th>${rainbow[5]}</th>
    <th>${rainbow[6]}</th>
</tr>
</table>`)


console.log(rainbow);