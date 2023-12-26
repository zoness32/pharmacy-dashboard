import {Visit} from "@prisma/client";
import dayjs from "dayjs";

interface VisitTableProps {
    visits: Array<Visit>;
}

export default async function VisitTable({visits}: VisitTableProps) {
    return (
        <div className="flex flex-col">
            {
                visits.map(visit => {
                    return <span>{dayjs(visit.visit_time).format('MM/DD/YYYY')}</span>
                })
            }
        </div>
    )
}