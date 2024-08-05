function Comment({img, name, text, date}){

    return(
        <>
        <div className="item">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{text}</p>
            <h4>{date}</h4>
        </div>
        </>
    )

}

export default Comment