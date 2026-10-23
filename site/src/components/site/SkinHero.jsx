import SkinModele from "@/components/site/SkinModele";

const PX = 12.5;

export default function SkinHero() {
  return (
    <div className="ng-heros3d" style={{ width: 16 * PX, height: 32 * PX }}>
      <div className="ng-heros3d__buste">
        <SkinModele px={PX} prefixe="ng-heros3d" />
      </div>
    </div>
  );
}
