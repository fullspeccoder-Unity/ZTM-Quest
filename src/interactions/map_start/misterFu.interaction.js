import { displayDialogue } from '../../utils';
import { npcInteractionHandler } from '../handler.interactions';

import { conversationMisterFu, misterFu } from '../../constants';

export const interactionWithMisterFu = (player, k, map) => {
    player.onCollide('misterFu', () => {
        player.isInDialog = true;

        npcInteractionHandler(player, misterFu.name, k, () => {
            displayDialogue({
                k,
                player,
                characterName: misterFu.name,
                text: conversationMisterFu,
                onDisplayEnd: () => {
                    player.isInDialog = false;
                    player.state.hasTalkedToMisterFu = true;
                },
            });
        });
    });
};