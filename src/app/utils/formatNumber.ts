export const FormatNumber = (number:number | string) => {
    if(typeof number === "string"){
        return number?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}