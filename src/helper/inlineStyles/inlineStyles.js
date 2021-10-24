const InlineStyles = {}

InlineStyles.setParagraphStyleToTableImage = (item) => {
    return {
        marginLeft: item ? "91px" : "0",
        marginTop: item ? "60px" : "0",
        transform: item ? 'translateX(30px)' : 'translateX(-100vh)',
        transition: "transform 1s",
    }
}
InlineStyles.setStyleToTableImage = (item) => {
    return {
        transform: item ? 'translate3d(20px,10px,50px) rotate(-5deg) ':'translate3d(-120px,-150px,-50px)',
        transition: "transform 3s",
    }
}
InlineStyles.setStyleToImgCardNews=(item)=>{
    return{
        transform: `translateX(${item * 0.1}px)`,
    }
}
export default InlineStyles;
