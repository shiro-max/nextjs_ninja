import {notFound} from "next/navigation"

export const dynamicPrams = true

async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()
    return tickets.map((ticket)=>({
        id: ticket.id
    }))
}
async function get_ticket(id){
    //imitate delay
    await new Promise(resolve=>setTimeout(resolve,2000))

    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
        next:{
            revalidate: 60
        }
    })
    if (!res.ok){
        notFound()
    }

    // return ကို json နဲ့ ပြန်ဖို့မမေ့ပါနဲ့
    return res.json()
}

export default async function TicketDetail({ params }) {
    const ticket = await get_ticket(params.id)
    return (
        <main>
            <nav>
                <h3>Ticket detail</h3>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
