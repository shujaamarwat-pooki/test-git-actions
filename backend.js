const fs = require("fs");
const path = require("path");

const blockDir = path.join(__dirname, "src/app/block");
const outputFile = path.join(__dirname, "src/app/shared/blocks.ts");

// Ensure the output file exists or create it
if (!fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, "export const blocks = [];");
}

// Read the existing blocks from the file
let existingBlocks = [];
try {
  const fileContents = fs.readFileSync(outputFile, "utf-8");

  const exportMatch = fileContents.match(/export const blocks = (\[.*?\]);/s); // Use the 's' flag for dot-all

  if (exportMatch && exportMatch[1]) {
    existingBlocks = JSON.parse(exportMatch[1]);
  }
} catch (error) {
  console.error("Error reading or parsing blocks.ts:", error);
}

// Scan the block directory and generate new blocks
let newBlocks = [];
fs.readdirSync(blockDir).forEach((file) => {
  const blockPath = path.join(blockDir, file);
  if (fs.statSync(blockPath).isDirectory()) {
    // Check if a block with the same name or id already exists
    const blockExists = existingBlocks.some(
      (existingBlock) =>
        existingBlock.name === file ||
        existingBlock.id ===
          `block-${existingBlocks.length + newBlocks.length + 1}`
    );

    // Only add if the block doesn't already exist
    if (!blockExists) {
      const newId = `block-${existingBlocks.length + newBlocks.length + 1}`; // Generate a new unique ID
      newBlocks.push({ id: newId, name: file });
    }
  }
});

// Combine existing blocks and new blocks without modifying the existing ones
const updatedBlocks = [...existingBlocks, ...newBlocks];

// Write the updated blocks to the file
const output = `export const blocks = ${JSON.stringify(
  updatedBlocks,
  null,
  2
)};`;
fs.writeFileSync(outputFile, output);

console.log(
  `Successfully updated blocks.ts with ${updatedBlocks.length} blocks.`
);
