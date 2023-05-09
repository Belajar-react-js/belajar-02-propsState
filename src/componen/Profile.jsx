import { useState } from "react";

import img from "../assets/aa.png";

function Profile() {
  const [name, setName] = useState("Tara");
  const [age, setAge] = useState(17);

  return (
    <div>
      <img src={img} alt="" width={200} />
      <h2 onClick={() => setName("Kharisma")}>Nama : {name}</h2>
      <h2>Umur : {age}</h2>
    </div>
  );
}

export default Profile;
