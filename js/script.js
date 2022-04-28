/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment4-HTML/sw.js", {
    scope: "/ICS20-Assignment4-HTML/",
  })
}

/**
 * This function calculates the cost of a pizza
 */
function myButtonClicked() {
  // input
  const sL = document.getElementById("size-large").checked
  const sXL = document.getElementById("size-extra-large").checked
  const oT = document.getElementById("one").checked
  const tT = document.getElementById("two").checked
  const thrT = document.getElementById("three").checked
  const fT = document.getElementById("four").checked
  var size
  var toppings

  // process and output
  const TAX = 0.13

  if (sL == true) {
    size = 6.0
  }

  if (sL == false) {
    size = 10.0
  }

  if (oT == true) {
    toppings = 1.0
  }

  if (tT == true) {
    toppings = 1.75
  }

  if (thrT == true) {
    toppings = 2.5
  }

  if (fT == true) {
    toppings = 3.35
  }

  var total = (size + toppings) * (1 + TAX)
  document.getElementById("cost").innerHTML =
    "The total cost is $" + total.toFixed(2)
}