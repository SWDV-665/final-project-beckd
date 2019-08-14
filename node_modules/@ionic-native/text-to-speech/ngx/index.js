var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var TextToSpeech = /** @class */ (function (_super) {
    __extends(TextToSpeech, _super);
    function TextToSpeech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeech.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeech.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    TextToSpeech.pluginName = "Text To Speech";
    TextToSpeech.plugin = "cordova-plugin-tts";
    TextToSpeech.pluginRef = "TTS";
    TextToSpeech.repo = "https://github.com/vilic/cordova-plugin-tts";
    TextToSpeech.platforms = ["Android", "iOS", "Windows Phone 8"];
    TextToSpeech = __decorate([
        Injectable()
    ], TextToSpeech);
    return TextToSpeech;
}(IonicNativePlugin));
export { TextToSpeech };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RleHQtdG8tc3BlZWNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDdEMsZ0NBQWlCOzs7O0lBV2pELDRCQUFLLGFBQUMsYUFBa0M7SUFTeEMsMkJBQUk7Ozs7OztJQXBCTyxZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBekN6QjtFQXlDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUVFNPcHRpb25zIHtcbiAgLyoqIHRleHQgdG8gc3BlYWsgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogYSBzdHJpbmcgbGlrZSAnZW4tVVMnLCAnemgtQ04nLCBldGMgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xuICAvKiogc3BlZWQgcmF0ZSwgMCB+IDEgKi9cbiAgcmF0ZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBUZXh0IFRvIFNwZWVjaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUZXh0IHRvIFNwZWVjaCBwbHVnaW5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRleHRUb1NwZWVjaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGV4dC10by1zcGVlY2gvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHR0czogVGV4dFRvU3BlZWNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnR0cy5zcGVhaygnSGVsbG8gV29ybGQnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2VzcycpKVxuICogICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiBjb25zb2xlLmxvZyhyZWFzb24pKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBUVFNPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGV4dCBUbyBTcGVlY2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10dHMnLFxuICBwbHVnaW5SZWY6ICdUVFMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpbGljL2NvcmRvdmEtcGx1Z2luLXR0cycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZXh0VG9TcGVlY2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3BlYWtzXG4gICAqIEBwYXJhbSB0ZXh0T3JPcHRpb25zIHtzdHJpbmcgfCBUVFNPcHRpb25zfSBUZXh0IHRvIHNwZWFrIG9yIFRUU09wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFraW5nIGZpbmlzaGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc3BlYWsodGV4dE9yT3B0aW9uczogc3RyaW5nIHwgVFRTT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYW55IGN1cnJlbnQgVFRTIHBsYXliYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=