import EmployeeId from "./components/employed"
import "./app.css"
const App = () => {
  const employees = [
    {
      fname: "John Doe",
      position: "CEO",
      image:"https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph",
      phone: "08035401292",
      email: "johndoe@gmail.com",
    },
    {
      fname: "Ramsey Noah",
      position: "Chairman",
      image: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=",
      phone: "08062931234",
      email: "Noahramsey@yahoo.com",
    },
    {
      fname: "Eddy Prince",
      position: "CMO",
      image:  "https://c.pxhere.com/photos/a6/37/portrait_mamiya_film_kodak_medium_format_portra_k_z_pform_tum-192094.jpg!d",
      phone: "08081098697",
      email: "Eddyprince@gmail.com",
    },
    {
      fname: "Kehinde Taiwo",
      position: "CFO",
      image:  "https://www.fashionhombre.com/wp-content/uploads/2020/11/Fresh-Short-Hairstyles-For-Black-Men-28.jpg",
      phone: "08062931543",
      email: "kehindetaiwo@yahoo.com",
    },
    {
      fname: "Praise Jordan",
      position: "CTO",
      image:  "https://costar.brightspotcdn.com/dims4/default/b973f54/2147483647/strip/true/crop/985x655+0+0/resize/985x655!/quality/100/?url=http:%2F%2Fcostar-brightspot.s3.amazonaws.com%2F47%2F7f%2Fcf30db4f4116bd9835d6436df95c%2Famy-aznar.JPG",
      phone: "08023456721",
      email: "Praisejordan@gmail.com",
    },
  ];

  return (
    <div>
      {employees.map(({fname, position, image, phone, email}, index) => (
        <EmployeeId
        key={index}
        name={fname}
        position={position}
        image={image}
        phone={phone}
        email={email}
        />
      ))}
    </div>
  )
}

export default App