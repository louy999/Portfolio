import { Project } from "../data";
import { Link } from "react-router-dom";
import ButtonClick from "../button";

const Projects = () => {
  return (
    <>
      <section id="projects" className="container projects">
        <h1 className="animate__pulse animate__slow animate__infinite">
          My Projects
        </h1>
        <div className="content">
          {Project.map((p: any) => (
            <div className="card" key={p.id}>
              <img src={p.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <Link to={`${p.url2}`} target="_blank" className="button-64">
                  <ButtonClick text="To Code" />
                </Link>
                {p.url3 !== "" ? (
                  <Link to={`${p.url3}`} target="_blank" className="button-64">
                    <ButtonClick text="Open Site" />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
