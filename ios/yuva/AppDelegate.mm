#import "AppDelegate.h"

#import <Firebase.h>
#import <FreshchatSDK/FreshchatSDK.h>
#import <RNCPushNotificationIOS.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>
#import <ReactAppDependencyProvider/RCTAppDependencyProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  self.moduleName = @"yuva";
  self.dependencyProvider = [RCTAppDependencyProvider new];
  self.initialProps = @{};

  UNUserNotificationCenter *notificationCenter = [UNUserNotificationCenter currentNotificationCenter];
  notificationCenter.delegate = self;
  [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (BOOL)application:(UIApplication *)application
  continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
  return [RCTLinkingManager application:application
                         continueUserActivity:userActivity
                           restorationHandler:restorationHandler];
}

- (void)application:(UIApplication *)app didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [[Freshchat sharedInstance] setPushRegistrationToken:deviceToken];
  [RNCPushNotificationIOS didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  if ([[Freshchat sharedInstance] isFreshchatNotification:userInfo]) {
    [[Freshchat sharedInstance] handleRemoteNotification:userInfo andAppstate:application.applicationState];
  }
  [RNCPushNotificationIOS didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  [RNCPushNotificationIOS didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center
  didReceiveNotificationResponse:(UNNotificationResponse *)response
  withCompletionHandler:(void (^)(void))completionHandler
{
  NSDictionary *userInfo = response.notification.request.content.userInfo;
  if ([[Freshchat sharedInstance] isFreshchatNotification:userInfo]) {
    [[Freshchat sharedInstance] handleRemoteNotification:userInfo
                                             andAppstate:[UIApplication sharedApplication].applicationState];
  }
  [RNCPushNotificationIOS didReceiveNotificationResponse:response];
  completionHandler();
}

@end
