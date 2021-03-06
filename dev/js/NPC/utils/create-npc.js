import npc from './npc.json';

const rItem = array => array[Math.floor(Math.random() * array.length)];
const rKey = obj => rItem(Object.keys(obj));
const createName = (n1, n2, n3) => `${rItem(n1)}${rItem(n2)}${rItem(n3)}`;

export default function createNpc() {
    const {
        firstName,
        lastName,
        npcRace,
        npcFeature,
        highAbilityObj,
        lowAbilityObj,
        npcTalents,
        npcMannerisms,
        npcInteractionTraits,
        alignmentIdealsObj,
        npcBonds,
        npcFlawSecret,
    } = npc;
    const character = {};
    character.firstName = createName(firstName.fnBeginning, firstName.fnMiddle, firstName.fnEnd)
    character.lastName = createName(lastName.lnBeginning, lastName.lnMiddle, lastName.lnEnd);
    character.race = rItem(npcRace);
    character.feature = rItem(npcFeature);
    character.highAbility = {};
    character.highAbility.ability = rKey(highAbilityObj);
    character.highAbility.desc = rItem(highAbilityObj[character.highAbility.ability]);
    character.lowAbility = {};
    character.lowAbility.ability = rKey(lowAbilityObj);
    character.lowAbility.desc = rItem(lowAbilityObj[character.lowAbility.ability]);
    character.talent = rItem(npcTalents);
    character.mannerisms = rItem(npcMannerisms);
    character.interaction = rItem(npcInteractionTraits);
    character.alignment = rKey(alignmentIdealsObj);
    character.ideal = rItem(alignmentIdealsObj[character.alignment]);
    character.bond = rItem(npcBonds);
    character.flaw = rItem(npcFlawSecret);

    return character;
}
