const encodeMessage = (str) => {
  // Encryptor functions used here
  // caesarCipher() requires an amount (a number between 0 and 26)
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
};

const decodeMessage = (str) => {
  // Take an encoded message and work the original message by reversing (-6)the encoding process.
  return caesarCipher(symbolCipher(reverseCipher(str)), -6);
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  }
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  }

  process.stdout.write(output + '\n');
  process.exit();
};

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
