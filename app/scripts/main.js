/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';
  
  var pas = 10;
  var interval = pas * 3;
  
  var main = document.querySelector('main');
  var rond = document.querySelector('.rond');
  
  var coordonnee = {
        x : rond.style.left,
        y : rond.style.top, 
        flagX : rond.style.left !==  main.clientWidth, 
        flagY : rond.style.top !==  main.clientHeight
    };
  
  function flag(positionCourante, pas, limitMax, flagDefault) {
    var result = flagDefault;
      
    if(positionCourante + (pas * 4.5) >= limitMax) {
        result = false;
    } else {
        if(positionCourante - pas <= 0) {
            result = true;
        }
    }
    
    return result;
  }
  
  function calculPosition(positionCourante, pas, flag) {
      return (flag) ? positionCourante + pas : positionCourante - pas;
  }
  
  function calculCoordonnee(coord, limitMaxX, limitMaxY, pas) {
    var resFlagX = flag(coord.x, pas, limitMaxX, coord.flagX);
    var resFlagY = flag(coord.y, pas, limitMaxY, coord.flagY);
    var resX = calculPosition(coord.x, pas, resFlagX);
    var resY = calculPosition(coord.y, pas, resFlagY);
    
    return {
        x : resX,
        y : resY, 
        flagX : resFlagX, 
        flagY : resFlagY
    }
  }
  
  setInterval(function() {
      
    coordonnee = calculCoordonnee(coordonnee, main.clientWidth, main.clientHeight, pas);
      
    rond.style.left = coordonnee.x + 'px';
    rond.style.top = coordonnee.y + 'px';
      
  }, interval);
 
  // Your custom JavaScript goes here
})();
