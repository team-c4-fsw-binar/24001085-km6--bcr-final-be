const { getTickets } = require("../repositories/find_ticket");

exports.getFilteredTickets = async (payload) => {
  const {
    from,
    to,
    departure_date,
    return_date,
    total_passengers,
    seat_class,
    filter,
  } = payload;

  const departure_flight = await getTickets(departure_date, seat_class);
  let filtered_return_flight = [];

  let filtered_departure_flight = departure_flight;

  filtered_departure_flight = filtered_departure_flight.filter((ticket) => {
    return ticket.departureAirport === from && ticket.arrivalAirport === to;
  });

  if (seat_class === "economy") {
    filtered_departure_flight = filtered_departure_flight.filter((ticket) => {
      return ticket.numberOfEconomySeatsLeft >= total_passengers;
    });
    if (filter === "harga_termurah") {
      filtered_departure_flight = filtered_departure_flight.sort(
        (a, b) => a.price - b.price
      );
    }
  }
  if (seat_class === "premium") {
    filtered_departure_flight = filtered_departure_flight.filter((ticket) => {
      return ticket.numberOfPremiumSeatsLeft >= total_passengers;
    });
    if (filter === "harga_termurah") {
      filtered_departure_flight = filtered_departure_flight.sort(
        (a, b) => a.price - b.price
      );
    }
  }
  if (seat_class === "business") {
    filtered_departure_flight = filtered_departure_flight.filter((ticket) => {
      return ticket.numberOfBusinessSeatsLeft >= total_passengers;
    });
    if (filter === "harga_termurah") {
      filtered_departure_flight = filtered_departure_flight.sort(
        (a, b) => a.price - b.price
      );
    }
  }
  if (seat_class === "first_class") {
    filtered_departure_flight = filtered_departure_flight.filter((ticket) => {
      return ticket.numberOfFirstClassSeatsLeft > total_passengers;
    });
    if (filter === "harga_termurah") {
      filtered_departure_flight = filtered_departure_flight.sort(
        (a, b) => a.price - b.price
      );
    }
  }
  if (filter === "durasi_terpendek") {
    filtered_departure_flight = filtered_departure_flight.sort((a, b) => {
      const durationA = new Date(a.arrivalTime) - new Date(a.departureTime);
      const durationB = new Date(b.arrivalTime) - new Date(b.departureTime);
      return durationA - durationB;
    });
  }
  if (filter === "keberangkatan_paling_awal") {
    filtered_departure_flight = filtered_departure_flight.sort(
      (a, b) => new Date(a.departureTime) - new Date(b.departureTime)
    );
  }
  if (filter === "keberangkatan_paling_akhir") {
    filtered_departure_flight = filtered_departure_flight.sort(
      (a, b) => new Date(b.departureTime) - new Date(a.departureTime)
    );
  }
  if (filter === "kedatangan_paling_awal") {
    filtered_departure_flight = filtered_departure_flight.sort(
      (a, b) => new Date(a.arrivalTime) - new Date(b.arrivalTime)
    );
  }
  if (filter === "kedatangan_paling_akhir") {
    filtered_departure_flight = filtered_departure_flight.sort(
      (a, b) => new Date(b.arrivalTime) - new Date(a.arrivalTime)
    );
  }

  if (return_date) {
    const return_flight = await getTickets(return_date, seat_class);

    filtered_return_flight = return_flight;

    filtered_return_flight = filtered_return_flight.filter((ticket) => {
      return ticket.departureAirport === from && ticket.arrivalAirport === to;
    });

    if (seat_class === "economy") {
      filtered_return_flight = filtered_return_flight.filter((ticket) => {
        return ticket.numberOfEconomySeatsLeft >= total_passengers;
      });
      if (filter === "harga_termurah") {
        filtered_return_flight = filtered_return_flight.sort(
          (a, b) => a.price - b.price
        );
      }
    }
    if (seat_class === "premium") {
      filtered_return_flight = filtered_return_flight.filter((ticket) => {
        return ticket.numberOfPremiumSeatsLeft >= total_passengers;
      });
      if (filter === "harga_termurah") {
        filtered_return_flight = filtered_return_flight.sort(
          (a, b) => a.price - b.price
        );
      }
    }
    if (seat_class === "business") {
      filtered_return_flight = filtered_return_flight.filter((ticket) => {
        return ticket.numberOfBusinessSeatsLeft >= total_passengers;
      });
      if (filter === "harga_termurah") {
        filtered_return_flight = filtered_return_flight.sort(
          (a, b) => a.price - b.price
        );
      }
    }
    if (seat_class === "first_class") {
      filtered_return_flight = filtered_return_flight.filter((ticket) => {
        return ticket.numberOfFirstClassSeatsLeft > total_passengers;
      });
      if (filter === "harga_termurah") {
        filtered_return_flight = filtered_return_flight.sort(
          (a, b) => a.price - b.price
        );
      }
    }
    if (filter === "durasi_terpendek") {
      filtered_return_flight = filtered_return_flight.sort((a, b) => {
        const durationA = new Date(a.arrivalTime) - new Date(a.departureTime);
        const durationB = new Date(b.arrivalTime) - new Date(b.departureTime);
        return durationA - durationB;
      });
    }
    if (filter === "keberangkatan_paling_awal") {
      filtered_return_flight = filtered_return_flight.sort(
        (a, b) => new Date(a.departureTime) - new Date(b.departureTime)
      );
    }
    if (filter === "keberangkatan_paling_akhir") {
      filtered_return_flight = filtered_return_flight.sort(
        (a, b) => new Date(b.departureTime) - new Date(a.departureTime)
      );
    }
    if (filter === "kedatangan_paling_awal") {
      filtered_return_flight = filtered_return_flight.sort(
        (a, b) => new Date(a.arrivalTime) - new Date(b.arrivalTime)
      );
    }
    if (filter === "kedatangan_paling_akhir") {
      filtered_return_flight = filtered_return_flight.sort(
        (a, b) => new Date(b.arrivalTime) - new Date(a.arrivalTime)
      );
    }
  }

  return {
    departure_flight: filtered_departure_flight,
    return_flight: filtered_return_flight,
  };
};
