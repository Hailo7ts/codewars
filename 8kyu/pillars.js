/**
 * Pillars
 * There are pillars near the road. The distance between the pillars is the same and the 
 * width of the pillars is the same. Your function accepts three arguments: number of pillars 
 * (≥ 1); distance between pillars (10 - 30 meters); width of the pillar (10 - 50 centimeters).
 * Calculate the distance between the first and the last pillar in centimeters (without the 
 * width of the first and last pillar).
 * 
 * P: three integers
 * R: distance as an integer
 * E:it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
 * assert.strictEqual(pillars(1, 10, 10) , 0);
 * });  
 * it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function(){
 * assert.strictEqual(pillars(2, 20, 25) , 2000);
 * });
 * P: 
 */

const pillars = (numPill, dist, width) => numPill > 1 ? (numPill-1)*(dist*100)+(width*(numPill-2)) : 0
