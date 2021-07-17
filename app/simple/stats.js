import document from "document";

import { me as appbit } from "appbit"; //part of using today
import { today } from "user-activity"; //steps, elevation, goals, ...
import { user } from "user-profile"; //resting heart rate, gender, age, bmr, stride, weight, height, ...

import { battery } from "power";
//also heartRateZone: Returns: "out-of-range" or "fat-burn" or "cardio" or "peak" or "below-custom" or "custom" or "above-custom"

const steps = document.getElementById("steps");
const minutes = document.getElementById("minutes");
const burn = document.getElementById("burn");
const distance = document.getElementById("distance");
const elevation = document.getElementById("elevation");
const rhr = document.getElementById("resting");
const wt = document.getElementById("weight");
const lvl = document.getElementById("lvl");

export function update() {
  steps.text = today.adjusted.steps;
  minutes.text = today.adjusted.activeZoneMinutes.total;
  burn.text = today.adjusted.calories;
  distance.text = (today.adjusted.distance/1000).toFixed(2);
  elevation.text = today.adjusted.elevationGain;

  rhr.text = "HP " + user.restingHeartRate;
  wt.text = user.weight + " KG";
   
  lvl.width = battery.chargeLevel*1.54;
}