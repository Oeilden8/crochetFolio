import './SkillCard.css';

interface Skill {
  id: string;
  title: string;
  skillList: string[];
}

function SkillCard(props: { skills: Skill[] }) {
  return (
    <div className='skillContainer'>
      {props.skills.map((skill) => (
        <div className={`skillTest ${skill.id}`} key={skill.id}>
          <section className='skill'>
            <h2>{skill.title}</h2>
            <ul>
              {skill.skillList.map((skillName) => (
                <li key={skillName}>{skillName}</li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
