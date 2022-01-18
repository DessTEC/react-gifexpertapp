
export const GifGridItem = ({id, title, url}) => {
    return (
        // Se usa className porque es un archivo de js, class es reservada, entonces para que se interprete en CSS se pone eso
        <div className="card animate__animated animate__fadeIn">
            <img src = {url} alt = {title}></img>
            <p>{title}</p>
        </div>
    )
}
