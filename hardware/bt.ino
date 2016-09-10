/*********************************************************************
  This is an example for our nRF51822 based Bluefruit LE modules
  Pick one up today in the adafruit shop!
  Adafruit invests time and resources providing this open source code,
  please support Adafruit and open-source hardware by purchasing
  products from Adafruit!
  MIT license, check LICENSE for more information
  All text above, and the splash screen below must be included in
  any redistribution
*********************************************************************/

#include <Arduino.h>
#include <SPI.h>
#if not defined (_VARIANT_ARDUINO_DUE_X_) && not defined (_VARIANT_ARDUINO_ZERO_)
#include <SoftwareSerial.h>
#endif

#include "Adafruit_BLE.h"
#include "Adafruit_BluefruitLE_SPI.h"
#include "Adafruit_BluefruitLE_UART.h"

#include "BluefruitConfig.h"
#include <FastLED.h>
#define NUM_LEDS 25
#define DATA_PIN 6
#define READ_BUFSIZE                    (128)


/* Buffer to hold incoming characters */
//uint8_t packetbuffer[READ_BUFSIZE+1];
 CRGB leds[NUM_LEDS];
 CRGB reverse_leds[NUM_LEDS];
/*=========================================================================
    APPLICATION SETTINGS
      FACTORYRESET_ENABLE       Perform a factory reset when running this sketch
     
                                Enabling this will put your Bluefruit LE module
                              in a 'known good' state and clear any config
                              data set in previous sketches or projects, so
                                running this at least once is a good idea.
     
                                When deploying your project, however, you will
                              want to disable factory reset by setting this
                              value to 0.  If you are making changes to your
                                Bluefruit LE device via AT commands, and those
                              changes aren't persisting across resets, this
                              is the reason why.  Factory reset will erase
                              the non-volatile memory where config data is
                              stored, setting it back to factory default
                              values.
         
                                Some sketches that require you to bond to a
                              central device (HID mouse, keyboard, etc.)
                              won't work at all with this feature enabled
                              since the factory reset will clear all of the
                              bonding data stored on the chip, meaning the
                              central device won't be able to reconnect.
    MINIMUM_FIRMWARE_VERSION  Minimum firmware version to have some new features
    MODE_LED_BEHAVIOUR        LED activity, valid options are
                              "DISABLE" or "MODE" or "BLEUART" or
                              "HWUART"  or "SPI"  or "MANUAL"
    -----------------------------------------------------------------------*/
#define FACTORYRESET_ENABLE         1
#define MINIMUM_FIRMWARE_VERSION    "0.6.6"
#define MODE_LED_BEHAVIOUR          "MODE"
/*=========================================================================*/

// Create the bluefruit object, either software serial...uncomment these lines
/*
  SoftwareSerial bluefruitSS = SoftwareSerial(BLUEFRUIT_SWUART_TXD_PIN, BLUEFRUIT_SWUART_RXD_PIN);
  Adafruit_BluefruitLE_UART ble(bluefruitSS, BLUEFRUIT_UART_MODE_PIN,
                      BLUEFRUIT_UART_CTS_PIN, BLUEFRUIT_UART_RTS_PIN);
*/

/* ...or hardware serial, which does not need the RTS/CTS pins. Uncomment this line */
// Adafruit_BluefruitLE_UART ble(Serial1, BLUEFRUIT_UART_MODE_PIN);

/* ...hardware SPI, using SCK/MOSI/MISO hardware SPI pins and then user selected CS/IRQ/RST */
Adafruit_BluefruitLE_SPI ble(BLUEFRUIT_SPI_CS, BLUEFRUIT_SPI_IRQ, BLUEFRUIT_SPI_RST);

/* ...software SPI, using SCK/MOSI/MISO user-defined SPI pins and then user selected CS/IRQ/RST */
//Adafruit_BluefruitLE_SPI ble(BLUEFRUIT_SPI_SCK, BLUEFRUIT_SPI_MISO,
//                             BLUEFRUIT_SPI_MOSI, BLUEFRUIT_SPI_CS,
//                             BLUEFRUIT_SPI_IRQ, BLUEFRUIT_SPI_RST);


// A small helper
void error(const __FlashStringHelper*err) {
  Serial.println(err);
  while (1);
}
int frame=0;

void heart(int frame){
  if (frame==0){
    for(int i=0;i<NUM_LEDS;i++){
    leds[i] = CRGB::Black; 
  }
   leds[2*5+2] = CRGB::Red;
   
   
  }
  if (frame==1){
    for(int i=0;i<NUM_LEDS;i++){
    leds[i] = CRGB::Black; 
  }
   leds[3*5+1] = CRGB::Red;
   leds[3*5+2] = CRGB::Red;
   leds[3*5+3] = CRGB::Red;
   leds[2*5+1] = CRGB::Red;
   //leds[2*5+2] = CRGB::Red;
   leds[2*5+3] = CRGB::Red;
   leds[1*5+2] = CRGB::Red;
   
  }
    
    if (frame==2 ||frame==3 ||frame==4 ){
    for(int i=0;i<NUM_LEDS;i++){
    leds[i] = CRGB::Red; 
  }
   leds[4*5+0] = CRGB::Black;
   leds[4*5+2] = CRGB::Black;
   leds[4*5+4] = CRGB::Black;
   leds[1*5+0] = CRGB::Black;
   leds[1*5+4] = CRGB::Black;
   leds[0*5+0] = CRGB::Black;
   leds[0*5+1] = CRGB::Black;
   leds[0*5+3] = CRGB::Black;
   leds[0*5+4] = CRGB::Black;
    leds[3*5+1] = CRGB::Black;
   
   leds[3*5+3] = CRGB::Black;
   leds[2*5+1] = CRGB::Black;
   leds[2*5+2] = CRGB::Black;
   leds[2*5+3] = CRGB::Black;
   leds[1*5+2] = CRGB::Black;
  }
    }

    void beer(int frame){
      
        for(int i=0;i<NUM_LEDS;i++){
          leds[i] = CRGB::DarkGrey; 
      }
    
     leds[5*4+0] = CRGB::Black;
     leds[5*4+1] = CRGB::Black;
     leds[5*2+1] = CRGB::Black;
     leds[5*0+1] = CRGB::Black;
     leds[5*0+0] = CRGB::Black;
      
      if (frame>0){
      
    
     leds[5*0+2] = CRGB::Yellow;
  leds[5*0+3] = CRGB::Yellow;
  leds[5*0+4] = CRGB::Yellow;
      }
      if (frame>1){
      
    
     leds[5*1+0] = CRGB::Yellow;
  leds[5*1+1] = CRGB::Yellow;
  leds[5*1+2] = CRGB::Yellow;
      }
      if (frame>2){
      
    
     leds[5*2+2] = CRGB::Yellow;
  leds[5*2+3] = CRGB::Yellow;
  leds[5*2+4] = CRGB::Yellow;
      }
      if (frame>3){
      
    
     leds[5*3+0] = CRGB::Yellow;
  leds[5*3+1] = CRGB::Yellow;
  leds[5*3+2] = CRGB::Yellow;
      }
       if (frame>4){
      
    
     leds[5*4+2] = CRGB::White;
  leds[5*4+3] = CRGB::White;
  leds[5*4+4] = CRGB::White;
      }
  }

  void chicken(int frame){
      
       for(int i=0;i<NUM_LEDS;i++){
          leds[i] = CRGB::SandyBrown; 
      }
       for(int i=0;i<5;i++){
          leds[i] = CRGB::Black; 
      }
    
     leds[5*0+2+(frame%2)] = CRGB::Orange;
     leds[5*1+4] = CRGB::Black;
     leds[5*1+0] = CRGB::Black;
     leds[5*2+0] = CRGB::Black;
     leds[5*4+2] = CRGB::Black;
     leds[5*4+3] = CRGB::Black;
     leds[5*4+0] = CRGB::Black;
     leds[5*3+1] = CRGB::Black;
     //leds[5*3+2] = CRGB::Black;
     leds[5*3+4] = CRGB::Orange;
      
      
  }
  
   void smoke(int frame){
      
        for(int i=0;i<NUM_LEDS;i++){
          leds[i] = CRGB::Black; 
      }
       for(int i=0;i<5;i++){
          leds[i] = CRGB::White; 
      }
    
     leds[5*0+0] = CRGB::Red;
     leds[5*0+4] = CRGB::Orange;
     if(frame<5){
      leds[5*(frame%5)+4*(frame%2)] = CRGB::White;
     }

      
      
  }
  void osram(int frame){
      
        for(int i=0;i<NUM_LEDS;i++){
          leds[i] = CRGB::Black; 
      }
      
      if(frame==0){
          
          leds[5*0+2] = CRGB::OrangeRed;
         
          leds[5*4+2] = CRGB::OrangeRed;
          leds[5*3+1] = CRGB::OrangeRed;
          leds[5*3+3] = CRGB::OrangeRed;
          leds[5*2+1] = CRGB::OrangeRed;
          leds[5*2+3] = CRGB::OrangeRed;
          leds[5*1+1] = CRGB::OrangeRed;
          leds[5*1+3] = CRGB::OrangeRed;
        }
            if(frame==1){
        
          leds[5*0+3] = CRGB::OrangeRed;
         leds[5*0+2] = CRGB::OrangeRed;
          
          leds[5*1+3] = CRGB::OrangeRed;
          leds[5*4+1] = CRGB::OrangeRed;
         
          leds[5*2+2] = CRGB::OrangeRed;
          leds[5*3+1] = CRGB::OrangeRed;
        
          
          leds[5*4+2] = CRGB::OrangeRed;
        
        }
        if(frame==2){
           for(int j =0;j<4;j++){
           leds[5*j+1] = CRGB::OrangeRed;
            leds[5*j+3] = CRGB::OrangeRed;
          }
          leds[5*4+2] = CRGB::OrangeRed;
          leds[5*4+3] = CRGB::OrangeRed;
          leds[5*2+1] = CRGB::Black;
          leds[5*2+2] = CRGB::OrangeRed;
        }
   if(frame==3){
       /*   leds[5*0+0] = CRGB::OrangeRed;
          leds[5*2+1] = CRGB::OrangeRed;
          leds[5*2+3] = CRGB::OrangeRed;
          leds[5*2+2] = CRGB::OrangeRed;
          leds[5*0+4] = CRGB::OrangeRed;
             leds[5*4+1] = CRGB::OrangeRed;
          leds[5*4+3] = CRGB::OrangeRed;
          leds[5*4+2] = CRGB::OrangeRed;
          leds[5*3+0] = CRGB::OrangeRed;
          leds[5*3+4] = CRGB::OrangeRed;
          leds[5*2+0] = CRGB::OrangeRed;
          leds[5*2+4] = CRGB::OrangeRed;
          leds[5*1+0] = CRGB::OrangeRed;
          leds[5*1+4] = CRGB::OrangeRed;*/
           for(int j =0;j<4;j++){
           leds[5*j+1] = CRGB::OrangeRed;
            leds[5*j+3] = CRGB::OrangeRed;
          }
          leds[5*4+2] = CRGB::OrangeRed;
          leds[5*2+2] = CRGB::OrangeRed;
        }
   if(frame==4){
         for(int j =0;j<5;j++){
           leds[5*j+0] = CRGB::OrangeRed;
            leds[5*j+4] = CRGB::OrangeRed;
          }
           leds[5*3+3] = CRGB::OrangeRed;
           leds[5*3+1] = CRGB::OrangeRed;
           leds[5*2+2] = CRGB::OrangeRed;
         
          
        }
        
   

      
      
  }
    void spit(int frame){
      
      CRGB color=CRGB::Yellow;
      if(frame>0){
        color=CRGB::GreenYellow;
      }
       if(frame>1){
        color=CRGB::Green;
      }
        for(int i=0;i<NUM_LEDS;i++){
          leds[i] = color; 
      }
      
      leds[5*4+0] = CRGB::Black;
      leds[5*4+4] = CRGB::Black;
      leds[5*0+0] = CRGB::Black;
      leds[5*0+4] = CRGB::Black;
      leds[5*1+1] = CRGB::Red;
      leds[5*1+2] = CRGB::Red;
      leds[5*1+3] = CRGB::Red;
      leds[5*3+1] = CRGB::White;
      leds[5*3+3] = CRGB::White;
      if(frame>2){
        leds[5*1+1] = CRGB::GreenYellow;
      leds[5*1+2] = CRGB::GreenYellow;
      leds[5*1+3] = CRGB::GreenYellow; 
      }
      if(frame>3){
          for(int i=0;i<5*(frame-1);i++){
        //  leds[i] = CRGB::GreenYellow;
      }
      }
      
  }
void cocktail(int frame){
           
          for(int i=0;i<5;i++){
          leds[4*5+i] = CRGB::White;
          if(frame>4){
            leds[4*5+i] = CRGB::Red;
            }
          }
          for(int i=1;i<4;i++){
          leds[3*5+i] = CRGB::White;
           if(frame>3){
            leds[3*5+i] = CRGB::Red;
            }
          }
          leds[2*5+2] = CRGB::White;
           if(frame>2){
            leds[2*5+2] = CRGB::Red;
            }
          leds[1*5+2] = CRGB::White;
          for(int i=1;i<4;i++){
          leds[i] = CRGB::White;
          }
          if(frame>0){
            leds[4*5+2] = CRGB::Red;
            }
            if(frame>1){
            leds[3*5+2] = CRGB::Red;
            }
  }

  void clear(){
     for(int i=0;i<25;i++){
          leds[i] = CRGB::Black; 
      }
    }
  void oneColor(CRGB color){
     for(int i=0;i<25;i++){
          leds[i] = color; 
      }
    }
/**************************************************************************/
/*!
    @brief  Sets up the HW an the BLE module (this function is called
            automatically on startup)
*/
/**************************************************************************/
void setup(void)
{
   FastLED.addLeds<WS2811,6,GRB>(leds, NUM_LEDS);
  FastLED.show(); 
  /*for (int i = 0;i<3;i++){
    if(i%3==0){
      leds[i] = CRGB::Green;  
    }else{
      if(i%3==1){
      leds[i] = CRGB::Blue;  
    }else{
      leds[i] = CRGB::Red;  
    }  
    }
      
  }*/

  for(int i=20;i<25;i++){
          leds[i] = CRGB::Yellow; 
      }
    FastLED.show();
 // while (!Serial);  // required for Flora & Micro
  delay(500);
  for(int i=0;i<5;i++){
          leds[i] = CRGB::Green; 
      }
  FastLED.show();
  Serial.begin(115200);
  Serial.println(F("Adafruit Bluefruit Command Mode Example"));
  Serial.println(F("---------------------------------------"));

  /* Initialise the module */
  Serial.print(F("Initialising the Bluefruit LE module: "));

  if ( !ble.begin(VERBOSE_MODE) )
  {
    error(F("Couldn't find Bluefruit, make sure it's in CoMmanD mode & check wiring?"));
  }
    for(int i=0;i<10;i++){
          leds[i] = CRGB::Green; 
      }
    FastLED.show();
  Serial.println( F("OK!") );

  if ( FACTORYRESET_ENABLE )
  {
    /* Perform a factory reset to make sure everything is in a known state */
    Serial.println(F("Performing a factory reset: "));
    if ( ! ble.factoryReset() ) {
      error(F("Couldn't factory reset"));
    }
  }
  for(int i=0;i<15;i++){
          leds[i] = CRGB::Green; 
      } 
  FastLED.show();
  ble.println("AT+GAPDEVNAME=Super Lederhose");
  /* Disable command echo from Bluefruit */
  ble.echo(false);

  Serial.println("Requesting Bluefruit info:");
  /* Print Bluefruit information */
  ble.info();

  Serial.println(F("Please use Adafruit Bluefruit LE app to connect in UART mode"));
  Serial.println(F("Then Enter characters to send to Bluefruit"));
 

  ble.verbose(false);  // debug info is a little annoying after this point!
  for(int i=0;i<20;i++){
          leds[i] = CRGB::Green; 
      }
  FastLED.show(); 
  /* Wait for connection */
  
    FastLED.show();
    bool off=false;
    
  while (! ble.isConnected()) {
    delay(500);
    osram(frame);
    frame=(frame+1)%6;
     FastLED.show();
  }
oneColor(CRGB::Blue);
  FastLED.show();
   Serial.println(F("***********************"));
  
  // Set Bluefruit to DATA mode
  Serial.println( F("Switching to DATA mode!") );
  ble.setMode(BLUEFRUIT_MODE_DATA);

  Serial.println(F("***********************"));
  leds[5] = CRGB::Green; 
  FastLED.show();
  for(int i=0;i<NUM_LEDS;i++){
    leds[i] = CRGB::Black; 
  }
  
   FastLED.show(); 
}

int state=0;
/**************************************************************************/
/*!
    @brief  Constantly poll for new command or response data
*/
/**************************************************************************/
void loop(void)
{
  // Check for user input
  
// Check for user input
  char n, inputs[BUFSIZE+1];
  
 
  // Echo received data
  int pos=0;
  for (int timer=0;timer<500;timer++){
    while ( ble.available() )
    {
      timer=0;
      uint8_t  c = ble.read();
      inputs[pos]=c;
      pos=pos+1;
      Serial.print((char)c);
  
      // Hex output too, helps w/debugging!
      Serial.print(" [0x");
      if (c <= 0xF) Serial.print(F("0"));
      Serial.print(c, HEX);
      Serial.print("] ");
    }
  }
  for(int  i=0;i<NUM_LEDS;i++){
  //  leds[i]=CRGB::White;
  }
  if(pos<3){
    state=inputs[0]-0x30;///to send asscii numbers ;-)
    }
  
  if(state==0){
    for (int i=0;i+2<pos;i=i+3){
      leds[i/3]=CRGB(inputs[i],inputs[i+1],inputs[i+2]);
    }
  }
  frame=(frame+1)%6;
  if (state==1){
     heart(frame);
  }
  
   if(state==2){
    beer(frame);
    }
   if(state==3){
     chicken(frame);
   }
   if(state==4){
    smoke(frame);
    }
    if(state==5){
          spit(frame);
      }
       if(state==6){
          cocktail(frame);
      }
      if(state==9){
         clear();
      }

    FastLED.show(); 


}




