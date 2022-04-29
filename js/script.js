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
  const sizeLarge = document.getElementById("checkbox-1").checked
  const oneTopping = document.getElementById("one").checked
  const twoToppings = document.getElementById("two").checked
  const threeToppings = document.getElementById("three").checked
  const fourToppings = document.getElementById("four").checked
  var size
  var toppings

  // process and output
  const TAX = 0.13

  if (sizeLarge == true) {
    size = 6.0
  }

  if (sizeLarge == false) {
    size = 10.0
  }

  if (oneTopping == true) {
    toppings = 1.0
  }

  if (twoToppings == true) {
    toppings = 1.75
  }

  if (threeToppings == true) {
    toppings = 2.5
  }

  if (fourToppings == true) {
    toppings = 3.35
  }

  var total = (size + toppings) * (1 + TAX)
  document.getElementById("cost").innerHTML =
    "The total cost is $" + total.toFixed(2)
}