
import Link from "next/link";
import Cta from "./components/Cta";
import Services from "./partials/Services";

function Pricing({ data,services }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center text-3xl font-bold">{title}</h1>
          <div className="grid grid-cols-3 gap-8 max-w-[100vw] -mt-20 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`my-10
                `}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4 className="text-xl font-bold">{plan.title}</h4>
                  <div className="mt-5">
                    <img className="w-[200px] h-[200px] m-auto text-5xl rounded-full text-dark border-2 border-red-200" src={plan.image}></img>
                  </div>
                  <h5 className="mt-2 font-semi-bold text-md">
                    {plan.subtitle}
                  </h5>
                  <p className="text-center my-4 line-clamp-4">
                    {plan.features.join("")}
                  </p>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    }`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section flex px-[20%] bg-theme-white w-full h-[50vh] bg-white border-2 border-y-gray-200 ">
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">Shiv Sena (UBT)</h2>
          <p>Formed after 2022 split in Shiv SenaFocuses on Hindutva and regional issues in Maharashtra.A crucial player in the 2024 state elections.</p>
          <br/>
          <p>Formed after 2022 split in Shiv SenaFocuses on Hindutva and regional issues in Maharashtra.A crucial player in the 2024 state elections.</p>
          <a href="#" >Link</a>
        </section>
        <section className="w-[40%] ml-[20%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1727982342/Screenshot_2024-10-04_003445_fmla9d.png"
            className="w-[200px] h-[200px]" />
        </section>
      </section>

      <section className="section flex px-[20%] bg-theme-white w-full h-[50vh] bg-white border-2 border-y-gray-200 ">
        <section className="w-[40%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1727982342/Screenshot_2024-10-04_003445_fmla9d.png"
            className="w-[200px] h-[200px]" />
        </section>
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">Shiv Sena (UBT)</h2>
          <p>Formed after 2022 split in Shiv SenaFocuses on Hindutva and regional issues in Maharashtra.A crucial player in the 2024 state elections.</p>
          <br/>
          <p>Formed after 2022 split in Shiv SenaFocuses on Hindutva and regional issues in Maharashtra.A crucial player in the 2024 state elections.</p>
          <a href="#" >Link</a>
        </section>
      </section>


      <Cta cta={call_to_action} />
    </>
  );
}



export default Pricing;
