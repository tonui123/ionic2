import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Cart: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> Cart </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                ตะกร้าสินค้า

      </IonContent>
        </IonPage>
    );
};

export default Cart;