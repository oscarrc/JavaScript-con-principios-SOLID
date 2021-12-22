"use strict"

import "./Env.mjs";
import './Event/FormEvent.mjs';
import { numberGenerator } from './Lottery/Service/NumberGenerator.mjs';
import { numberFormatter } from './Lottery/Service/NumberFormatter.mjs';
import { NumbersLottery } from "./Lottery/NumbersLottery.mjs";
import { NumberRoller } from "./Lottery/Roller/NumberRoller.mjs";

//JS no tiene modulos globales. Loas asignamos a window
window.numberGenerator = new numberGenerator();
window.numberFormatter = new numberFormatter();
window.roller = new NumberRoller(numberFormatter, numberGenerator);
window.lottery = new NumbersLottery(roller);

lottery.prepareLottery();