import Guillaume from '../assets/img/Milleret_Guillaume.png';

export default function Accueil() {
  return (
    <div>
      <main className='paragrapheAccueil'>
          <img src={Guillaume} alt="Ma personne" />
          <p>
            Je suis un ecologue et geographe qui cherche a developper des outils
            d'aide a la decision dans l'urbanisme, dans la gestion des espaces riches en biodiversite et grand paysage.
            Le tout en usant de technologies repandu et inclusives, c'est pourquoi je veux mettre mon expertise dans des applications
            native et web
          </p>
      </main>
    </div>
  );
}