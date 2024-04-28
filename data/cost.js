
let data = [
    {item:"T-SHIRT",amount:260000,},
    {item:"ဖြတ်ပိုင်း",amount:21000,},
    {item:"တံဆိတ်တုံး",amount:38000,},
    {item:"မှင်ဗူး",amount:7500,},
    {item:"ဖုန်း၂လုံး ",amount:230000,},
    {item:"ပန်ကာသုံးလုံး ",amount:21000,},
    {item:"ဂျိုင့်၅လုံး ",amount:27500,},
    {item:"ရခိုင်ဥက္ကဌရုံးလားခီဟာ",amount:10000,},
    {item:"ဆောင်းပါးပို့ ",amount:5000,},
 
]


let tbody = document.querySelector("tbody");
let num= 1
data.forEach((cost)=>{
    cost.id = num
    num++
    let row = document.createElement("tr")

    let idCell = document.createElement("td")
    idCell.textContent = cost.id
    row.appendChild(idCell)

    let itemCell = document.createElement("td")
    itemCell .textContent = cost.item
    row.appendChild(itemCell )

    let amountCell = document.createElement("td")
    amountCell.textContent = cost.amount + " kyats"
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
totalTextCell.textContent = "စုစုပေါင်း"
footerRow.appendChild(totalTextCell)

let totalAmountCell = document.createElement("td")
totalAmountCell .textContent = totalAmount
footerRow.appendChild(totalAmountCell )

footer.appendChild(footerRow)





