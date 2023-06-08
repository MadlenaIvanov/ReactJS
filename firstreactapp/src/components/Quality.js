import ServiceCard from "./ServiceCard";

export default function Quality() {
    return (
        <div className="quality">
        <div className="container">
           <div className="row">
              <div className="col-md-12">
                 <div className="titlepage text_align_center">
                    <h2>Quality OF Honey For sale</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but There are many variations of passages of Lorem Ipsum available, but 
                    </p>
                 </div>
              </div>
           </div>
           <div className="row">

            <ServiceCard 
               title="SEO Consultancy"
               description="Lorem"
               imageUrl="images/quality1.png"
            />

            <ServiceCard 
               title="Card Two"
               description="Text"
               imageUrl="images/quality7.png"
            />
 
           </div>
        </div>
     </div>
    );
}