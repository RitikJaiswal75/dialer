# Project structure

```
- Dialer
|  - Display
|  - DialPad
|  | - DialerButton

```

## Commands to run

`npm start:` Start the development server

`npm build:` Build your project for production

`npm test:` test your app against the predefined tests

### App Features

- It is a simple dialpad where number buttons enter the number in the display.
- Pressing `C` clears the display.
- Pressing `R` will redial the existing number one by one by pressing on the number keys
- In case the display is empty the `R` button will display the previous value

### What do the tests Check

- Check for 12 buttons.
- check for 1 textbox.
- check what happens in case users press one button.
- check for case user presses multiple buttons
- check for `C` button clearing the display
- check user cannot directly enter value from keyboard.
