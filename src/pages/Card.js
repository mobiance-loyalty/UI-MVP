

export default function Card({src , title, text}) {
  return (
    <div className="col-12 col-md-12 col-lg-3 col-sm-12">
    <div className="card">
      <img src={src} alt="logo" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button type="button" className="btn  btn-outline-primary me-2">Earn</button>
            <button type="button" className="btn  btn-outline-primary">Read more </button>
        </div>
    </div>
  
</div>

  )
}
