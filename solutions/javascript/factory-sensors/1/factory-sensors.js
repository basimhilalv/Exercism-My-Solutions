// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70)
    throw new Error(humidityPercentage);
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
   if(temperature)
   {
     if(temperature > 500)
     {
       throw new OverheatingError(temperature);
     }
   }
  else
   {
     throw new ArgumentError;
   }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if(error.constructor === ArgumentError)
    {
      actions.alertDeadSensor();
    }
    else if(error.constructor === OverheatingError)
    {
      if(error.temperature < 600){
        actions.alertOverheating();
      }
      else
        actions.shutdown();
    }
    else throw error;
  }
}
