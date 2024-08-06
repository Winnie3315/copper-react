function Option({ img, title, text }) {
    return (
      <div className="item">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
        <h5>Читать больше</h5>
      </div>
    );
  }
  

export default Option