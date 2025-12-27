# ESP32 Spectral Color Sensor Project

## Overview

This project involves an ESP32 module, a spectral color sensor AS7341, and a potentiometer connected over a breadboard setup.

## Hardware Components

1. **ESP32 Module:** Microcontroller with Wi-Fi and Bluetooth capabilities.
2. **AS7341 Spectral Color Sensor:** Detects and measures light wavelengths for color sensing.
3. **Potentiometer:** Provides analog input for manual adjustment.

## Hardware Connections

### ESP32 Connections:

- Connect VCC and GND to the positive and ground rails on the breadboard.
- Connect TX and RX for serial communication with the AS7341, Pin D21 and D22.
- Connect Potentiometer: Connect to 3.3V, GND, and an analog pin (A34).

### AS7341 Connections:

- Connect VCC and GND to the positive and ground rails on the breadboard.
- Connect TX and RX for serial communication with the ESP32, D21 and D22.

### Potentiometer Connections:

- Connect 3.3V and GND to ESP32.
- Connect analog output to an analog pin on the ESP32 (e.g., A0).

## Additional Notes

- Ensure stable power supply within the operating voltage range.
- Adjust firmware code for AS7341 data reading and potentiometer adjustments.
- Thoroughly test connections and functionality before deployment.
