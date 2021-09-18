const InlineStyles = {}

InlineStyles.setParagraphStyleToTableImage = (item) => {
    return {
        marginLeft: item ? "91px" : "0",
        marginTop: item ? "150px" : "0",
        transform: item ? 'translateX(30px)' : 'translateX(-100vh)',
        transition: "transform 1s",
    }
}
InlineStyles.setStyleToTableImage = (item) => {
    return {
        transform: item ? 'translateX(0)' : 'translateX(-100vh)',
        transition: "transform 1s",
    }

}
export default InlineStyles;
