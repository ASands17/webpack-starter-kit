import { expect } from "chai";
import Trips from "../src/Trips";

describe("Trips", () => {
  let allTripsData;
  let allDestinationsData;
  let traveler1Id, traveler2Id, traveler3Id;
  let trips1, trips2, trips3;

  beforeEach(() => {
    traveler1Id = 1;
    traveler2Id = 2;
    traveler3Id = 3;

    allTripsData = [
      {
      "id": 1,
      "userID": 1,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 4,
      "userID": 1,
      "destinationID": 14,
      "travelers": 2,
      "date": "2022/02/25",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 5,
      "userID": 2,
      "destinationID": 29,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 6,
      "userID": 3,
      "destinationID": 35,
      "travelers": 3,
      "date": "2022/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 7,
      "userID": 1,
      "destinationID": 17,
      "travelers": 5,
      "date": "2022/5/28",
      "duration": 20,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 8,
      "userID": 2,
      "destinationID": 39,
      "travelers": 6,
      "date": "2022/02/07",
      "duration": 4,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 9,
      "userID": 3,
      "destinationID": 19,
      "travelers": 5,
      "date": "2022/12/19",
      "duration": 19,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 10,
      "userID": 1,
      "destinationID": 50,
      "travelers": 6,
      "date": "2022/07/23",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
      }
    ]

    allDestinationsData = [
      {
      "id": 49,
      "destination": "Castries, St Lucia",
      "estimatedLodgingCostPerDay": 650,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "alt": "aerial photography of rocky mountain under cloudy sky"
      },
      {
      "id": 25,
      "destination": "New York, New York",
      "estimatedLodgingCostPerDay": 175,
      "estimatedFlightCostPerPerson": 200,
      "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
      },
      {
      "id": 22,
      "destination": "Rome, Italy",
      "estimatedLodgingCostPerDay": 90,
      "estimatedFlightCostPerPerson": 650,
      "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "people standing inside a colosseum during the day"
      },
      {
      "id": 14,
      "destination": "Marrakesh, Morocco",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 830,
      "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
      "alt": "people buying oranges and other fruit from a street vendor"
      },
      {
      "id": 29,
      "destination": "Willemstad, Curaçao",
      "estimatedLodgingCostPerDay": 80,
      "estimatedFlightCostPerPerson": 1100,
      "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
      "alt": "brightly colored buildings near body of water"
      },
      {
      "id": 35,
      "destination": "Anchorage, Alaska",
      "estimatedLodgingCostPerDay": 200,
      "estimatedFlightCostPerPerson": 100,
      "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "man riding on kayak surrounded by mountains"
      },
      {
      "id": 17,
      "destination": "Jaipur, India",
      "estimatedLodgingCostPerDay": 30,
      "estimatedFlightCostPerPerson": 1200,
      "image": "https://images.unsplash.com/photo-1534758607507-754e582adfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "a courtyard with trees and mountain in the distance"
      },
      {
      "id": 39,
      "destination": "Porto, Portugal",
      "estimatedLodgingCostPerDay": 995,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1564644929137-34b018daf461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80",
      "alt": "looking over the water on to a city on a hill"
      },
      {
      "id": 19,
      "destination": "Quito, Ecuador",
      "estimatedLodgingCostPerDay": 60,
      "estimatedFlightCostPerPerson": 500,
      "image": "https://images.unsplash.com/photo-1501684691657-cf3012635478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "a city at night with cloudy, snowy mountains in the distance"
      },
      {
      "id": 50,
      "destination": "Hobart, Tasmania",
      "estimatedLodgingCostPerDay": 1400,
      "estimatedFlightCostPerPerson": 75,
      "image": "https://images.unsplash.com/photo-1506982724953-b1fbe939e1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "alt": "person sitting on brown rock in front of small body of water"
      }
    ]

    trips1 = new Trips(traveler1Id, allTripsData, allDestinationsData);
    trips2 = new Trips(traveler2Id, allTripsData, allDestinationsData);
    trips3 = new Trips(traveler3Id, allTripsData, allDestinationsData);
  });

  it("should be an instance of Trips", () => {
    expect(allTripsData).to.be.an("array");
    expect(trips1).to.be.an.instanceof(Trips);
    expect(trips2).to.be.an.instanceof(Trips);
    expect(trips3).to.be.an.instanceof(Trips);
  });

  it("should hold all trips", () => {
    expect(allTripsData).to.deep.equal([
      {
      "id": 1,
      "userID": 1,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 4,
      "userID": 1,
      "destinationID": 14,
      "travelers": 2,
      "date": "2022/02/25",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 5,
      "userID": 2,
      "destinationID": 29,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 6,
      "userID": 3,
      "destinationID": 35,
      "travelers": 3,
      "date": "2022/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 7,
      "userID": 1,
      "destinationID": 17,
      "travelers": 5,
      "date": "2022/5/28",
      "duration": 20,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 8,
      "userID": 2,
      "destinationID": 39,
      "travelers": 6,
      "date": "2022/02/07",
      "duration": 4,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 9,
      "userID": 3,
      "destinationID": 19,
      "travelers": 5,
      "date": "2022/12/19",
      "duration": 19,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 10,
      "userID": 1,
      "destinationID": 50,
      "travelers": 6,
      "date": "2022/07/23",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
      }
    ]);
  });

  it("should have a unique Traveler ID", () => {
    expect(trips1.travelerId).to.equal(1);
    expect(trips2.travelerId).to.equal(2);
    expect(trips3.travelerId).to.equal(3);
  });

  it("should get all of a Traveler's trips by ID", function () {
    expect(trips3.getTravelerTrips()).to.deep.equal([
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 6,
      "userID": 3,
      "destinationID": 35,
      "travelers": 3,
      "date": "2022/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 9,
      "userID": 3,
      "destinationID": 19,
      "travelers": 5,
      "date": "2022/12/19",
      "duration": 19,
      "status": "pending",
      "suggestedActivities": []
      }
      ])
    });

    it("should calculate total cost approved trips", function () {
      expect(trips3.getCostOfApprovedTrips()).to.equal(6853);
    });

    // console.log(trips1.getCostOfApprovedTrips())
});
