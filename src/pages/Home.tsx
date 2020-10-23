import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

function formatMoney(amount:number){
  return '$'+amount.toFixed(2);
}
const Home: React.FC = () => {
  const balance =123; 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MUVYE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        Your balance is {balance}
      </IonContent>
    </IonPage>
  );
};

export default Home;
