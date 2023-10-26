#import <Foundation/Foundation.h>
#import "StatusBarHeight.h"
@implementation StatusBarHeight

#define SYSTEM_VERSION_LESS_THAN_OR_EQUAL_TO(v)     ([[[UIDevice currentDevice] systemVersion] compare:v options:NSNumericSearch] != NSOrderedDescending)
RCT_EXPORT_MODULE();
- (NSString *)statusBarHeight{
return @(UIApplication.sharedApplication.statusBarFrame.size.height).stringValue;
}
RCT_EXPORT_METHOD(getStatusBarHeight: (RCTResponseSenderBlock)callback{
callback(@[[NSNull null], self.statusBarHeight]);
});
@end
