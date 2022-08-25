import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Comeback and Rescue</IonCardSubtitle>
            <IonCardTitle>Gohan (Teen)</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          ATK & DEF +100%; ATK & DEF +20% at start of each turn 
          (up to 58%); launches an additional attack that has a 
          high chance of becoming a Super Attack[2] (once only) 
          and all attacks become critical hits for 1 turn from 
          start of turn; plus an additional ATK & DEF +20% with 
          each attack performed (up to 58%); plus an additional 
          ATK & DEF +20% with each Super Attack performed (up to 58%)
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            {/* <IonIcon icon={pin} slot="start" /> */}
            <IonLabel>Leader Skill</IonLabel>
            {/* <IonButton fill="outline" slot="end">View</IonButton> */}
          </IonItem>

          <IonCardContent>
              "Bond of Master and Disciple" Category Ki +2 and HP, ATK & DEF +30%
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            {/* <IonIcon icon={pin} slot="start" /> */}
            <IonLabel>Links</IonLabel>
            {/* <IonButton fill="outline" slot="end">View</IonButton> */}
          </IonItem>

          <IonCardContent>
          Brainiacs - Saiyan Warrior Race - The Saiyan Lineage - All in the Family - Prepared for Battle
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            {/* <IonIcon icon={pin} slot="start" /> */}
            <IonLabel>Categories</IonLabel>
            {/* <IonButton fill="outline" slot="end">View</IonButton> */}
          </IonItem>

          <IonCardContent>
          Hybrid Saiyans - Movie Heroes - Goku's Family - Siblings' Bond - Bond of Master and Disciple - Bond of Parent and Child
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
