let data = [
    {
        amount:"(စုစုပေါင်းသင်္ကြန်းအလျှူငွေ+စုစုပေါင်းဖြတ်ပိုင်းအလျှူငွေ+စုစုပေါင်းအသင်းငွေ)-(စုစုပေါင်းသုံးစွဲငွေ+ရွာပို့အသင်း18000 လို)"
    },
    {   
        amount:"(446000 +1430000 + 489000) - ( 620000+ 18000 )"
    },
    {  
        amount:(446000 +1430000 + 489000) - ( 620000+ 18000 ) + " Kyats"
    },
]
				

let tbody= document.querySelector("tbody")
let total = "စုစုပေါင်းကျန်ငွေ";
data.forEach((person)=>{
    person.total = total
    const row = document.createElement("tr");

    const totalCell = document.createElement("td");
    totalCell.textContent = person.total;
    row.appendChild(totalCell)

    const totalamountCell = document.createElement("td");
    totalamountCell.textContent = person.amount ;
    row.appendChild(totalamountCell)

    tbody.appendChild(row)

})

     
      

