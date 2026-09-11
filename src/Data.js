export const members=[
    {
        id: 1,
        memberName:"Mahima",
        domain:"xyz.com",
        phone: "+91 1234567890",
        plan: "Silver",
        billing:"Quarterly" ,
        paymentStatus:"PAID",
        status:"ACTIVE",
        amount:"2500",
        paymentHistory:[
            {id:1 ,date: "20-09-2025",ammount:2500 ,period:"Quarterly", status: "PAID"} ,
            {id:2 ,date: "20-12-2025",ammount:2500 ,period:"Quarterly",status:"UNPAID"} ,

            {id:3 ,date:"20-04-2026",ammount:3000,period:"Quarterly",status:"PAID"}
        ]

        
    },
    {
        id: 1,
        memberName:"Ram",
        domain:"gig.ac.in",
        phone: "+91 3214598670",
        plan: "Platinum",
        billing:"Yearly" ,
        paymentStatus:"PAID",
        status:"ACTIVE",
        amount:"30000",
        paymentHistory:[
            {id:1 ,date: "23-04-2023",ammount:29000 ,period:"Yearly", status: "PAID"} ,
            {id:2 ,date: "23-04-2024",ammount:29000 ,period:"Yearly",status:"PAID"} ,

            {id:3 ,date:"24-04-2026",ammount:30000,period:"Yearly",status:"PAID"}
        ]

        
    },
    {
        id: 22,
        memberName:"kiran",
        domain:"hhgz.org",
        phone:"+105 2137090994",
        plan:"Gold",
        billing:"Monthly",
        paymentStatus:"UNPAID",
        status:"INACTIVE",
        amount:"1500",
        paymentHistory:[
            {id:1,date:"02-04-2025",ammount:1500,period:"Monthly",status:"ACTIVE"},
            {id:4,date:"02-05-2026",ammount:1500,period:"Monthly",status:"INACTIVE"},


        ]

        
    }
]