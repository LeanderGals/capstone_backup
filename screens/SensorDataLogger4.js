import { setItem, getItem } from '../utils/asyncStorage';

const appendSensorDataToLogs4 = async () => {
  try {
    const storedLogs = await getItem('sensorLogs4');
    const updatedLogs = storedLogs ? JSON.parse(storedLogs) : [];

    const tempt2 = await getItem('logenvitempt');
    const light2 = await getItem('loglight');
    const turb2 = await getItem('logturbidity');
    const hum2 = await getItem('loghumidity');
    const ph2 = await getItem('logph');
    const ds2 = await getItem('logwatertempt');
    const aquariumName = await getItem('aquariumlogname');

    
    const newLogData = {
      temperature: tempt2, 
      humidity: hum2, 
      turbidity: turb2, 
      phLevel: ph2, 
      ds18b20temp: ds2, 
      lux: light2,
      aquariumName: aquariumName,
    };

    const timestamp = new Date().toISOString();
    const newLog = {
      timestamp,
      data: newLogData,
    };

    const updatedLogsWithNewLog = [newLog, ...updatedLogs];

    await setItem('sensorLogs4', JSON.stringify(updatedLogsWithNewLog));
    console.log('Sensor data appended to logs:', newLog);
  } catch (error) {
    console.error('Error appending sensor data to logs:', error);
  }
};

const startDataLogging4 = () => {
  setInterval(() => {
    appendSensorDataToLogs4();
  }, 120000); // Run every 2 minutes
};

export {startDataLogging4, appendSensorDataToLogs4 };
