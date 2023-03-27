import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {

  const [buttonFormationDisabled, setButtonFormationDisabled] = useState(false);
  const [buttonExperiencesDisabled, setButtonExperiencesDisabled] = useState(false);
  const [ButtonRealisationDisabled, setButtonRealisationDisabled] = useState(false);

    return (
            <div class="navbar">
              <button disabled={buttonFormationDisabled} 
                  onClick={() => { setButtonFormationDisabled(true); setButtonExperiencesDisabled(false); setButtonRealisationDisabled(false)}}>
                    Formation
              </button>
              <button disabled={buttonExperiencesDisabled} 
                  onClick={() => { setButtonExperiencesDisabled(true); setButtonRealisationDisabled(false); setButtonFormationDisabled(false)}}>
                    Experiences
              </button>
              <button disabled={ButtonRealisationDisabled} 
                  onClick={() => { setButtonRealisationDisabled(true); setButtonExperiencesDisabled(false); setButtonFormationDisabled(false); LinkTo}}>
                    Realisations
              </button>
            </div>
    );
  }

export default Navbar;