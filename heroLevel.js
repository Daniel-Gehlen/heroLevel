// Prompt the user to provide the hero's name and experience points (XP)
const heroName = gets();
const heroXP = parseInt(gets());

// Use a decision structure to classify the hero's level
let heroLevel;

if (heroXP < 1000) {
  heroLevel = "Iron";
} else if (heroXP >= 1001 && heroXP <= 2000) {
  heroLevel = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
  heroLevel = "Silver";
} else if (heroXP >= 5001 && heroXP <= 7000) {
  heroLevel = "Gold";
} else if (heroXP >= 7001 && heroXP <= 8000) {
  heroLevel = "Platinum";
} else if (heroXP >= 8001 && heroXP <= 9000) {
  heroLevel = "Ascendant";
} else if (heroXP >= 9001 && heroXP <= 10000) {
  heroLevel = "Immortal";
} else {
  heroLevel = "Radiant";
}

// Display the message with the hero's name and level
print(`The hero named ${heroName} is at the ${heroLevel} level`);
