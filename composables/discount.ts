export const useDiscount = () => {
    const percenTage = (total : number , percent : number) => {
        return (total - (total * percent / 100))
    }
    return { percenTage }
}