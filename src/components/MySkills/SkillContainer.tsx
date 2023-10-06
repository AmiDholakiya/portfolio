import Image from "../../assets/javascript.svg"

const SkillContainer = (data:any) => {
    data = data.data;
    return (
      <div className="myskills" key={data.id}>
        <div className="skill-info">
          <div className="skill-img">
            <img src={Image} alt="" />
          </div>
          <h3>{data.name}</h3>
        </div>
      </div>
    )
}

export default SkillContainer