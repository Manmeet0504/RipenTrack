// 
// Collate spectral color data of varying fruits and vegetables and interpret this data set w/ a neural network model to predict ripening stages. 

// Connections
// ESP32:           
//                                AS7341 11-Channel Spectral Color Sensor
// 3.3V --------------------------- +
// GND  --------------------------- -
// A5   --------------------------- C
// A4   --------------------------- D
//                                10K Potentiometer
// A0   --------------------------- S




// Include required libraries:

#include "DFRobot_AS7341.h"
#include <SoftwareSerial.h>

SoftwareSerial nodemcu(21,22);




// Initialize the Ethernet client library


// Define the AS7341 object.
DFRobot_AS7341 as7341;
// Define AS7341 data objects:
DFRobot_AS7341::sModeOneData_t data1;
DFRobot_AS7341::sModeTwoData_t data2;

// Define the potentiometer pin:
#define pot A0;

// Define the class button pins:
#define class_1 2
#define class_2 3
#define class_3 4
#define class_4 5

// Define the control LED pins:


// Define the data holders:
int pot_val, class_1_val, class_2_val, class_3_val, class_4_val;

void setup(){
  
  Serial.begin(9600);

  // // Class button settings:
  // pinMode(class_1, INPUT_PULLUP);
  // pinMode(class_2, INPUT_PULLUP);
  // pinMode(class_3, INPUT_PULLUP);
  // pinMode(class_4, INPUT_PULLUP);
  // // Control LED settings:

  
  // Detect if I2C can communicate properly 
  while (as7341.begin() != 0) {
    Serial.println("I2C init failed, please check if the wire connection is correct");
    delay(1000);
  }

  // Enable the built-in LED on the AS7341 sensor.
  as7341.enableLed(true);

  
  
}
void loop(){

  //read_controls();
  //adjust_brightness();


  // Start spectrum measurement:
  // Channel mapping mode: 1.eF1F4ClearNIR
  as7341.startMeasure(as7341.eF1F4ClearNIR);
  // Read the value of sensor data channel 0~5, under eF1F4ClearNIR
  data1 = as7341.readSpectralDataOne();
  // Channel mapping mode: 2.eF5F8ClearNIR
  as7341.startMeasure(as7341.eF5F8ClearNIR);
  // Read the value of sensor data channel 0~5, under eF5F8ClearNIR
  data2 = as7341.readSpectralDataTwo();
  // Print data:

  int brightness = map(pot_val, 0, 1023, 1, 21);
  Serial.print(brightness);
  as7341.controlLed(brightness);
   Serial.print(",");
  Serial.print(data1.ADF1);
  Serial.print(",");
  Serial.print(data1.ADF2);
  Serial.print(",");
  Serial.print(data1.ADF3);
  Serial.print(",");
  Serial.print(data1.ADF4);
  Serial.print(",");
  Serial.print(data2.ADF5);
  Serial.print(",");
  Serial.print(data2.ADF6);
  Serial.print(",");
  Serial.print(data2.ADF7);
  Serial.print(",");
  Serial.print(data2.ADF8);
  Serial.print(",");
  // CLEAR and NIR:

  Serial.print(data1.ADNIR);
  Serial.print(",");
  Serial.print(data2.ADNIR);
  
  Serial.println();
  
}

// void read_controls(){
//   // Potentiometer:
//   pot_val = analogRead(pot);
//   // Class Buttons:
//   class_1_val = digitalRead(class_1);
//   class_2_val = digitalRead(class_2);
//   class_3_val = digitalRead(class_3);
//   class_4_val = digitalRead(class_4);
// }


