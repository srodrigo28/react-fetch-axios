/* exemplo 1 

const formatDate = ( date ) => {
        const dateFormatted = new Date(date);
        const day = dateFormatted.getDate();
        const month = dateFormatted.getMonth() + 1;
        const year = dateFormatted.getFullYear();

        return `${day}/${month}/${year}`;
}

*/

/* exemplo 2 */
const formatDate = ( date ) => {
        const dateFormatted = new Date(date);
      
        /* Pegando Dia PERFECT */
        const day = dateFormatted.getDate() > 9 
        ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`
        
        /* Pegando Mês */
        const month = dateFormatted.getMonth()+1 > 9 
        ? dateFormatted.getMonth()+1 : `0${dateFormatted.getMonth()+1}`;

        /* Pegando Ano */
        const year = dateFormatted.getFullYear();

        return `${day}/${month}/${year}`;
}

export default formatDate;