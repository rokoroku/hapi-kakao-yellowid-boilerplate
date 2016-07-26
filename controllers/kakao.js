/**
 * Created by Rok on 2016-07-02.
 */
'use strict';

const Joi = require('joi');
const Boom = require('boom');

const Keyboard = Joi.object().keys({
    type: Joi.string().valid('buttons', 'text'),
    buttons: Joi.array().items(Joi.string())
});

const MessageButton = Joi.object().keys({
    label: Joi.string().required(),
    url: Joi.string().required()
});

const Photo = Joi.object().keys({
    url: Joi.string().required(),
    width: Joi.number().required(),
    height: Joi.number().required()
});

const Message = Joi.object().keys({
    text: Joi.string().length(1000).required(),
    photo: Photo,
    message_button: MessageButton
});

const PostMessagePayload = Joi.object().keys({
    user_key: Joi.string().required(),
    type: Joi.string().valid('text', 'photo').required(),
    content: Joi.string().required()
});


const PostMessageResponse = Joi.object().keys({
    message: Message,
    keyboard: Keyboard
});

const PostFriendPayload = Joi.object().keys({
    user_key: Joi.string().required()
});

exports.getHomeKeyboard = {
    description: 'Home keyboard webhook',
    tags: ['api'],
    response: {
        sample: 0,
        schema: Keyboard
    },
    handler: function (request, reply) {
        'use strict';

        let result = {
            type: 'buttons',
            buttons: ['선택 1', '선택 2', '선택 3', '선택 4', '선택 5', '선택 6']
        };
        reply(result);
    }
};

exports.postMessage = {
    description: 'Auto-reply webhook',
    tags: ['api'],
    validate: {
        payload: PostMessagePayload
    },
    response: {
        sample: 0,
        schema: PostMessageResponse
    },
    handler: function (request, reply) {
        'use strict';

        let payload = request.payload;
        let message = {
            text: 'received message:\n' + JSON.stringify(payload)
        };
        let keyboard = {
            type: 'buttons',
            buttons: ['선택 1', '선택 2', '선택 3', '선택 4', '선택 5', '선택 6']
        };
        reply({ message, keyboard });
    }
};

exports.postFriend = {
    description: 'New friend webhook',
    tags: ['api'],
    validate: {
        payload: PostFriendPayload
    },
    handler: function (request, reply) {
        reply(200);
    }
};

exports.deleteFriend = {
    description: 'Remove friend webhook',
    tags: ['api'],
    validate: {
        params: {
            user_key: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        reply(200);
    }
};

exports.deleteRoom = {
    description: 'Leave chat room webhook',
    tags: ['api'],
    validate: {
        params: {
            user_key: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        reply(200);
    }
};