import { createContext, useState } from "react";

export const AuctionContext = createContext();

export function AuctionProvider({ children }) {
  const [auctions, setAuctions] = useState([]);

  const addAuction = (item) => {
    setAuctions([
      ...auctions,
      {
        ...item,
        id: Date.now(),
        approved: true, // admin logic later
        highestBid: Number(item.startingPrice)
      }
    ]);
  };

  const placeBid = (id, amount) => {
    setAuctions(
      auctions.map((a) =>
        a.id === id && amount > a.highestBid
          ? { ...a, highestBid: Number(amount) }
          : a
      )
    );
  };

  return (
    <AuctionContext.Provider value={{ auctions, addAuction, placeBid }}>
      {children}
    </AuctionContext.Provider>
  );
}
