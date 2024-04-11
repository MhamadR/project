const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Exploration Crew X",
  rocket: "Alpha B",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["Neil, Vick"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  launches,
  getAllLaunches,
};
