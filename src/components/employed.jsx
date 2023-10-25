
const EmployeeId = ({name, phone, email, image,position}) => {
    //   const { name, job, image } = props;
      return (
        <div className="card">
            <div className="cardImg">
                <img src= {image} alt="profile pics" />
            </div>
            <div className="text">
            <h2 className="title">{name}</h2>
            <h4>{position}</h4>
            <div className="phone">
                <i className="fa fa-phone"></i>
                <p>{phone}</p>
            </div>
            <div className="mail">
                <i className="fa fa-envelope"></i>
                <p>{email}</p>
            </div>
          </div>
        </div>
      );
    };

    export default EmployeeId
    