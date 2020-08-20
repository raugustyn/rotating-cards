import React, {Component} from 'react';
import RotatingCard from "../components/RotatingCard/RotatingCard"

class RotatingCardView extends Component {
    render() {
        return (
            <div>
                <h1>Rotating Card View</h1>
                <p>
                    Rotating card is a card, which has two sides: front and back.
                </p>
                <RotatingCard
                    caption="Odsun náspu a zářezu od cesty."
                    description="Odsun náspu a zářezu okolo cesty tak, aby byl pokud možno zachován tvar a značky jednotlivých prvků mezi sebou měly dostatečnou světlost."
                    details={
                        <div>
                            <p>V části průběhu liniového prvku kategorie Komunikace dochází k souběžnému, nesymetrickému
                                průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf.
                                Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací
                                nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly
                                nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty
                                blíže, než je povolený limit.</p>
                            <p>Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu
                                liniových objektů terénního reliéfu - vrstevnice.</p>
                        </div>}
                    backgroundImageSrc="http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png"
                />
            </div>
        );
    }
}

export default RotatingCardView;
