import { skills } from "../data";
import BackTools from "../backTools/backTools";
const Skills = () => {
  return (
    <section id="skills" className="container skills">
      <h1>My Skills</h1>
      <div className="content">
        {skills.map((skill: any) => (
          <div className={`${skill.road}`} key={skill.id}>
            <h2 className="animate__animated animate__pulse animate__slow animate__infinite">
              {skill.road}
            </h2>
            <div className="icons">
              {Object.values(skill.icons).map((icon: any) => (
                <>
                  <img src={icon.url} key={icon.id} alt="" />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BackTools />
    </section>
  );
};

export default Skills;
