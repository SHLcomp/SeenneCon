import "./Testimonials.scss";
import test from "../../data/testimonial.js";

const Testimonials = () => {
    return (
        <section className="testimonials">

            <div className="heading">

                    <span className="eyebrow">Testimonials</span>

                    <h1 className="title">
                        What Our Clients
                        <br />
                        Say
                    </h1>

                <p>
                    Hear from clients who have experienced our commitment to
                    quality, precision, and reliable project solutions.
                </p>

            </div>


            <div className="testimonials-grid">

                {test.map((item, index) => (
                    <div className="testimonial" key={index}>

                        <div className="stars">
                            {"★".repeat(item.stars)}
                        </div>

                        <p className="message">
                            {item.msg}
                        </p>

                        <div className="client">

                            <div className="client-info">

                                {item.img ? (
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                    />
                                ) : (
                                    <div className="client-placeholder">
                                        {item.name.charAt(0)}
                                    </div>
                                )}

                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.clientPosition}</span>
                                </div>

                            </div>

                            <span className="quote">99</span>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Testimonials;