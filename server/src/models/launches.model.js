const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Exploration Crew X",
  rocket: "Alpha B",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["Nasa", "Explorer"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["Nasa", "Explorer"],
      upcoming: true,
      success: true,
    })
  );
}

module.exports = {
  launches,
  getAllLaunches,
  addNewLaunch,
};
