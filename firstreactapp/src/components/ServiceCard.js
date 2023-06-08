export default function ServiceCard({
    imageUrl,
    title,
    description
}) {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="quality-box ">
            <h5>{title}</h5>
            <p>{description}</p>
           <figure><img src={imageUrl} alt="#"/></figure>
        </div>
     </div>
    )
}