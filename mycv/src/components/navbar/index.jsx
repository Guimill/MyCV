import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [buttonFormationDisabled, setButtonFormationDisabled] = useState(false);
  const [buttonExperiencesDisabled, setButtonExperiencesDisabled] = useState(false);
  const [ButtonRealisationDisabled, setButtonRealisationDisabled] = useState(false);

    return (
            <div class="navbar">
              <Link to={'formation'}>
              <button disabled={buttonFormationDisabled} 
                  onClick={() => { setButtonFormationDisabled(true); setButtonExperiencesDisabled(false); setButtonRealisationDisabled(false)}}>
                    Formation
              </button></Link>
              <Link to={'experiences'}>
              <button disabled={buttonExperiencesDisabled} 
                  onClick={() => { setButtonExperiencesDisabled(true); setButtonRealisationDisabled(false); setButtonFormationDisabled(false)}}>
                    Experiences
              </button></Link>
              <Link to={'realisations'}>
              <button disabled={ButtonRealisationDisabled} 
                  onClick={() => { setButtonRealisationDisabled(true); setButtonExperiencesDisabled(false); setButtonFormationDisabled(false); }}>
                    Realisations
              </button></Link>
            </div>
    );
  }