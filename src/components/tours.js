import { tours } from '../data';
import Title from './title';

export const Tours = () => {
    return (
        <section className="section" id="tours">
        <Title title='featured' subtitle='tours'/>
  
        <div className="section-center featured-center">
            {tours.map((tour)=>{
                return (
                    <article className="tour-card">
                        <div className="tour-img-container">
                        <img src={tour.href} className="tour-img" alt="" />
                        <p className="tour-date">{tour.date}</p>
                        </div>
                        <div className="tour-info">
                        <div className="tour-title">
                            <h4>{tour.title}</h4>
                        </div>
                        <p>
                        {tour.text}
                        </p>
                        <div className="tour-footer">
                            <p>
                            <span><i className={tour.map}></i></span>{tour.place}
                            </p>
                            <p>{tour.days}</p>
                            <p>{tour.price}</p>
                         </div>
                     </div>
                    </article>
                );
            })}
        </div>
      </section>
    );
}

export default Tours;