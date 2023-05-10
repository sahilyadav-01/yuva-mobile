package com.yuva;

import androidx.annotation.NonNull;

import com.freshchat.consumer.sdk.Freshchat;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onNewToken(@NonNull String token) {
        super.onNewToken(token);
        Freshchat.getInstance(this).setPushRegistrationToken(token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (Freshchat.isFreshchatNotification(remoteMessage)) {
            Freshchat.handleFcmMessage(this, remoteMessage);
        }
    }
}
