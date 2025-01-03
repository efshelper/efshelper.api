const FuelStopRepo = require("../efshelper.core/repository/fuelstop.repo");
const FuelStop = require("../efshelper.core/domain/fuel.stop");

async function fuelstopRoute(request, reply) {

    const fuelstops = JSON.parse(request.body);
    const added = [];

    const repo = new FuelStopRepo();

    fuelstops.forEach(fuelstop => {
        if (FuelStop.isValid(fuelstop)) {
            repo.addOne(fuelstop);
            added.push(fuelstop);
        }
    })

    reply.send(added);
}

module.exports = fuelstopRoute;
