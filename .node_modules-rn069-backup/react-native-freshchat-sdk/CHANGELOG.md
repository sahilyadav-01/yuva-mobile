# Freshchat React Native SDK
## 4.7.5 (2025-01-10)
### Bug Fixes :
* Config session variables updated on remote config API calls during account switching in iOS.

## 4.7.4 (2025-01-06)
### Bug Fixes :
* Remote config values cleared when account configuration is changed dynamically in iOS.

## 4.7.3 (2024-12-20)
### Feature:
* Exposed an FCEventAgentProfileClick event to retrieve agent details upon clicking the agent profile.
* Added a public API to set and get the agent profile click redirection URI.
### Bug Fixes :
* Fixed an issue where the chat failed to scroll to the latest message after multiple carousel items were selected in Android.
* Fixed an issue where the image caption was not removed after sending an image message in Android.
* Fixed an issue where the chat screen is not scrolling if carousel is present in the screen in Android.
* Fix UI issue where extra space was added to carousel card with HTML content in iOS.

## 4.7.2 (2024-11-04)
### Bug Fixes :
* Fixed an issue where an extra space appeared in the carousel card of user messages in Android.
* Fixed an issue with carousel card selection in specific scenarios in Android.
* Fix UI issue where bot nodes configured after feedback bot message were not displayed properly in iOS.
* Fix crash related to footer view when using multiselect buttons and dropdowns on apps built with Xcode 16 for iOS 18 users.

## 4.7.1 (2024-10-04)
### Bug Fixes :
* Fixed an issue where links without descriptions were not working in the Bot Article flow in Android.
* Fixed an issue where quick actions were not hidden immediately after a conversation was resolved in Android.
* Fixed an issue where anonymous implementations of FreshchatWebListener were getting garbage collected after a locale change in Android.
* Fixed an issue where the country code was not retained in the view in Android.
* Fixed an issue where images captured with the camera were rotated 90 degrees to the left on some devices in Android.
* Fixed an issue where the file name preview was not consistent for images taken via the camera in Android.
* Fixed an issue with hyperlink breakage in Android.
* Fix for notification not working in iOS 18 sandbox environment.
* Fix occasional issues with the reply editor display in the dropdown, carousel and option selections in iOS.
* Fix for quick option selection menu buttons are not hidden after a conversation is resolved in iOS.
* Fix for bot articles flow where links without descriptions are not working in iOS.
* Fix rare crash during resetUser API call in iOS.
* Fix the image with text alignment issue in conversation message in iOS.
* Fix the issue where the “Was this answer helpful?” feedback options (Yes/No) were not displaying at the bottom of the article in iOS.
* Fix where we removed the 256-character limit for setting up the user properties in iOS.
* Fix added support for this year’s new devices in iOS.
* Fix the issue where the reply editor was visible when sending a carousel via the public API. Now, the reply editor will not appear for carousels sent through the public API in iOS.
* Fix an issue where the “Select All” button was not displayed in the multi-select carousel in some edge cases in iOS.
### Enhancement :
* Removed the character count limitation for setting user properties in Android.

## 4.7.0 (2024-08-28)
### Bug Fixes :
* Fixed the issue where the conversation list was loading for a long time if the token status was expired after reset user in iOS.
* Fixed the ‘Token not processed’ status displayed when the user restored with an invalid token in specific scenarios in iOS.
* Fixed the phone number validation issue where the bot flow did not proceed to the next step when an Arabic phone number was entered in iOS.
* Fixed the issue where after closing a conversation screen, another or the same conversation screen would pop up in iOS.
* Fixed an intermittent crash in React Native when tapping on a user message in iOS.
* Resolved the issue where the keyboard is dismissed after opening the country code view in iOS.
* Fixed issue where chatbot flows were not triggering properly, including instances where users were able to type and send replies initially in iOS.
* Fixed the looping of input messages sent by the user, which was causing issues in the production conversation in iOS.
* Optimise message rendering in the chat detail view in iOS.
* Fix a rare crash linked with keychain storage component in iOS.
* Fix an occasional crash when searching for support articles in iOS.
* Fix auto-scrolling not work correctly after selecting carousel and dropdown messages in iOS.
* Fix an issue for keyboard automatically dismiss after user sent a message in non-bot conversation in iOS.
* Fix orientations of quick reply option for RTL users in iOS.
* Fix missing underlines in phone numbers within chat messages in iOS.
* Fix missing separator line between the reply editor and footer branding view in iOS.
* Fix display of file extension and size on the chat preview screen when the file name is long in iOS.
* Fix text and image position swapping in chat messages after restoring the user in iOS.
* Fix for Customer chat history not getting restored above a few messages in Android.
* Fix for FAQ article message is not taking up the screen space and looks squished/Compressed in Android.

## 4.6.9 (2024-07-29)
### Bug Fixes :
* Fix for Window Manager Bad Token Exception when attaching pictures in Android.
* Fix for issue with custom link handler not working in conversation in Android.
### Enhancement :
* Updated SDK to target Android 14 to comply with Google Play Store policies.

## 4.6.8 (2024-07-13)
### Bug Fixes :
* Fix for bot quick actions display once a conversation is resolved in iOS.
* Added support for html content in carousels and fix for hyperlink redirection in carousel's secorndary button and description content in iOS.
* Fix for chat history restoration issue with pagination in iOS.
* Fix for bot specific variables not updating in bot flows in iOS.
* Fix correct display of search options in the searchable list for Slash command quick actions in iOS.
* Fix security issue where HTML injection is allowed through the chat input field in iOS.
* Fix crash in bot articles feedback option when sent in languages other than English in iOS.
* Fix for the SDK text input field type being set up for OTP autofilling by default in Android.
* Fix for the possibility of HTML injection through the SDK's chat input field in Android.
* Fix for the alignment issue in the categories listing screen in Android.
* Fix for the chat reply window starting with a lowercase letter in Android.
* Fix for the agent response expectation time taking a few seconds to update after a locale change in Android.
* Fix for incorrect Preview messages being shown in Channels list in Android.
* Fix for failing read receipts in conversations in Android.

## 4.6.6 (2024-06-21)
### Bug Fixes :
* Fix occasional crashes in the setUser and identifyUser APIs in iOS.
* Fix crash in the JWT restore API when using invalid tokens in iOS.

## 4.6.5 (2024-06-11)
### Bug Fixes :
* Fix to prevent the bot from looping when the device time is incorrect in Android.

## 4.6.4 (2024-06-04)
### Enhancement :
* Added support for the Middle East data center in iOS.
### Bug Fixes :
* Fix for the Crash on updating to SDK v6.2.0(or above) from v5.9.6 (or below) in Android
* Fix for Search results not filtered by tags in Android.
* Fix for links in Description are not redirected to the respected page in Android.
* Fix for HTML tags not allowing the hyperlinks to redirect to a web-page displayed on carousels in Android.
* Fix for OTP SMS not received for given mobile number while initiating the OTP from the Android SDK in Android.
* Fix for Faq not opening with correct filter tags on initialisation time in Android.
* Fix for Issues with bullet points displaying in Mobile SDK in Android.
* Fix to block users from messaging in disabled private topics when opened using tags in iOS.
### Build Changes
* Upgraded min SDK to 21 in Android

## 4.6.3 (2024-05-13)
### Bug Fixes :
* Fix for missing device models to track user devices in iOS.
* Fix for bot variables not updating since release 4.5.0 in iOS.
* Fix for missing assets when using an old theme customization file in iOS.

## 4.6.2 (2024-05-04)
### Bug Fixes :
* Fix crash for showConversations API that was introduced with release 4.6.1

## 4.6.1 (2024-05-02)
### Bug Fixes :
* Resolved a crash occurring when using the showConversations API with concurrent conversations.

## 4.6.0 (2024-04-30)
### Feature 
* Added support for Parallel conversations.
### Enhancement :
* We have integrated Apple's Required Reason API, ensuring compliance with App Store guidelines.
* Added code signing for the SDK to enhance security and mitigate potential risks associated with unverified code in iOS.
### Bug Fixes :
* Fix for the unable to load topic list page due Canvas: trying to draw too large bitmap issue in Android
* Fix for the issue in navigating to sections in FAQs page in Android.
* Fix for the click on search from virtual keyboard and virtual keyboard is not closing in the FAQs page in Android.
* Fix intermittent issue related to user creation occurring without user properties in iOS.

## 4.5.0 (2024-03-08)
### Enhancement :
* Updated the minimum supported iOS version to 12.
### Bug Fixes :
* Fix crash in JWT user restore caused by the use of numbers for user referenceID values in iOS.
* Fix incorrect token status when expired tokens were added during the user restoration process for JWT users in iOS.
* Eliminated deprecated code warnings and deprecated code for serialization/deserialization of data in iOS.

## 4.4.5 (2024-02-13)
### Bug Fixes :
* Fix for Agent first name display issue when bot conversations are assigned to an agent.
* Fix infinite loading issue for users with expired JWT authentication in iOS.

## 4.4.4 (2024-01-22)

### Bug Fixes :
* Fix for potential ANR during app update in Android.
* Fix for bot not retriggering after resolving bot conversations in Android.
* Fix for a crash happening while loading conversations in Android.
* Fix for agent name is not updated when any bot conversations are assigned to any agent in Android.
* Addressed crashes affecting users running iOS versions prior to 13 in iOS.
* Fixed compromised visibility of the date picker view in dark mode in iOS.

## 4.4.3 (2024-01-08)

### Feature 
* We are adding support for multi-select Carousel as a new input type for your customers. Customers will now be able to pick and choose multiple choices that appears as a series of options with a horizontal scroll (carousel) on the screen in Android.

### Bug Fixes :
* Fix to enable text input editor when using Freshchat Public APIs to send messages on behalf of an agent/bot in Android.
* Fix for hyper links not scrolling to the desired index in FAQ webview in omni account in Android.
* Fix for HTML code is being displayed in carousels primary & secondary buttons in Android.
* Fix for conversation is not loading for Android Gradle Plugin 8.0 consumers in Android.

## 4.4.2 (2023-10-30)

### Feature Enhancement :
* Improvements in user experience when loading messages in a conversation in Android.

### Bug Fixes :
* Fix for bot variables not being set for resolved conversations in Android.
* UI fixes for API generated proactive reply suggestions in iOS.
* Fix intermittent delays in updating team member information when a conversation is assigned from the bot flow in iOS.

## 4.4.1 (2023-09-15)

### Feature Enhancement :
* Handle disabling of reply editor when bot response is pending in Android.

### Bug Fixes :
* Fix for a crash that occurs during "postback" flow in a bot conversation in Android.

## 4.4.0 (2023-08-04)

### Feature :
* Say hi to bot actions! Certain actions may need to be performed before or after the execution of a response in a bot conversation to complete the process. These changes can be anything in the chat screen, API triggers, pop-up feedbacks or articles, handover to agents, stop/Minimize conversations etc. You will be able to configure this via the bot builder using actions in iOS.
* This version will now let you receive star-based feedback from your customers. Customers will be able to provide feedback from a maximum of 5 star based choices in Android.
* We are adding support for Date and time as a new input type for your customers. Customers will now be able to pick a date and pick a time within the bot flow in Android.
* We are adding support for Multi-select as a new input type for your customers. Customers will now be able to pick and choose multiple choices that appears as a dropdown in Android.
* We are adding support for multi-select as a new input type for your customers. Customers will now be able to pick and choose multiple choices that appears as buttons in Android.

### Feature Enhancement :
* Handle disabling of reply editor when bot response is pending in iOS.
* Improved displaying of last message in topic list with multiline text in iOS.
* Update UI for single select button in Android.

### Bug Fixes :
* Fix sporadic crash while setting user properties in iOS.
* Fix triggering bot flow messages even when bot is unpublished in iOS.
* Fix for timer not starting when resend otp in Android.

## 4.3.0 (2023-06-29)

### Feature Enhancement
* Support for multi-select Carousel as a new input type for your customers. Customers will now be able to pick and choose multiple choices that appears as a series of options with a horizontal scroll (carousel) on the screen. The options list can also contain images in iOS.
* Support for Phone number and OTP as a new input type for your customers. Customers will now be able to enter their phone numbers with country code to generate an OTP which is then entered by user and is accepted by the SDK to process user information.
* You will now be able to pass custom user properties related to a user conversation from the mobile app to the bots via the SDK in Android.
* We are adding support for multi-select as a new input type for your customers. Customers will now be able to pick and choose multiple choices that appears as list and dropdown in iOS.
* We are adding support for Date and time as a new input type for your customers. Customers will now be able to pick a date and pick a time within the bot flow in iOS.
* Update UI for single select button and dropdown options in iOS.
* This version will now let you receive feedback from your customers in the form of a text. Customers will be able to type their feedback if configured in the bot flow in Android.
* This version will now let you receive feedback from your customers in the form of a preset choices. Customers will be able to choose their feedback from a maximum 3 choices in Android.

### Bug Fixes :
* Fix for notifications not coming when an old user is restored over existing user in iOS.

## 4.2.4 (2023-06-02)

### Bug Fixes :
* Fix for app version not updating in device properties section in iOS.
* Fix profile image flickering for bot or agent message in chat in iOS.
* Fix for localization with country value in iOS.
* Fix display of CSAT title with theme color in iOS.
* Fix spaces in multiline bot messages with paragraph tag.

## 4.2.3 (2023-05-05)

### Feature Enhancement
* Support for user attribute placeholders in bot message.
* Introducing the ability to pass custom properties and bot properties related to a conversation from the mobile app to the bots via SDK in iOS.
* Display links configured for bot articles in iOS.
* Improve conversation fetch when user comes to chat without notification click in iOS.
* Update invalid initilization experience with alert message in iOS.
* Display links configured for bot articles in Android.

### Bug Fixes :
* Fix to show bot flow message instead of unsupported format error message in iOS.
* Fix to show HTML entities instead of entity names in iOS.
* Fix to allow attachments in the first message while talking to an agent in iOS.
* Fix CFBundleSupportedPlatforms issue while submitting app to store in iOS.
* Fix for multiple selection of quick reply buttons in Android.
* Fix for displaying blank topic name in topic list screen in Android.
* Fix for HTML tags not supported in carousel title and subtitle in Android.
* Fix for multiple selection of Dropdown options in Android.
* Fix for bot not being triggered when user responds to CSAT in Android.
* Fix for locale change not being reflected in topics screen in Android.

## 4.2.2 (2023-03-08)

### Bug Fixes :
* Fix for updating user details along with user creation in iOS.
* Fix to stop auto scrolling of Carousel cards to initial card in iOS.
* Fix for overlapping new message indicator with reply editor in iOS.
* Fix to allow sending attachment only when bot requests an attachment in iOS.
* Fix for localisation of FAQ search bar cancel text in iOS.
* Fix to stop FAQ content from shaking while scrolling with less content in iOS.
* Fix for send button being enabled when only empty spaces are entered in Android.
* Fix for extra space being displayed below multiline bot messages in Android.
* Fix for a crash which occurs while attaching images in Android.

## 4.2.1 (2023-01-31)

### Enhancement :
* Support for Read Only and Single Select carousel for bot flow in Android.
* Support for star rate feedback from users during bot interactions in iOS.

### Bug Fixes :
* Fix to initiate bot for resolved conversations when chat screen opens in Android

## 4.2.0 (2022-12-04)

### Enhancement :
* Changes to support Push notifications with P8 certification.

### Bug Fixes :
* Support for image in bot flow messages in iOS.
* Fix for agent/bot message timestamp aligning to the right end of the message bubble in Android.
* Fix CFBundleSupportedPlatforms issue while submitting app to store in iOS.

## 4.1.3 (2022-11-24)

### Improvement :
* Updated targetSdkVersion to Android 12.

### Bug Fixes :
* Fix for the next bot flow to trigger on selecting carousel in Android.
* Fix for clearing error message for invalid input in bot flow in Android.
* Fix for handling empty messages for Android.
* Fix for handling quick actions menu overlapping in landscape mode for Android.
* Fix for custom attachment icons appearing too large in Android.

## 4.1.2 (2022-11-09)

### Improvement :
* Minor UI changes and improvements to accomodate for ios devices and versions in iOS.

### Bug Fixes :
* Fix for Quick Action Pre-defined buttons in iOS.
* Fix impacting CSAT users for RTL users for iOS.

## 4.1.1 (2022-10-26)

### Feature Enhancement
* Added ability to control file attachment using `fileSelectionEnabled` config.
* This version lets you receive feedback (opinion polls & comments) from users during bot interactions in iOS

## 4.1.0 (2022-10-18)

### Bug Fix:
* Fix for keyboard hiding last few messages for Android.

## 4.0.9 (2022-10-15)

### Bug Fix:
* Better handling of HTML content in messages.
* Allow encoded strings with quick actions and replies in messages.

## 4.0.8 (2022-09-30)

### Feature Enhancement
* Bot will now be able to validate text in Mobile number, Email-ID and Number input types from customer in the conversation.
* Customer can upload file for bot flows and attachment option.

## 4.0.7 (2022-08-24)

### Feature Enhancement
* Redesign of "Powered by Freshworks" banner for both iOS and Android.

### Bug Fix:
* Fix for orientation change crash in Android Quick Actions.
* Add TOKEN_NOT_PROCESSED state for JWT auth users in iOS.

## 4.0.6 (2022-08-11)

### Bug Fix:
* Fix for orientation change crash which was introduced in version 5.1.0 in Android.

## 4.0.5 (2022-08-09)

### Feature Enhancement
* Support for quick options in bot flow.
* Support for read-only and single select carousel in bots flow in iOS.
* Display missing suggested articles in initial bot flow in iOS.
* New device models added to track user devices in iOS.

### Bug Fix:
* Fix for ConnectivityManager leak in Android.
* Fixed notification not being shown in the notification tray, when the app is in the background for Android.
* Fixed an issue with restoring a user using JWT in Android.
* Fix for dismissing keyboard when moving from Chat screen to App screen in Android.
* Fix for handing empty CSAT in Android.
* Display timestamp value for bot messages in iOS.
* Theme fix for CSAT prompt in iOS.
* Support for <li>,<ol> and <ul> html tags in messages in iOS.
* Update custom response expectation message with locale change in iOS.
* Other minor bug fixes.

## 4.0.4 (2022-04-06)

### Bug Fix:
* Stop bot from triggering messages in wrong scenarios.

## 4.0.3 (2022-01-28)

### Bug Fix:
* Unread count overlap for topic list.
* Black navigation bar appearance on navigating via push notification.
* Rare invalid domain prompt during sdk initialization.
* Fix for displaying notifications in Android 12.

## 4.0.2 (2021-12-06)

### Enhancement
* Display complete name for messages created using API
* Resouces path update and minor changes for other framework bundle

### Bug Fix:
* Fix for Topic name and image being empty
* FAQ contactUs tags filter

## 4.0.1 (2021-11-08)

### Bug Fix:
* Fix CFBundleSupportedPlatforms issue while submitting app to store.

## 4.0.0 (2021-10-28)

### Enhancement:
* Introducing self-service via bots on the SDK. Bots built using the Unified Bot Builder will now be accessible on the SDK too. Learn more about the capability [here](https://support.freshchat.com/en/support/solutions/articles/50000003778-bots-on-freshdesk-messaging-mobile-sdk).

## 3.3.5 (2021-08-31)

### Bug Fix:
* A fix to honour FAQ category icons in all accounts.

## 3.3.4 (2021-07-07)

### Enhancement:
* iOS performance improvements in rendering messages.

### Bug Fix:
* Fix for CSAT UI bug in iOS.

## 3.3.3 (2021-06-21)

### Bug Fix:
* Fix for data encryption issue due to changes made in v4.3.2.

## 3.3.2 (2021-04-09)

### Enhancement:
* Exposed NotificationImportanceConfig for Android.
* Updated cryptographic encryption pattern used for encrypting shared preferences in Android.
* Upgraded picasso library version to 2.8.

## 3.3.1 (2021-02-24)

### Bug Fix:
* Support for custom reply text in quick reply options.

## 3.3.0 (2021-02-03)

### Enhancement:
* Omni Kbase support for bundled accounts.

## 3.2.0 (2021-01-19)

### Enhancements:
* Upgraded Android targetSDKVersion to 29.
* Updated the algorithm used for encrypting Shared Preferences in Android.

### Bug Fix:
* Fix for CSAT UI bug in iOS.

## 3.1.1 (2021-01-04)

### Bug Fix:
* Fix for FAQs content visibility in iOS.

## 3.1.0 (2020-12-16)

### Feature
* Omni Kbase support for bundled accounts in iOS.

### Enhancements
* Improved polling mechanism in iOS.

### Bug Fix
* Bug fixes in iOS JWT accounts.

## 3.0.0 (2020-11-23)

### Enhancements
* Support for live translation of messages.
* Pre-populate caption text while attaching images.
* Proactive warning for incorrect app domain.
* Added extra space around send button in iOS chat screen.
* Support sub locale of languages in iOS.
* Removed extra padding for images in iOS.
* Support for custom line spacing of messages in chat screen in Android.

### Bug Fix
* iOS Thread related crashes.
* Better handling of system font for HTML messages in iOS.

## 2.6.4 (2020-09-07)

### Bug Fixes
* Better handling of "&" in iOS messages.
* Removed search icon when FAQ search is open in Android.
* Added “Still looking for help? Talk to us” string for FAQ downvote in Android. 

## 2.6.3 (2020-08-07)

### Enhancement
* Android and iOS performance improvements in rendering messages.

### Bug Fix
* Android and iOS Fix to honor showContactUsOnFaqNotHelpful config

## 2.6.2 (2020-07-07)

### Enhancement
* Android performance improvements in rendering messages.

### Bug Fix
* iOS UI Bug fixes.


## 2.6.1 (2020-06-18)

### Enhancement
* Support for multiline placeholder text in feedback view.

## 2.6.0 (2020-06-15)

### Feature
* Support to book meetings.

### Enhancement
* Optimisation for iOS 13.

### Bug Fixes
* Show agent first name alone instead of full name.
* Fixed image resize issue in Android.
* Minor bug fixes in iOS.

## 2.5.0 (2020-05-13)

### Feature
* Support for messages with Carousel options.

## 2.4.0 (2020-05-04)

### Feature
* Support for multi choice question with dropdown.

## 2.3.1 (2020-03-17)

### Bug Fix
* Fixed rendering of newlines in message text.

## 2.3.0 (2020-02-03)

### Feature
* Add user events from your app to Freshchat Timeline to give your agents context on user's journey and problems.

## 2.2.0 (2019-11-18)

### Enhancement
* Ability to search through FAQs filtered by tags.
* Increased CSAT message view maximum height to 4 lines.

## 2.1.1 (2019-10-10)

### Bug Fix
* Handled iOS 13 push tokens.

## 2.1.0 (2019-9-27)

### Enhancement
* Added Freshchat events
* Support for showing proactive reply suggestions

### Breaking Change
* Freshchat.FRESHCHAT_EVENTS event name variable user_action is changed to event_name.

### Bug Fix
* Resolved iOS variable name conflict with react-native-navigation library.

## 2.0.0 (2019-7-26)

### Enhancement
* Comapatible with RN v0.60 and above.

## 1.1.2 (2019-5-27)

### Enhancement :
* Improvements in keychain store.

### Bug Fix
* Stopped message list from auto scrolling to bottom
* Improvements in JWT timer timeout logic

## 1.1.1 (2019-5-14)

### Bug Fix
* Graceful handling of non freshchat notification payload.

## 1.1.0 (2019-5-10)

### Enhancement
* Improvements in keychain store.

### Bug Fixes
* Improved user experience during API failures
* Open SDK screens in same task irrespective of the context passed

## 1.0.2 (2019-5-3)

### Enhancement
* Updated README with latest documentation

## 0.5.8 (2019-3-7)

### Enhancement
* Improvements in logic to load new messages for conversations

## 0.5.7 (2019-2-15)

### Enhancement
* Added API to dismiss Freshchat screens in Android
* Upgrade Freshchat Android SDK version to 2.4.0
* Upgrade Freshchat iOS SDK version to 2.4.1

## 0.5.6 (2019-1-10)

### Enhancement
* Upgrade Freshchat Android SDK version to 2.2.0
* Upgrade Freshchat iOS SDK version to 2.2.0

### Bug Fixes
* Trigger unread count count callback only once

### Breaking Change

* If you have modified strings.xml to hide response expectation messages, it will continue to work in all cases except when away. You can set `responseExpectationEnabled` flag in FreshchatConfig as `false` to completely hide response expectations.

## 0.5.5 (2018-12-29)

### Enhancement
* Upgrade Freshchat Android SDK version to 2.1.0
* Upgrade Freshchat iOS SDK version to 2.1.0

## 0.5.4 (2018-12-13)

### Breaking Changes
* Application state has to be send as part of notification payload in iOS. Please refer documentation for more details. This is needed to determine whether to open conversations or show in-app notifications.

### Bug Fixes
* Trigger Notification interception broadcast when app is in background Android Oreo and above.

### Enhancement
* Added transformPushNotificationIOSPayloadToNativePayload API

## 0.5.3 (2018-12-04)

### Breaking Changes
* Event name changed from `Freshchat.FRESHCHAT_IOS_NOTIFICATION_CLICKED` to `Freshchat.FRESHCHAT_NOTIFICATION_CLICKED`
* `FreshchatNotificationConfig.activityToLaunchOnClick` is removed. Added `FreshchatNotificationConfig.overrideNotificationClickListener` which accepts a boolean value.

### Enhancement
* Unified approach to listen to notification click in Android and iOS

### Bug Fixes
* Ability to hide agent response time (iOS fix)
* Ability to launch Freshchat SDK screens within same task (Android fix)

## 0.5.2 (2018-11-29)

### Enhancement
* Exposed event to handle external links
* Exposed event to handle ios notification click
* Exposed ways to intercept notifications in Android

## 0.5.1 (2018-11-21)

### Bug fixes
* Ignore Null Objects while sending to native iOS SDK

## 0.5.0 (2018-11-15)

### Breaking Change
* Added error callback for setUser, setUserProperties and identifyUser API.

### Enhancement
* Securely identify and restore users using Id Tokens (JWT)

## 0.4.5 (2018-10-30)

### Enhancement
* Expose APIs dismiss Freshchat views in iOS

### Bug fixes
* Remove event listener crash fix

## 0.4.4 (2018-10-14)

### Enhancement
* Expose APIs to support custom localizable string file in iOS
* Updated Freshchat iOS SDK version to 1.5.5
* Updated Freshchat Android SDK version to 1.5.3

### Bug fixes
* Open SDK screens in the same task of running application instead of creating new task.

## 0.4.3 (2018-10-06)

### Enhancement
* Updated Freshchat iOS SDK version to 1.5.4

## 0.4.2 (2018-10-01)

### Enhancement
* Updated Freshchat iOS SDK version to 1.5.3
* Expose APIs to support custom theme file in iOS
* Expose event to listen to user interaction

## 0.4.1 (2018-09-24)

### Enhancement
* Updated Freshchat Android SDK version to 1.5.2

## 0.4.0 (2018-08-07)

### Enhancement
* Expose APIs to handle SDK push notifications

### Breaking Change
* Native module name is changed to `RNFreshchatSdkPackage` from `FreshchatSDKPackage`

## 0.3.1 (2018-06-15)

### Bug fixes
* Run native module instance in Main thread
* Fixed broken constant `FreshchatNotificationConfig.NotificationPriority.PRIORITY_HIGH`

## 0.3.0 (2018-06-14)

### Enhancement
* Enable capabilities to listen to change in unread message count and restore id generated event
* Allow FAQs and Channels to be filtered by tags

## 0.2.0 (2018-05-10)

* Initial alpha release of the Freshchat React Native SDK
