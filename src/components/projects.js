import projectImg1 from "../assets/Work chat-amico.png";
import projectImg2 from "../assets/Projections-rafiki.png";
import projectImg3 from "../assets/Work in progress-rafiki.png";
import projectImg4 from "../assets/Work in progress-amico.png";
export default function Project() {
  const config = {
    projects: [
      {
        image: projectImg1,
        title: "E-commerce",
        desc: "Participated in the quality assurance process for a healthcaremanagement system intended to  records, and system reliability.",
        link: "",
      },
      {
        image: projectImg2,
        title: "Mobile App Usability ",
        desc: "Conducted usability testing for a mobile app designed to help users track their fitness goals , system intended to streamline and monitor progress.",
        link: "https:github.com/barthalomena",
      },
      {
        image: projectImg3,
        title: "Railway Project",
        desc: "Participated in the quality assurance process for a healthcare management system intended to streamline andsystem reliability.",
        link: "",
      },
      {
        image: projectImg4,
        title: "Ticket Booking",
        desc: "Led security testing for a social media platform aimed at protecting user data, system intended to streamline and preventing unauthorized access.",
        link: "",
      },
    ],
  };
  return (
    <section
      className="flex  flex-col bg-primary text-white py-20 px-5 justify-center"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-10">
          <h1 className="text-4xl  border-b-4  border-borderColor mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            Developed an automated regression testing framework for a web
            application used in the finance sector. The goal was to streamline
            the testing process, improve test coverage, and reduce the time
            required for regression tests.
          </p>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex px-10 md:flex-row flex-col gap-5 ">
          {config.projects.map((e) => (
            <div className="relative  ">
              <img className="h-[200px] pr-10  w-[500]" src={e.image}></img>
              <div className="project-desc">
                <p className="project-desc-p">{e.title} </p>
                <p className="project-desc-p1">{e.desc}</p>
                <div className="flex justify-center">
                <a className='btn' target="_blank" href={e.link}>View project</a>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
