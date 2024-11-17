const generateDiceBearAvataaars = (seed) =>
  `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}`;

const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/9.x/bottts/svg?seed=${seed}`;

const generateDiceBearGridy = (seed) =>
  `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];

  // Define the names list with only 6 names
  const namesList = ["John", "Jane", "Mike", "Hadassah", "Mark", "Esther"];

  // Generate 2 Avataaars
  for (let i = 0; i < 2; i++) {
    const seed = namesList[i]; // Use namesList for seeds
    const avataaars = generateDiceBearAvataaars(seed);
    data.push(avataaars);
  }

  // Generate 2 Bottts
  for (let i = 2; i < 4; i++) {
    const seed = namesList[i]; // Use namesList for seeds
    const bottts = generateDiceBearBottts(seed);
    data.push(bottts);
  }

  // Generate 2 Gridy
  for (let i = 4; i < 6; i++) {
    const seed = namesList[i]; // Use namesList for seeds
    const gridy = generateDiceBearGridy(seed);
    data.push(gridy);
  }

  return data;
};
