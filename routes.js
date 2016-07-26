/**
 * Created by rok on 2016. 7. 2..
 */
'use strict';

const KakaoController = require('./controllers/kakao');

module.exports = [
    { method: 'GET', path: '/kakao/keyboard', config: KakaoController.getHomeKeyboard },
    { method: 'POST', path: '/kakao/message', config: KakaoController.postMessage },
    { method: 'POST', path: '/kakao/friend', config: KakaoController.postFriend },
    { method: 'DELETE', path: '/kakao/friend/{user_key}', config: KakaoController.deleteFriend },
    { method: 'DELETE', path: '/kakao/chat_room/{user_key}', config: KakaoController.deleteRoom }
];