interface TicketInfo {
    // id: number | string,
    title: string,
    description: string,
    call_number: string,
    website: string,
    status: string,
    // created_at: Date,
    // updated_at: Date 
}

interface BaseTicket {
    id: number | string,
    created_at: Date,
    updated_at: Date 
}