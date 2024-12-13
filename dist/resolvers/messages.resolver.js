import { pubsub } from "../context";
export const messageMutations = {
    sendMessage: (_, { input }, __) => {
        const newMessage = { ...input, createdAt: new Date().toISOString() };
        pubsub.publish("MESSAGE_SENT", { sendMessage: newMessage });
        return newMessage;
    }
};
export const messageSubscriptions = {
    sendMessage: {
        subscribe: () => pubsub.asyncIterableIterator(["MESSAGE_SENT"])
    }
};
