"use strict"

import "./Env.mjs";
import './Event/FormEvent.mjs';
import { NumberGenerator } from './Lottery/Service/NumberGenerator.mjs';
import { NumberFormatter } from './Lottery/Service/NumberFormatter.mjs';
import { NumbersLottery } from "./Lottery/NumbersLottery.mjs";
import { NumberRoller } from "./Lottery/Roller/NumberRoller.mjs";

//JS no tiene modulos globales. Loas asignamos a window
window.numberGenerator = new NumberGenerator();
window.numberFormatter = new NumberFormatter();
window.roller = new NumberRoller(NumberFormatter, NumberGenerator);
window.lottery = new NumbersLottery(roller);

lottery.prepareLottery();