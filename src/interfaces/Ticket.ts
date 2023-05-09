interface TicketInfo {
    title: string,
    description: string,
    call_number: string,
    website: string,
    status: string,

}

interface BaseTicket {
    id: number | string,
    created_at: Date,
    updated_at: Date 
}