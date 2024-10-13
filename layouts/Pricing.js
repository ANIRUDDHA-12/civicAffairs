
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

      <section className="section flex px-[20%] bg-theme-white w-full h-[65vh] bg-white border-2 border-y-gray-200 bg-[#F6EDED] ">
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">Shiv Sena (UBT)</h2>
          <p>Shiv Sena (Uddhav Balasaheb Thackeray), led by Uddhav Thackeray, promotes Marathi pride, Hindutva, and Maharashtra's cultural and economic interests. After splitting from the BJP post-2019 elections, Uddhav formed an alliance with Congress and NCP, becoming Chief Minister..</p>
          <br/>
          <p>In 2022, Eknath Shinde led a faction away, sparking a legal dispute over the party's name and symbol. Despite this, Uddhav's faction remains focused on urban development, employment, and protecting Marathi interests while rebuilding its political influence.</p>
          <a href="https://en.wikipedia.org/wiki/Shiv_Sena_(UBT)" target="blank" className="text-red-400"  >Check it out</a>
        </section>
        <section className="w-[40%] ml-[20%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1728819938/Screenshot_2024-10-13_171519_eclgga.png"
            className="w-[700px] h-[250px]" />
        </section>
      </section>

      <section className="section flex px-[20%] gap-10 bg-theme-white w-full h-[65vh] bg-white border-2 border-y-gray-200 ">
        <section className="w-[40%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1728820478/Screenshot_2024-10-13_172419_aznu1f.png"
            className="w-[700px] h-[250px]" />
        </section>
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">NCP (SP)</h2>
          <p>The Nationalist Congress Party (NCP), led by Sharad Pawar, champions a vision of secularism, social justice, and inclusive growth in Maharashtra. Founded in 1999, the NCP emerged from the Congress party and has been a significant player in state politics, advocating for farmer's rights, minority welfare, and economic development.</p>
          <br/>
          <p>Despite facing internal challenges, including leadership disputes, Sharad Pawar's faction remains committed to promoting policies that focus on rural development, social equity, and maintaining a secular political framework in Maharashtra. The party aims to reinforce its position through strategic alliances and by addressing key issues affecting the state's populace.</p>
          <a href="https://en.wikipedia.org/wiki/Nationalist_Congress_Party_%E2%80%93_Sharadchandra_Pawar" className="text-red-400">Check it out</a>
        </section>
      </section>

      <section className="section flex px-[20%] bg-theme-white w-full h-[68vh] bg-white border-2 border-y-gray-200 bg-[#F6EDED] ">
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">Indian National Congress</h2>
          <p>The Indian National Congress (INC), one of India’s oldest political parties, aims to promote secularism, social justice, and economic development. With a rich history in the freedom struggle, the Congress party seeks to represent diverse interests, focusing on empowering marginalized communities, women's rights, and sustainable development in Maharashtra.</p>
          <br/>
          <p>In recent years, the Congress has faced electoral challenges but continues to form alliances with regional parties to counter the rise of the BJP. The party is dedicated to reviving its grassroots connect and addressing key issues such as unemployment, inflation, and social harmony, striving to regain its influence in Maharashtra’s political landscape.</p>
          <a href="https://en.wikipedia.org/wiki/Indian_National_Congress#:~:text=The%20Indian%20National%20Congress%20(INC,Empire%20in%20Asia%20and%20Africa." target="blank" className="text-red-400">Check it out</a>
        </section>
        <section className="w-[40%] ml-[20%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1728821183/Screenshot_2024-10-13_173558_wstycp.png"
            className="w-[700px] h-[250px]" />
        </section>
      </section>

      <section className="section flex px-[20%] gap-10 bg-theme-white w-full h-[65vh] bg-white border-2 border-y-gray-200 ">
        <section className="w-[40%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1728821583/Screenshot_2024-10-13_174209_ohn2ik.png"
            className="w-[700px] h-[250px]" />
        </section>
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">BJP</h2>
          <p>The Bharatiya Janata Party (BJP), led by prominent leaders like Devendra Fadnavis in Maharashtra, advocates for Hindutva, nationalism, and economic development. As one of India's leading political parties, the BJP focuses on promoting infrastructure development, employment generation, and investment in key sectors, aiming for a strong and self-reliant India..</p>
          <br/>
          <p>Since forming the government in Maharashtra in 2019, the BJP has emphasized its vision of good governance and economic growth. However, it faces criticism for its policies and handling of social issues. The party continues to seek voter support by showcasing its achievements and aligning with regional aspirations while aiming to consolidate its power in the state.</p>
          <a href="https://en.wikipedia.org/wiki/Bharatiya_Janata_Party" className="text-red-400">Check it out</a>
        </section>
      </section>

      <section className="section flex px-[20%] bg-theme-white w-full h-[66vh] bg-white border-2 border-y-gray-200 bg-[#F6EDED] ">
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">Shiv Sena (Eknath Shinde)</h2>
          <p>Shiv Sena (Eknath Shinde), led by Eknath Shinde, emerged as a splinter faction of the original Shiv Sena, advocating for Hindutva while prioritizing infrastructure development and economic growth in Maharashtra. The faction gained prominence after its split from the Uddhav Thackeray-led Shiv Sena in 2022, with Shinde aligning with the Bharatiya Janata Party (BJP) to form a government, emphasizing governance and administrative efficiency.</p>
          <br/>
          <p>Despite facing criticism for its controversial rise to power, Shinde’s faction remains focused on key issues like urban development, job creation.By fostering strong alliances the Shinde-led Shiv Sena aims to solidify its position in Maharashtra’s political landscape.</p>
          <a href="https://en.wikipedia.org/wiki/Shiv_Sena_(UBT)" target="blank" className="text-red-400"  >Check it out</a>
        </section>
        <section className="w-[40%] ml-[20%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1728821962/Screenshot_2024-10-13_174852_oijff4.png"
            className="w-[700px] h-[250px]" />
        </section>
      </section>

      <section className="section flex px-[20%] gap-10 bg-theme-white w-full h-[65vh] bg-white border-2 border-y-gray-200 ">
        <section className="w-[40%]">
          <img src="https://res.cloudinary.com/deqeu0xv1/image/upload/v1728822254/Screenshot_2024-10-13_175320_ac5t8c.png"
            className="w-[700px] h-[250px]" />
        </section>
        <section className="w-[60%]">
          <h2 className="font-bold text-xl">NCP (AP)</h2>
          <p>The Nationalist Congress Party (NCP), led by Ajit Pawar, focuses on secularism, social justice, and regional development in Maharashtra. Established in 1999 as a breakaway from the Congress party, the NCP aims to represent the interests of farmers, minorities, and backward classes, emphasizing economic growth and social equity.</p>
          <br/>
          <p>In 2022, the NCP witnessed a split when Ajit Pawar joined hands with the BJP in a controversial alliance, which raised questions about its political integrity. Despite internal challenges, the party continues to advocate for policies that promote agricultural welfare, rural development, and sustainable growth, striving to maintain its influence in Maharashtra's political landscape.</p>
          <a href="https://en.wikipedia.org/wiki/Nationalist_Congress_Party_(Ajit_Pawar_Faction)" className="text-red-400">Check it out</a>
        </section>
      </section>



      {/* <Cta cta={call_to_action} /> */}
    </>
  );
}



export default Pricing;
