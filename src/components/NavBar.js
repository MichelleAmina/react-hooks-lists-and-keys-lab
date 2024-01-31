import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkeEl = links.map((link) => {
    return(
      <a key={link} href={"#"+link}>{link}</a>
    );
  })

  return (
    <div>
      <nav>
        {linkeEl}
      </nav>
    </div>

  );
}

export default NavBar;
