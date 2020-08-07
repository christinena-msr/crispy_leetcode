/**
 * Problem Statement: 
 * Given the meal price (base cost of a meal), 
 * tip percent (the percentage of the meal price being added as tip), 
 * and tax percent (the percentage of the meal price being added as tax) for a meal, 
 * find and print the meal's total cost.
 */

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    return Math.round(meal_cost * (1 + (tip_percent + tax_percent)/100));

}