import { SkillType } from "../../types";

const SkillContainer = (props: any) => {
    const data = props.data as SkillType;
    return (
      <div className="myskills" key={data._id}>
        <div className="skill-info">
          <div className="skill-img">
            <img src={data.logo_file} alt="" />
          </div>
          <h3>{data.name}</h3>
        </div>
      </div>
    )
}

export default SkillContainer