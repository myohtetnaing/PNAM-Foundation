const data = [
    {
        
        donate: "ရခိုင်သင်္ကြန်းအလျှူငွေ",
        amount: 400000
    },
    {   
        donate: "ရန်ကုန်သင်္ကြန်းအလျှူငွေ",
        amount: 46000
    },
]


let tbody= document.querySelector("tbody")
let num = 1
data.forEach((person)=>{

    person.id = num;
    num++
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = person.id;
    row.appendChild(idCell);

    const donateCell = document.createElement("td");
    donateCell.textContent = person.donate;
    row.appendChild(donateCell)

    const amountCell = document.createElement("td");
    amountCell.textContent = person.amount + " Kyats";
    row.appendChild(amountCell)

    tbody.appendChild(row)

})


let footer = document.querySelector("tfoot");

let totalAmount = 0
for(let i =0; i<data.length; i++){
    totalAmount += data[i].amount
}
let footerRow = document.createElement("tr")


let totalIdCell = document.createElement("td")
totalIdCell.textContent = null
footerRow.appendChild(totalIdCell)

let totalTextCell = document.createElement("td")
totalTextCell.textContent = "စုစုပေါင်းသင်္ကြန်းအလျှူငွေ"
footerRow.appendChild(totalTextCell)

let totalAmountCell = document.createElement("td")
totalAmountCell .textContent = totalAmount + " Kyats"
footerRow.appendChild(totalAmountCell )

footer.appendChild(footerRow)