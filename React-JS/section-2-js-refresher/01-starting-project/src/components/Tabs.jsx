export default function Tabs({children, buttons, buttonsContaner = 'menu'}){
    const ButtonsContainer = buttonsContaner
    return(
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>
    )
}