import React from 'react';
import FreshchatConfig from './components/freshchatConfig';
import FaqOptions from './components/faqOptions';
import ConversationOptions from './components/conversationOptions';
import FreshchatUser from './components/freshchatUser';
import FreshchatMessage from './components/freshchatMessage';
import FreshchatNotificationConfig from './components/freshchatNotificationConfig';
import FreshchatJSWrapper from './components/freshchatJSWrapper';

module.exports = {
    Freshchat: FreshchatJSWrapper,
    FreshchatConfig: FreshchatConfig,
    FaqOptions: FaqOptions,
    ConversationOptions: ConversationOptions,
    FreshchatUser: FreshchatUser,
    FreshchatMessage: FreshchatMessage,
    FreshchatNotificationConfig: FreshchatNotificationConfig
};