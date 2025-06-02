    export const handleClick = (rota, navigate) => {
        console.log("chamou")
        navigate(`/${rota}`)
        console.log(`/${rota}`)
        navigate(0)
    }