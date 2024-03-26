import { Contexts } from "../Context";

const Faq = () => {
  const { classs, Classlist, classsone, classstwo, Classlistone, Classlisttwo } = Contexts();
  return (
    <div className="Faq">
      <div className="faq">
        <h3>FAQ</h3>
        <h1>Frequently Asked Questions</h1>
        <p className="head-p">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
        <div className="show-info">
          <div className="show-one">
            <div className={classs? "icon-text show-bg" : "icon-text"} onClick={Classlist}>
              <h3>1. What is special about comparing rental car deals?</h3>
              <h4>⋗</h4>
            </div>
            <p className={classs ? "text-show active" : "text-show"}>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
          <div className="show-one">
            <div className={classsone? "icon-text show-bg" : "icon-text"} onClick={Classlistone}>
              <h3>1. What is special about comparing rental car deals?</h3>
              <h4>⋗</h4>
            </div>

            <p className={classsone ? "text-show active" : "text-show"}>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
          <div className="show-one">
            <div className={classstwo? "icon-text show-bg" : "icon-text"} onClick={Classlisttwo}>
              <h3>1. What is special about comparing rental moto deals?</h3>
              <h4>⋗</h4>
            </div>{" "}
            <p className={classstwo ? "text-show active" : "text-show"}>
              Comparing rental moto deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              moto models. You can find moto rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
