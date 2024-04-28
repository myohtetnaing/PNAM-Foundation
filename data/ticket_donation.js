
let data = [
    {text:"ရန်ကုန် ဖြတ်ပိုင်းအလျှူငွေ",amount:290000,},
    {text:"ရခိုင် ဖြတ်ပိုင်းအလျှူငွေ",amount:1140000,},
  
]


let tbody = document.querySelector("tbody");
let num = 1
data.forEach((donate)=>{
    donate.id = num;
    num++
    let row = document.createElement("tr")

    let idCell = document.createElement("td")
    idCell.textContent = donate.id
    row.appendChild(idCell)

    let textCell = document.createElement("td")
    textCell.textContent = donate.text
    row.appendChild(textCell)

    let amountCell = document.createElement("td")
    amountCell.textContent = donate.amount + " Kyats"
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
totalTextCell.textContent = "စုစုပေါင်း ဖြတ်ပိုင်းအလျှူငွေ"
footerRow.appendChild(totalTextCell)

let totalAmountCell = document.createElement("td")
totalAmountCell.textContent = totalAmount + " Kyats"
footerRow.appendChild(totalAmountCell )

footer.appendChild(footerRow)

let needfooterRow = document.createElement("tr")

let needIdCell = document.createElement("td")
needIdCell.textContent = null
needfooterRow.appendChild(needIdCell)

let needTextCell = document.createElement("td")
needTextCell.textContent = "ရွာပို့ အသင်းလိုငွေ"
needfooterRow.appendChild(needTextCell)

let needAmountCell = document.createElement("td")
needAmountCell.textContent = 18000 + " Kyats"
needfooterRow.appendChild(needAmountCell )
footer.appendChild(needfooterRow)
