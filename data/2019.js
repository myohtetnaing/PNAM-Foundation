const  cost = 1000
const half = 1000
const unknown = "09*********"
const member = "အသင်းဝင်"
const data = [
    {
        id:1,
        name:"အရှင်သုဘောဂ",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09252233857"

    },
    {
        id:2,
        name:"အရှင်စိန္တသာရ",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09264135229"

    }
    ,
    {
        id:3,
        name:"အရှင်ဓမ္မာစာရ",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:unknown

    }
    ,
    {
        id:4,
        name:"အရှင်ပညာဗလ",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:5,
        name:"ဒေါ်ယုယုဆွေ",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:6,
        name:"ဒေါ်ပန်းသိန်းခင်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 4,
        ph:unknown

    }
    ,
    {
        id:7,
        name:"မျိုးထက်နိုင်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 12,
        ph:"09969867905"

    }
    ,
    {
        id:8,
        name:"ကိုစိုးဝင်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09445153259"

    }
    ,
    {
        id:9,
        name:"ကိုလင်းမောင်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 12,
        ph:"09423541657"

    }
    ,
    {
        id:10,
        name:"မောင်မျိုးဆက်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:11,
        name:"ခင်ချိုလင်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09262659377"

    }
    ,
    {
        id:12,
        name:"ဇင်ချိုထက်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09426191023"

    }
    ,
    {
        id:13,
        name:"ငြိမ်းချမ်းကို",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09403554864"

    }
    ,
    {
        id:14,
        name:"သိန်းဇော်ထွန်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09457262953"

    }
    ,
    {
        id:15,
        name:"အောင်နိုင်ဇော်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"09772835786"

    }
    ,
    {
        id:16,
        name:"ကိုလင်းစိုး",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09768895322"

    }
    ,
    {
        id:17,
        name:"စိုးဝင်ထွန်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09421690589"

    }
    ,
    {
        id:18,
        name:"ဦးထွန်းလင်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09429977984"

    }
    ,
    {
        id:19,
        name:"ထွန်းနိုင်စိုး",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 12,
        ph:"09454289351"

    }
    ,
    {
        id:20,
        name:"ခင်ဇော်ဝင်း",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:unknown

    }
    ,
    {
        id:21,
        name:"ခန့်ဝင့်အောင်	",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 12,
        ph:unknown

    }
    ,
    {
        id:22,
        name:"မျိုးနေထွန်း",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:unknown

    }
    ,
    {
        id:23,
        name:"အောင်ကိုသန်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09423129687"

    }
    ,
    {
        id:24,
        name:"အောင်မျိုးထက်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09423459931"

    }
    ,
    {
        id:25,
        name:"သန်းဝင်းဇော်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09772114195"

    }
    ,
    {
        id:26,
        name:"ရဲကျော်သန်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:27,
        name:"အောင်ကြည်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:28,
        name:"သန်းတင်မောင်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:29,
        name:"မျိုးမြတ်သူ",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost *12,
        ph:unknown

    }
    ,
    {
        id:30,
        name:"မြင့်ဇော်ဝင်း",
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:31,
        name:"ထွန်းကိုကို",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09251625816"

    }
    ,
    {
        id:32,
        name:"လင်းလင်းဖြိုး",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:null,
        dec:null,
        total:cost * 10,
        ph:"09422756690"

    }
    ,
    {
        id:33,
        name:"မာမာသန်း",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 6,
        ph:"09425170850"

    }
    ,
    {
        id:34,
        name:"လှိုင်လှိုင်ဖြိုး",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"09442797383"

    }
    ,
    {
        id:35,
        name:"အေးနန္ဒာစိုး",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09427974369"

    }
    ,
    {
        id:36,
        name:"အေးသန္တာမြင့်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09428059651"

    }
    ,
    {
        id:37,
        name:"မမျိုးနွယ်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"09459200960"

    }
    ,
    {
        id:38,
        name:"ခင်ထက်စိုး",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:39,
        name:"မိမိစံ",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 12,
        ph:"09425882136"

    }
    ,
    {
        id:40,
        name:"ဆန်းယုခင်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"09444884697"

    }
    ,
    {
        id:41,
        name:"ဇင်မာလွင်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09401372589"

    }
    ,
    {
        id:42,
        name:"မျိုးမျိုး",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"09459315689"

    }
    ,
    {
        id:43,
        name:"နန္ဒာစိုး",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:44,
        name:"စန္ဒာမြင်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"09427695492"

    }
    ,
    {
        id:45,
        name:"သိန်းမေ",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:"094017861977"

    }
    ,
    {
        id:46,
        name:"မိုးသိန်းကြည်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:47,
        name:"မိုးမိုးသန်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:48,
        name:"ခင်သန္တာဖြိုး",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:cost * 6,
        ph:unknown

    }
    ,
    {
        id:49,
        name:"လှလှတင်",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:50,
        name:"လှခင်ရီ",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:51,
        name:"ရွှေဇင်ထွန်း",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:52,
        name:"ခင်မြရွှေ",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:unknown

    }
    ,
    {
        id:53,
        name:"မျိုးမင်းစိုး",
        jan:null,
        feb:null,
        mar:null,
        apr:null,
        may:null,
        jun:null,
        jul:null,
        aug:null,
        sep:null,
        oct:null,
        nov:null,
        dec:null,
        total:null,
        ph:"09672134905"

    },
    {
        id:54,
        name:"တင်တင်ထွန်",
        jan:cost,
        feb:cost,
        mar:cost,
        apr:cost,
        may:cost,
        jun:cost,
        jul:cost,
        aug:cost,
        sep:cost,
        oct:cost,
        nov:cost,
        dec:cost,
        total:cost * 12,
        ph:unknown

    }
    
]

let table = document.querySelector("tbody")
data.forEach((person)=>{
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = person.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;
    row.appendChild(nameCell)

    const janCell = document.createElement("td");
    janCell.textContent = person.jan;
    row.appendChild(janCell)

    const febCell = document.createElement("td");
    febCell.textContent = person.feb;
    row.appendChild(febCell)

    const marCell = document.createElement("td");
    marCell.textContent = person.mar;
    row.appendChild(marCell)

    const aprCell = document.createElement("td");
    aprCell.textContent = person.apr;
    row.appendChild(aprCell)

    const mayCell = document.createElement("td");
    mayCell.textContent = person.may;
    row.appendChild(mayCell)

    const junCell = document.createElement("td");
    junCell.textContent = person.jun;
    row.appendChild(junCell)

    const julCell = document.createElement("td");
    julCell.textContent = person.jul;
    row.appendChild(julCell)

    const augCell = document.createElement("td");
    augCell.textContent = person.aug;
    row.appendChild(augCell)

    const sepCell = document.createElement("td");
    sepCell.textContent = person.sep;
    row.appendChild(sepCell)

    const octCell = document.createElement("td");
    octCell.textContent = person.oct;
    row.appendChild(octCell)

    const novCell = document.createElement("td");
    novCell.textContent = person.nov;
    row.appendChild(novCell)

    const decCell = document.createElement("td");
    decCell.textContent = person.dec;
    row.appendChild(decCell)

    const totalCell = document.createElement("td");
    totalCell.textContent = person.total;
    row.appendChild(totalCell)

    const phCell = document.createElement("td");
    phCell.textContent = person.ph;
    row.appendChild(phCell)


    table.appendChild(row)

})