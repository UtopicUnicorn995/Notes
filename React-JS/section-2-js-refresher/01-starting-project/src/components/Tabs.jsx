export default function Tabs({children, ButtonsContainer, buttons}){
    return(
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}