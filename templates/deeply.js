module.exports = color => {
    return `!
name: "Deeply #${color}"
author: "tgxdark"
@
parentTheme: 2
#
attachContact, attachFile, attachInlineBot, attachLocation, attachPhoto, bubble_chatBackground, bubble_mediaReply, bubble_mediaReply_noWallpaper, bubble_unread, bubble_unread_noWallpaper, bubbleIn_background, bubbleOut_background, chatBackground, chatKeyboardButton, fileAttach, filling, fillingPositive, fillingPressed, headerBackground, headerBarCallActive, headerLightBackground, iv_preBlockBackground, messageSwipeBackground, overlayFilling, passcode, placeholder, unread: #000
avatarOrange: #F4975B
avatarRed, avatarSavedMessages, badge, bubble_buttonText, bubble_buttonText_noWallpaper, bubbleIn_textLink, bubbleOut_chatVerticalLine, bubbleOut_file, bubbleOut_messageAuthor, bubbleOut_textLink, bubbleOut_ticks, bubbleOut_ticksRead, bubbleOut_waveformActive, caption_textLink, chatListAction, chatListVerify, chatSendButton, checkActive, circleButtonNegative, circleButtonNewChat, circleButtonRegular, circleButtonTheme, controlActive, file, fillingPositiveContent, headerButton, headerPickerBackground, headerPlaceholder, iconActive, iconNegative, inlineIcon, inlineOutline, inlineText, inputActive, introSectionActive, messageAuthor, messageVerticalLine, nameRed, notification, notificationPlayer, online, passcodeIcon, playerButton, playerButtonActive, playerCoverIcon, profileSectionActive, profileSectionActiveContent, progress, promo, seekDone, sliderActive, textLink, textNegative, textNeutral, textSearchQueryHighlight, ticks, ticksRead, togglerActive, togglerNegative, videoSliderActive, waveformActive: #${color}
background_icon, icon: #8B9398
badgeMuted: #3B3B3B
badgeMutedText: #CCC
badgeText, checkContent, circleButtonChatIcon, circleButtonOverlayIcon, promoContent: #FFF
bubble_button, bubble_button_noWallpaper: #151515
bubble_messageSelection, bubble_messageSelectionNoWallpaper, messageSelection: #${color}2D
bubble_overlay: #A0A0A07D
bubbleIn_outline: #000000B0
bubbleIn_textLinkPressHighlight, bubbleOut_textLinkPressHighlight, bubbleOut_waveformInactive, seekReady, textLinkPressHighlight, textSelectionHighlight, togglerActiveBackground, waveformInactive: #${color}48
bubbleOut_outline: #000000B1
caption_textLinkPressHighlight: #${color}54
chatListMute, iconLight: #FFFFFFB5
circleButtonChat, circleButtonOverlay, playerCoverPlaceholder: #212226
controlContent: #FFFCFC
fileRed: #E53737
headerBarCallIncoming: #78E27E
headerBarCallMuted: #919191
headerTabActiveText, togglerPositiveContent: #FFF9F9
headerTabInactiveText: #FFFFFF96
inlineContentActive: #F7F3F3
inputNegative: #F00707
introSection: #E42B575D
seekEmpty: #131313
sliderInactive: #E42B5765
statusBar: #0000003F
togglerPositive: #00CD67
togglerPositiveBackground: #00CD6768
videoSliderInactive: #${color}5E`;
};
