import { format } from "date-fns";
import { fr } from "date-fns/locale";


export const formattedDate = (date: Date) => {
    return format(new Date(date), "dd MMM yyyy", {
        locale: fr,
    });
} 