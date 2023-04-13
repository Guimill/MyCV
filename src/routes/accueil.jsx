import Guillaume from '../assets/img/Milleret_Guillaume.png';

export default function Accueil() {
  return (
    <div>
      <main className='paragrapheAccueil'>
          <img src={Guillaume} alt="Ma personne" />
          <p>
          Je suis un écologue et géographe qui cherche à développer des outils d'aide à la décision dans l'urbanisme, la gestion d'espaces paysagers et/ou riches en biodiversité. Le tout en usant de technologies répandues et inclusives. C'est pourquoi je veux mettre mon expertise dans des applications native et web
          </p>
      </main>
    </div>
  );
}