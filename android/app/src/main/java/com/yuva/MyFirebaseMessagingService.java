package com.yuva;

import com.freshchat.consumer.sdk.Freshchat;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (Freshchat.isFreshchatNotification(remoteMessage)) {
            Freshchat.handleFcmMessage(this, remoteMessage);
        }
    }
}
