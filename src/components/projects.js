import projectImg1 from "../assets/Business Plan-amico.png";
export default function Project() {
  return (
    <section className="flex  flex-col bg-primary text-white py-20 px-5 justify-center">
      <div className="w-full">
        <div className="flex flex-col px-10 py-10" >
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
          <div className="relative">
            <img className="h-[200px] w-[500]" src={projectImg1}></img>
            <div className="project-desc">
              <p className="project-desc-p">E-commerce </p>
              <p className="project-desc-p1">
                Worked as the lead tester for an e-commerce platform designed to
                streamline online shopping experiences.
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500]" src={projectImg1}></img>
            <div className="project-desc">
              <p className="project-desc-p">Mobile App Usability </p>
              <p className="project-desc-p1">
                Conducted usability testing for a mobile app designed to help
                users track their fitness goals and monitor progress.
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500]" src={projectImg1}></img>
            <div className="project-desc">
              <p className="project-desc-p">Railway Project</p>
              <p className="project-desc-p1">
                Participated in the quality assurance process for a healthcare
                management system intended to streamline patient records, and
                system reliability.
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500]" src={projectImg1}></img>
            <div className="project-desc">
              <p className="project-desc-p">Ticket Booking</p>
              <p className="project-desc-p1">
                Led security testing for a social media platform aimed at
                protecting user data and preventing unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
