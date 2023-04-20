import Guillaume from '../assets/img/Milleret_Guillaume.png';

export default function Accueil() {
  return (
    <div>
      <main className='paragrapheAccueil'>
          <img src={Guillaume} alt="Ma personne" />
          <p>
          Je suis un ecologue et geographe qui cherche a developper des outils d'aide a la decision dans l'urbanisme, la gestion d'espaces paysagers et/ou riches en biodiversite. Le tout en usant de technologies repandues et inclusives. C'est pourquoi je veux mettre mon expertise dans des applications native et web
          </p>
      </main>
    </div>
  );
}