import SkinModele from "@/components/site/SkinModele";

const PX = 6.2;

const JOUEURS = [
  {
    cle: "toto",
    pseudo: "toto_le_rigolo",
    skin: "/nationsglory/toto_le_rigolo.png",
    classe: "ng-trio__gauche",
  },
  {
    cle: "seyf",
    pseudo: "Seyf123",
    skin: "/nationsglory/Seyf123-yeux.png",
    classe: "ng-trio__centre",
  },
  {
    cle: "panda",
    pseudo: "unpandakawaii",
    skin: "/nationsglory/unpandakawaii.png",
    classe: "ng-trio__droite",
  },
];

export default function SkinTrio() {
  return (
    <div className="ng-trio">
      {JOUEURS.map((j) => (
        <figure key={j.cle} className={`ng-trio__joueur ${j.classe}`}>
          <div className="ng-trio__scene" style={{ width: 16 * PX, height: 32 * PX }}>
            <div className="ng-trio__buste">
              <SkinModele px={PX} prefixe={j.classe.replace("ng-trio__", "ng-trio-")} skin={j.skin} />
            </div>
          </div>
          <figcaption className="ng-trio__pseudo">{j.pseudo}</figcaption>
        </figure>
      ))}
    </div>
  );
}
