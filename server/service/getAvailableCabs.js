const availableCabs = (cabsData, time) => {
    console.log(cabsData);
    return cabsData.filter(obj => obj.end_time < time);
    // return cabsData;
};

module.exports = { availableCabs: availableCabs };