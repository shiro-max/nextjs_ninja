import Link from "next/link"

async function get_tickets(){
    const res = await fetch("http://localhost:4000/tickets",{
        next : {
            revalidate: 0
        }
    })
    return res.json()
}

export default async function TicketList() {
    //imitate delay
    await new Promise(resolve=>setTimeout(resolve,2000))

    const tickets = await get_tickets()
    return (
        <>
            {tickets.map((ticket)=>(
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0,200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets === 0 && (
                <p className=" text-center">There are no open tickets.Bro!</p>
            )}
        </>
    )
}
